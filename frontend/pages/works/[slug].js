import dynamic from 'next/dynamic'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { Layout } from '@/components/layout'
import { ModelViewerLoading } from '@components/etc'
import { Categories, Description, Images, MainImage, Tags } from '@/components/works/work/normalViewer'
import { fetcher } from '@/utils/strapi'
import { normalViewerAnimation, modelViewerAnimation } from '@/animations/pages/works/work'
import { introduction } from '@/assets/works-contents'
import s from '@/styles/works/work/index.module.css'
import g from '@/styles/global.module.css'

const PageHeader = dynamic(() => import('@/components/general/PageHeader'), { ssr: false }),
      Introduction = dynamic(() => import('@/components/works/work/modelViewer/Introduction', { ssr: false })),
      Controls = dynamic(() => import('@/components/works/work/modelViewer/Controls', { ssr: false })),
      Work = dynamic(() => import('@/components/ui/canvas/work/Work'), { ssr: false })

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
          normalRef = useRef(null),
          descriptionRef = useRef(null)

    /* modelViewer */
    const [isInitialControl, setIsInitialControl] = useState(true)
    const [isStartControls, setIsStartControls] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFingerVisible, setIsFingerVisible] = useState(true)
    const [isViewerActive, setIsViewerActive] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    /* normalViewer */
    const [isLoadImage, setIsLoadImage] = useState(false)

    const normalViewerClassNames = cn(g.root_container, s.normal_viewer)

    const controlsData = post?.attributes?.sections?.filter(item => item?.__component.match(/.controls$/))[0]

    /* modelViewer */
    useLayoutEffect(() => {
        if (pageHeaderRef.current !== null && introductionRef.current !== null && controlsRef.current !== null) {
            if (!isLoading) {
                /* アニメーション作成 */
                const ctx = modelViewerAnimation({
                    modelViewerRef,
                    pageHeader: pageHeaderRef.current,
                    introduction: introductionRef.current,
                    controls: controlsRef.current
                })
        
                return () => ctx.revert()
            }
        }
    }, [isLoading])

    /* normalViewer */
    // useEffect(() => {
    //     if (titleRef.current !== null  && normalRef.current !== null && descriptionRef.current !== null) {
    //         if (isLoadImage) {
    //             /* アニメーション作成 */
    //             const ctx = normalViewerAnimation({
    //                 normalViewerRef,
    //                 title: titleRef.current,
    //                 normal: normalRef.current,
    //                 description: descriptionRef.current
    //             })
        
    //             return () => ctx.revert()
    //         }
    //     }
    // }, [isLoadImage])

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
                                            <Work post={post} setIsLoading={setIsLoading} />
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
                                <MainImage post={post} isLoadImage={isLoadImage} setIsLoadImage={setIsLoadImage} />
                                <div className={s.normal} ref={normalRef}>
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