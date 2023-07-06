import dynamic from 'next/dynamic'
import React, { useState, useRef, useEffect, Suspense } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { Layout } from '@/components/layout'
import { PageHeader } from '@/components/general'
import { ModelViewerLoading } from '@components/etc'
import { Introduction, Controls } from '@/components/works/work/modelViewer'
import { Categories, Description, Images, MainImage, Tags } from '@/components/works/work/normalViewer'
import { fetcher } from '@/utils/strapi'
import { normalViewerAnimation, modelViewerAnimation } from '@/animations/pages/works/work'
import { introduction } from '@/assets/works-contents'
import s from '@/styles/works/work/index.module.css'
import g from '@/styles/global.module.css'

const Work = dynamic(() => import('@/components/ui/canvas/work/Work'), { ssr: false })

export const WorkDataContext = React.createContext(),
             SectionsContext = React.createContext()

export default function WorkPage({ post }) {
    /* modelViewer */
    const modelViewerRef = useRef(null),
          pageHeaderRef = useRef(null),
          introductionRef = useRef(null),
          controlsRef = useRef(null),
          toggleButtonRef = useRef(null)
    /* normalViewer */
    const normalViewerRef = useRef(null),
          titleRef = useRef(null),
          categoryAndTagContainerRef = useRef(null),
          descriptionRef = useRef(null)
    /* modelViewer */
    const [isInitialControl, setIsInitialControl] = useState(true)
    const [isStartControls, setIsStartControls] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFingerVisible, setIsFingerVisible] = useState(true)
    const [isViewerActive, setIsViewerActive] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const normalViewerClassNames = cn(g.root_container, s.normal_viewer)

    const controlsData = post?.attributes?.sections?.filter(item => item?.__component.match(/.controls$/))[0]

    /* modelViewer */
    useEffect(() => {
        if (pageHeaderRef.current !== null && introductionRef.current !== null && controlsRef.current !== null) {
            if (!isLoading) {
                /* アニメーション作成 */
                const { pageHeaderCtx, introductionCtx, controlsCtx } = modelViewerAnimation({
                    modelViewerRef,
                    pageHeaderRef,
                    introductionRef,
                    controlsRef,
                    pageHeaderSection: pageHeaderRef.current.children[1].children[0].children[0],
                    introductionSection: introductionRef.current.children[0].children[0],
                    controlsSection: controlsRef.current.children[0].children[0].children[0],
                    controlsListPC: controlsRef.current.children[0].children[0].children[1],
                    controlsListMB: controlsRef.current.children[0].children[0].children[2]
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
        if (titleRef.current !== null  && categoryAndTagContainerRef.current !== null && descriptionRef.current !== null) {
            /* アニメーション作成 */
            const ctx = normalViewerAnimation({
                normalViewerRef,
                title: titleRef.current,
                categories: categoryAndTagContainerRef.current.children[0],
                tags: categoryAndTagContainerRef.current.children[1],
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
                    image_path: process.env.NEXT_PUBLIC_STRAPI_URL.post?.attributes?.main?.data?.attributes?.url,
                    type: 'article'
                }}
                isViewerActive={isViewerActive}
            >
                {post?.attributes?.tags === 'three' ? (
                    <>
                        <ModelViewerLoading isLoading={isLoading} />
                        <article ref={modelViewerRef}>
                            <PageHeader
                                id={'model-viewer'}
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
                                <div className={s.normal} ref={categoryAndTagContainerRef}>
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

export async function getStaticPaths() {
    let paths = []

    try {
        const res = await fetcher('/api/works')
        const posts = await res.data.data
        paths = posts.map(post => ({
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

export async function getStaticProps({ params: { slug } }) {
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