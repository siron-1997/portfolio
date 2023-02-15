import Image from "next/image"
import { useState, useEffect } from "react"
import { Card } from "antd"
import { fetcher, urlBuilder } from "@utils/strapi"
import s from '@/styles/test.module.css'

export default function TestStrapi() {
    const [restaurants, setRestaurants] = useState()
    // const data = fetcher('restaurants')

    useEffect(() => {
        const getData = async () => {
            const d = await fetcher('api/restaurants?populate=*')
            setRestaurants(d.data.data)
        }
        getData()
    }, [])

    return (
        <>
            <h1>京都市左京区周辺で行ったことのあるレストラン</h1>
            <div>
                {restaurants?.map(restaurant => (
                    <Card
                        key={restaurant?.id}
                        hoverable
                        style={{ width: 240 }}
                        cover={
                            <ImageContainer
                                src={urlBuilder(restaurant.attributes?.image?.data[0].attributes.url)}
                                alt={restaurant.attributes?.image?.data[0].attributes.alternativeText}
                            />}
                    >
                        <Card.Meta
                            title={restaurant?.attributes?.name}
                            description={restaurant?.attributes?.description}
                        />
                    </Card>
                ))}
            </div>
        </>

    )
}

const ImageContainer = ({ src, alt }) => {
    return (
        <div className={s.image_container}>
            <Image
                src={src}
                alt={alt}
                fill
            />
        </div>
    )
}
