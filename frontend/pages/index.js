import { useRef, useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layout'
import { Works } from '@components/home'
import { PageHeader } from '@components/general'
import { Home } from 'components/ui/canvas'
import { ModelViewerLoading } from '@components/etc'
import { homeAnimation } from '@/animations/pages/home'
import { fetcher } from '@/utils/strapi'

export default function HomePage({ data }) {
  const pageHeaderRef = useRef(null),
        worksRef = useRef(null),
        topSectionRef = useRef(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const topSection = topSectionRef.current
    const works = worksRef.current

    const cleanup = homeAnimation(topSection, works)

    return () => cleanup()
  }, [])

  return (
    <>
      <ModelViewerLoading isLoading={isLoading} />
      <Layout>
        <PageHeader
          pageHeaderRef={pageHeaderRef}
          Background={
            <Home
              pageHeaderRef={pageHeaderRef}
              setIsLoading={setIsLoading}
            />
          }
        >
          <Typography component='section' ref={topSectionRef}>
            <Typography component='h1' variant='h1'>HOME Page</Typography>
          </Typography>
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
