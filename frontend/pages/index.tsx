import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useRef, useState } from 'react'
import { Layout } from '@/components/layout'
import { Portal, Works } from '@/components/home'
import { PageHeader } from '@/components/general'
import { ModelViewerLoading } from '@/components/etc'
import { introduction } from '@/assets/about-contents'
import { fetcher } from '@/utils/strapi'
import s from '@/styles/Home.module.css'

const Home = dynamic(() => import('@/components/ui/canvas/home/Home'), { ssr: false })

type Props = {
  data: any
}
type HomeElementContextProps = {
  pageHeaderRef: React.MutableRefObject<HTMLElement | null>
}

export const HomeElementContext = React.createContext<HomeElementContextProps | null>(null)

export default function HomePage({ data }: Props) {
  const pageHeaderRef = useRef<HTMLElement | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
          <Portal isLoading={isLoading} />
        </PageHeader>
        <Works data={data} />
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
