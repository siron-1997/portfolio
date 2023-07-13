import React, { useRef, useEffect } from 'react'
import { WorkCard } from '@/components/general'
import { truncateString } from '@/utils'
import { cardsAnimation } from '@/animations/components/works'
import s from '@/styles/works/Cards.module.css'

type Props = {
    data?: any
    selectTags: any
}

const Cards: React.FC<Props> = ({ data, selectTags }) => {
    const cardsRef = useRef<HTMLDivElement | null>(null)
    const path = '/works/'
    /* filtering data */
    const filteredData = data?.reduce((filteredData: any, item: any) => {
        if (selectTags.length > 0) {
            selectTags.filter((selectTag: any) => {
                if (item?.attributes?.tags.includes(selectTag.type)) filteredData.push(item)
            })
        } else filteredData.push(item)

        return filteredData
    }, [])

    useEffect(() => {
        const ctx = cardsAnimation({
            cards: cardsRef.current.querySelectorAll('.work-card'),
            cardsRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className={s.contents} ref={cardsRef}>
            {filteredData.map((item: any, i: number) => (
                <WorkCard
                    key={i}
                    image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.main?.data?.attributes?.url}`}
                    alternativeText={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.main?.data?.attributes?.alternativeText}`}
                    link={`${path}${item?.id?.toString()}`}
                    title={item?.attributes?.title}
                    description={truncateString(item?.attributes?.description, 50)}
                    tags={item?.attributes?.tags === 'three' ? '3D' : item?.attributes?.tags}
                    type='works'
                />
            ))}
        </div>
    )
}

export default Cards