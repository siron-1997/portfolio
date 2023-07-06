import dynamic from 'next/dynamic'
import React, { useRef, useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layout'
import { Works } from '@components/home'
import { PageHeader } from '@components/general'
import { ModelViewerLoading } from '@components/etc'
import { homeAnimation } from '@/animations/pages/home'
import { introduction } from '@/assets/about-contents'
import { fetcher } from '@/utils/strapi'
import s from '@/styles/Home.module.css'

const Home = dynamic(() => import('@/components/ui/canvas/home/Home'), { ssr: false })

export const HomeElementContext = React.createContext()

export default function HomePage({ data }) {
  const pageHeaderRef = useRef(null),
        pageHeaderSectionRef = useRef(null),
        worksRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  /* アニメーション作成 */
  useEffect(() => {
    if (!isLoading) {
      const { pageHeaderCtx, worksCtx } = homeAnimation({
        pageHeaderTitle: pageHeaderSectionRef.current.children[0],
        worksTitle: worksRef.current.children[0],
        worksCard: worksRef.current.children[1],
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
            <HomeElementContext.Provider value={{ pageHeaderRef }}>
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

export async function getServerSideProps() {
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
