import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useState, useRef, useEffect, Suspense } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { Layout } from '@/components/layout'
import { PageHeader } from '@/components/general'
import { ModelViewerLoading } from '@/components/etc'
import { Introduction, Controls } from '@/components/works/work/modelViewer'
import { Categories, Description, Images, MainImage, Tags } from '@/components/works/work/normalViewer'
import { fetcher } from '@/utils/strapi'
import { normalViewerAnimation, modelViewerAnimation } from '@/animations/pages/works/work'
import { introduction } from '@/assets/works-contents'
import s from '@/styles/works/work/index.module.css'
import g from '@/styles/global.module.css'

const Work = dynamic(() => import('@/components/ui/canvas/work/Work'), { ssr: false })

type CustomProps = {
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
    controlsData?: any,
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

export default function WorkPage({ post }: CustomProps) {
    /* modelViewer */
    const pageHeaderRef = useRef<HTMLElement | null>(null),
          introductionRef = useRef<HTMLDivElement | null>(null),
          controlsRef = useRef<HTMLDivElement | null>(null),
          toggleButtonRef = useRef<HTMLDivElement | null>(null)
    /* normalViewer */
    const normalViewerRef = useRef<HTMLElement | null>(null),
          titleRef = useRef<HTMLHeadingElement | null>(null),
          normalContentsRef = useRef<HTMLDivElement | null>(null),
          descriptionRef = useRef<HTMLDivElement | null>(null)
    /* modelViewer */
    const [isInitialControl, setIsInitialControl] = useState<boolean>(true)
    const [isStartControls, setIsStartControls] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isFingerVisible, setIsFingerVisible] = useState<boolean>(true)
    const [isViewerActive, setIsViewerActive] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const normalViewerClassNames = cn(g.root_container, s.normal_viewer)

    const controlsData = post?.attributes?.sections?.filter((item: any) => item?.__component.match(/.controls$/))[0]

    /* modelViewer */
    useEffect(() => {
        if (pageHeaderRef.current !== null && introductionRef.current !== null && controlsRef.current !== null) {
            if (!isLoading) {
                /* アニメーション作成 */
                const { pageHeaderCtx, introductionCtx, controlsCtx } = modelViewerAnimation({
                    pageHeaderRef,
                    introductionRef,
                    controlsRef,
                    pageHeaderSection: pageHeaderRef.current.querySelector('section'),
                    introductionSection: introductionRef.current.querySelector('section'),
                    controlsSection: controlsRef.current.querySelector('section'),
                    controlsListPC: controlsRef.current.querySelector('#contents-pc'),
                    controlsListMB: controlsRef.current.querySelector('#contents-mb')
                })
        
                return () => {
                    pageHeaderCtx.revert()
                    introductionCtx.revert()
                    controlsCtx.revert()
                }
            }
        }
    }, [isLoading])

    /* normalViewer */
    useEffect(() => {
        if (titleRef.current !== null  && normalContentsRef.current !== null && descriptionRef.current !== null) {
            /* アニメーション作成 */
            const ctx = normalViewerAnimation({
                normalViewerRef,
                title: titleRef.current,
                categories: normalContentsRef.current.querySelector('#categories-container'),
                tags: normalContentsRef.current.querySelector('#tags-container'),
                description: descriptionRef.current
            })
    
            return () => ctx.revert()
        }
    }, [])

    return (
        <>
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
                                    <SectionsContext.Provider
                                        value={{ pageHeaderRef, introductionRef, controlsRef, toggleButtonRef }}
                                    >
                                        <WorkDataContext.Provider
                                            value={{
                                                isInitialControl, setIsInitialControl,
                                                isStartControls, setIsStartControls,
                                                currentIndex, setCurrentIndex,
                                                setIsFingerVisible,
                                                isViewerActive,
                                                controlsData,
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
                                <section>
                                    <Typography component='h1' variant='h2'>
                                        {post?.attributes?.title}
                                    </Typography>
                                    <Typography component='p' variant='p'>
                                        {post?.attributes?.description}
                                    </Typography>
                                </section>
                            </PageHeader>
                            <SectionsContext.Provider value={{ introductionRef, controlsRef, toggleButtonRef }}>
                                {/* Introduction */}
                                <WorkDataContext.Provider
                                    value={{ isFingerVisible, setIsFingerVisible, isViewerActive, setIsViewerActive }}
                                >
                                    <Introduction post={post} />
                                </WorkDataContext.Provider>
                                {/* Controls */}
                                <WorkDataContext.Provider
                                    value={{ setIsInitialControl, currentIndex, setCurrentIndex }}
                                >
                                    <Controls data={controlsData} />
                                </WorkDataContext.Provider>
                            </SectionsContext.Provider>
                        </article>
                    </>
                ) : (
                    <>
                        <article ref={normalViewerRef}>
                            <section className={normalViewerClassNames}>
                                <Typography component='h1' variant='h2' ref={titleRef}>
                                    {post?.attributes?.title}
                                </Typography>
                                <MainImage post={post} />
                                <div className={s.normal} ref={normalContentsRef}>
                                    <Categories post={post} />
                                    <Tags post={post} />
                                </div>
                                <Description post={post} descriptionRef={descriptionRef} />
                                <Images post={post} />
                            </section>
                        </article>
                    </>
                )}
            </Layout>
        </>
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