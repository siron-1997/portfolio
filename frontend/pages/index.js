import dynamic from 'next/dynamic'
import { useRef, useState, useEffect } from 'react'
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

export default function HomePage({ data }) {
  const pageHeaderRef = useRef(null),
        worksRef = useRef(null),
        portalSectionRef = useRef(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const { pageHeaderCtx, worksCtx } = homeAnimation({
      portalSection: portalSectionRef.current,
      pageHeaderRef,
      worksRef
    })

    return () => {
      pageHeaderCtx.revert()
      worksCtx.revert()
    }
  }, [])

  return (
    <>
      <ModelViewerLoading isLoading={isLoading} />
      <Layout metaProps={{
        description: introduction.description,
        type: 'website'
      }}>
        <PageHeader
          pageHeaderRef={pageHeaderRef}
          figcaptionClassName={s.figcaption}
          Background={
            <Home
              pageHeaderRef={pageHeaderRef}
              setIsLoading={setIsLoading}
            />
          }
        >
          <section ref={portalSectionRef}>
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
