import Head from 'next/head'
import { useRouter } from 'next/router'
import { Noto_Sans_JP } from '@next/font/google'
import { Suspense, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { Loading } from '@/components/etc'
import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'

const notoSansJP400 = Noto_Sans_JP({
  weight: '400',
  display: 'swap',
  preload: false
})
const notoSansJP500 = Noto_Sans_JP({
  weight: '500',
  display: 'swap',
  preload: false
})
const notoSansJP700 = Noto_Sans_JP({
  weight: '700',
  display: 'swap',
  preload: false
})

const FONT_FAMILY_ROOT = `
  :root {
    --font-ja-primary-400: ${notoSansJP400.style.fontFamily};
    --font-ja-primary-500: ${notoSansJP500.style.fontFamily};
    --font-ja-primary-700: ${notoSansJP700.style.fontFamily};
  }
`

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920
    },
  },
})

export default function App({ Component, pageProps }) {

  const options = {
    showAfterMs: false,
    speed: 500,
    // template: '<div className="bar" role="bar">%</div>'
  }

  const router = useRouter();

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      // ページ更新時の処理をここに記述する
      console.log("ページが更新されました");
    };

    router.events.on("beforeHistoryChange", handleBeforeHistoryChange)

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  return (
    <>
        <Head>
          <style>{FONT_FAMILY_ROOT}</style>
        </Head>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={50}
          showAfterMs={500}
          options={options}
            
        />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}
