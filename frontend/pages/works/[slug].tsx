import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useState, useRef, Suspense } from 'react'
import cn from 'classnames'
import { Layout } from '@/components/layout'
import { PageHeader } from '@/components/general'
import { ModelViewerLoading } from '@/components/etc'
import { Introduction, Controls, ModelViewerPortal } from '@/components/works/work/modelViewer'
import { Categories, Description, Images, MainImage, NormalViewerPortal, Tags } from '@/components/works/work/normalViewer'
import { fetcher } from '@/utils/strapi'
import { introduction } from '@/assets/works-contents'
import s from '@/styles/works/work/index.module.css'
import g from '@/styles/global.module.css'

const Work = dynamic(() => import('@/components/ui/canvas/work/Work'), { ssr: false })

type Props = {
    post?: any
}
type WorkDataContextProps = {
    isInitialControl?: boolean,
    setIsInitialControl?: React.Dispatch<React.SetStateAction<boolean>>,
    isStartControls?: boolean,
    setIsStartControls?: React.Dispatch<React.SetStateAction<boolean>>,
    currentIndex?: number,
    setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>,
    isFingerVisible?: boolean,
    setIsFingerVisible?: React.Dispatch<React.SetStateAction<boolean>>,
    isViewerActive?: boolean,
    setIsViewerActive?: React.Dispatch<React.SetStateAction<boolean>>
    // controlsData?: any,
    post?: any
}
type SectionsContextProps = {
    pageHeaderRef?: React.RefObject<HTMLElement | null>,
    introductionRef?: React.RefObject<HTMLDivElement | null>,
    controlsRef?: React.RefObject<HTMLDivElement | null>,
    toggleButtonRef?: React.RefObject<HTMLDivElement | null>
}

export const WorkDataContext = React.createContext<WorkDataContextProps | null>(null),
             SectionsContext = React.createContext<SectionsContextProps | null>(null)

export default function WorkPage({ post }: Props) {
    /* modelViewer */
    const pageHeaderRef = useRef<HTMLElement | null>(null),
          introductionRef = useRef<HTMLDivElement | null>(null),
          controlsRef = useRef<HTMLDivElement | null>(null),
          toggleButtonRef = useRef<HTMLDivElement | null>(null)
    /* modelViewer */
    const [isInitialControl, setIsInitialControl] = useState<boolean>(true)
    const [isStartControls, setIsStartControls] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isFingerVisible, setIsFingerVisible] = useState<boolean>(true)
    const [isViewerActive, setIsViewerActive] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const normalViewerClassNames = cn(g.root_container, s.normal_viewer)
    // const controlsData = post?.attributes?.sections?.filter((item: any) => item?.__component.match(/.controls$/))[0]

    console.log("======================================")
    console.log(post)

    return (
        <Layout
            metaProps={{
                title: `Junpei Oue | ${introduction.title} | ${post?.attributes?.title}`,
                description: post?.attributes?.description,
                image_path: `${process.env.NEXT_PUBLIC_STRAPI_URL}${post?.attributes?.main?.data?.attributes?.url}`,
                type: 'article'
            }}
            isViewerActive={isViewerActive}
        >
            {post?.attributes?.tags === 'three' ? (
                <>
                    <ModelViewerLoading isLoading={isLoading} />
                    <article>
                        <PageHeader
                            id='model-viewer'
                            pageHeaderRef={pageHeaderRef}
                            figureClassName={s.figure}
                            figcaptionClassName={s.figcaption}
                            Background={
                                <SectionsContext.Provider value={{ pageHeaderRef, introductionRef, controlsRef, toggleButtonRef }}>
                                    <WorkDataContext.Provider
                                        value={{
                                            isInitialControl, setIsInitialControl,
                                            isStartControls, setIsStartControls,
                                            currentIndex, setCurrentIndex,
                                            setIsFingerVisible,
                                            isViewerActive,
                                            // controlsData,
                                            post
                                        }}
                                    >
                                        <Suspense fallback={<ModelViewerLoading isLoading={true} />}>
                                            <Work post={post} setIsLoading={setIsLoading} />
                                        </Suspense>
                                    </WorkDataContext.Provider>
                                </SectionsContext.Provider>
                            }
                        >
                            <ModelViewerPortal post={post} isLoading={isLoading} />
                        </PageHeader>
                        <SectionsContext.Provider value={{ introductionRef, controlsRef, toggleButtonRef }}>
                            {/* Introduction */}
                            <WorkDataContext.Provider value={{ isFingerVisible, setIsFingerVisible, isViewerActive, setIsViewerActive }}>
                                <Introduction post={post} isLoading={isLoading} />
                            </WorkDataContext.Provider>
                            {/* Controls */}
                            {/* <WorkDataContext.Provider value={{ setIsInitialControl, currentIndex, setCurrentIndex }}>
                                <Controls data={controlsData} isLoading={isLoading} />
                            </WorkDataContext.Provider> */}
                        </SectionsContext.Provider>
                    </article>
                </>
            ) : (
                <article>
                    <section className={normalViewerClassNames}>
                        <NormalViewerPortal post={post} />
                        <MainImage post={post} />
                        <div className={s.normal}>
                            <Categories post={post} />
                            <Tags post={post} />
                        </div>
                        <Description post={post} />
                        <Images post={post} />
                    </section>
                </article>
            )}
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    let paths = []

    try {
        const res = await fetcher('/api/works')
        const posts = await res.data.data
        paths = posts.map((post: any) => ({
            params: { slug: post.id.toString() }
        }))
    } catch (error) {
        console.log('paths', error)
    }

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    let post = {}
    try {
        const res = await fetcher(`/api/works/${slug}?populate=*`)
        post = res.data.data
    } catch (error) {
        console.log('post', error)
    }

    return {
        props: {
          post: post || null
        },
        revalidate: 60
    }
}