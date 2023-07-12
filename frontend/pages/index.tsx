import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useRef, useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layout'
import { Works } from '@/components/home'
import { PageHeader } from '@/components/general'
import { ModelViewerLoading } from '@/components/etc'
import { homeAnimation } from '@/animations/pages/home'
import { introduction } from '@/assets/about-contents'
import { fetcher } from '@/utils/strapi'
import s from '@/styles/Home.module.css'

const Home = dynamic(() => import('@/components/ui/canvas/home/Home'), { ssr: false })

type CustomProps = {
  data: any
}
type HomeElementContextProps = {
  pageHeaderRef: React.MutableRefObject<HTMLElement | null>
}

export const HomeElementContext = React.createContext<HomeElementContextProps | null>(null)

export default function HomePage({ data }: CustomProps) {
  const pageHeaderRef = useRef<HTMLElement | null>(null),
        pageHeaderSectionRef = useRef<HTMLElement | null>(null),
        worksRef = useRef<HTMLElement | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  /* アニメーション作成 */
  useEffect(() => {
    if (!isLoading) {
      const { pageHeaderCtx, worksCtx } = homeAnimation({
        pageHeaderTitle: pageHeaderSectionRef.current.querySelector('h1'),
        worksTitle: worksRef.current.querySelector('h1'),
        worksCard: worksRef.current.querySelector('div'),
        pageHeaderSectionRef,
        worksRef
      })
  
      return () => {
        pageHeaderCtx.revert()
        worksCtx.revert()
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [isLoading])

  return (
    <>
      <Layout metaProps={{
        description: introduction.description,
        type: 'website'
      }}>
        <ModelViewerLoading isLoading={isLoading} />
        <PageHeader
          pageHeaderRef={pageHeaderRef}
          figcaptionClassName={s.figcaption}
          Background={
            <HomeElementContext.Provider value={{ pageHeaderRef: pageHeaderRef }}>
              <Home setIsLoading={setIsLoading} />
            </HomeElementContext.Provider>
          }
        >
          <section ref={pageHeaderSectionRef}>
            <Typography component='h1' variant='h1'>Symphony</Typography>
          </section>
        </PageHeader>
        <Works data={data} worksRef={worksRef} />
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let data = {}

  try {
    const res = await fetcher('/api/works?populate=main')
    data = res.data.data
  } catch (error) {
    console.log('error', error)
  }

  return {
    props: { data }
  }
}
