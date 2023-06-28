import React, { useState, useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { Layout } from '@/components/layout'
import { PageHeader } from '@/components/general'
import { ModelViewerLoading } from '@components/etc'
import { Introduction, Controls } from '@/components/works/work/modelViewer'
import { Categories, Description, Images, MainImage, Tags } from '@/components/works/work/normalViewer'
import { Work } from '@/components/ui/canvas'
import { fetcher } from '@/utils/strapi'
import { normalViewerAnimation, modelViewerAnimation } from '@/animations/pages/works/work'
import s from '@/styles/works/work/index.module.css'
import g from '@/styles/global.module.css'

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
          mainImageRef = useRef(null),
          normalRef = useRef(null),
          descriptionRef = useRef(null),
          imagesRef = useRef(null)

    /* modelViewer */
    const [isInitialControl, setIsInitialControl] = useState(true)
    const [isStartControls, setIsStartControls] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFingerVisible, setIsFingerVisible] = useState(true)
    const [isViewerActive, setIsViewerActive] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const normalViewerClassNames = cn(g.root_container, s.normal_viewer)

    const introductionData = post?.attributes?.sections?.filter(item => item?.__component.match(/.introduction$/))[0],
          controlsData = post?.attributes?.sections?.filter(item => item?.__component.match(/.controls$/))[0],
          cameraConfigsData = post?.attributes?.cameraConfigs,
          pointLightsData = post?.attributes?.pointLights

    /* modelViewer */
    useEffect(() => {
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
    useEffect(() => {
        if (
            titleRef.current !== null && mainImageRef.current !== null && normalRef.current !== null &&
            descriptionRef.current !== null && imagesRef.current !== null
        ) {
            /* アニメーション作成 */
            const ctx = normalViewerAnimation({
                normalViewerRef,
                title: titleRef.current,
                mainImage: mainImageRef.current,
                normal: normalRef.current,
                description: descriptionRef.current,
                images: imagesRef.current
            })
    
            return () => ctx.revert()
        }
    }, [])

    return (
        <>
            <Layout
                metaProps={{
                    title: `Junpei Oue | Works | ${post?.attributes?.title}`,
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
                                        value={{pageHeaderRef, introductionRef, controlsRef, toggleButtonRef}}
                                    >
                                        <WorkDataContext.Provider
                                            value={{
                                                isInitialControl, setIsInitialControl,
                                                isStartControls, setIsStartControls,
                                                currentIndex, setCurrentIndex,
                                                setIsFingerVisible,
                                                isViewerActive,
                                                controlsData,
                                                cameraConfigsData,
                                                pointLightsData
                                            }}
                                        >
                                            <Work
                                                modelUrl={post?.attributes?.model?.data?.attributes?.url}
                                                setIsLoading={setIsLoading}
                                            />
                                        </WorkDataContext.Provider>
                                    </SectionsContext.Provider>
                                }
                            >
                                <section>
                                    <Typography component='h1' variant='h1'>{post?.attributes?.title}</Typography>
                                    <Typography component='p' variant='p'>{post?.attributes?.description}</Typography>
                                </section>
                            </PageHeader>
                            <SectionsContext.Provider value={{introductionRef, controlsRef, toggleButtonRef}}>
                                {/* Introduction */}
                                <WorkDataContext.Provider
                                    value={{isFingerVisible, setIsFingerVisible, isViewerActive, setIsViewerActive}}
                                >
                                    <Introduction data={introductionData} />
                                </WorkDataContext.Provider>
                                {/* Controls */}
                                <WorkDataContext.Provider
                                    value={{setIsInitialControl, currentIndex, setCurrentIndex}}
                                >
                                    <Controls data={controlsData} />
                                </WorkDataContext.Provider>
                            </SectionsContext.Provider>
                        </article>
                    </>
                ) : (
                    <article ref={normalViewerRef}>
                        <section className={normalViewerClassNames}>
                            <Typography component='h1' variant='h1' ref={titleRef}>{post?.attributes?.title}</Typography>
                            <MainImage
                                url={post?.attributes?.main?.data?.attributes?.url}
                                alternativeText={post?.attributes?.main?.data?.attributes?.alternativeText}
                                mainImageRef={mainImageRef}
                            />
                            <div className={s.normal} ref={normalRef}>
                                <Categories categories={post?.attributes?.categories} />
                                <Tags skillTags={post?.attributes?.skillTags} />
                            </div>
                            <Description
                                url={post?.attributes?.url}
                                description={post?.attributes?.description}
                                descriptionRef={descriptionRef}
                            />
                            <Images thumbnail={post?.attributes?.thumbnail?.data} imagesRef={imagesRef} />
                        </section>
                    </article>
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