import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { Suspense, useState, useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import NextNProgress from 'nextjs-progressbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { PageLoading } from '@/components/etc'
import { theme } from '@/configs/theme'
import { colors } from '@/assets/colors'
import '@/styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

type Options = {
  showAfterMs: boolean,
  speed: number
}

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const options: Options = { showAfterMs: false, speed: 500, }

  const handleRouteChangeStart = (): void => setIsLoading(() => true)
  const handleRouteChangeComplete = (): void => setIsLoading(() => false)

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  return (
    <>
        <NextNProgress
          color={colors.navigation}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          options={options}
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<PageLoading isLoading={true} />}>
            <PageLoading isLoading={isLoading} />
            <Component {...pageProps} />
          </Suspense>
        </ThemeProvider>
    </>
  )
}
