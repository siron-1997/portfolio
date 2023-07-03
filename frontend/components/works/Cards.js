import { WorkCard } from '@/components/general'
import { truncateString } from '@/utils'
import s from '@/styles/works/Cards.module.css'

export default function Cards({ data, selectTags, contentsRef }) {
    /* filtering data */
    const filteredData = data?.reduce((filteredData, item) => {
        if (selectTags.length > 0) {
            selectTags.filter(selectTag => {
                if (item?.attributes?.tags.includes(selectTag.type)) filteredData.push(item)
            })
        } else filteredData.push(item)

        return filteredData
    }, [])

    const path = '/works/'

    return (
        <div className={s.contents} ref={contentsRef}>
            {filteredData.map((item, i) => (
                <WorkCard
                    key={i}
                    index={i}
                    image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.main?.data?.attributes?.url}`}
                    alternativeText={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.main?.data?.attributes?.alternativeText}`}
                    link={`${path}${item?.id?.toString()}`}
                    title={item?.attributes?.title}
                    description={truncateString(item?.attributes?.description, 50)}
                    tags={item?.attributes?.tags === 'three' ? '3D' : item?.attributes?.tags}
                    type='works'
                    contentsRef={contentsRef}
                />
            ))}
        </div>
    )
}