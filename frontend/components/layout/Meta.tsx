import Head from 'next/head'
import React from 'react'

type CustomProps = {
    title: string,
    keywords: any,
    description: string,
    image_path: string,
    type: string
}

const Meta: React.FC<CustomProps> = ({ title, keywords, description, image_path, type }) => {
    const twitter_user_name = '@Jsiron2029'

    return (
        <Head>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <title>{title}</title>
            {/* SNS */}
            <meta itemProp='name' content={title} />
            <meta itemProp='description' content={description} />
            <meta itemProp='image' content={image_path} />

            <meta name='twitter:card' content={image_path} />
            <meta name='twitter:site' content={twitter_user_name} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:creator' content={twitter_user_name} />
            <meta name='twitter:image:src' content={image_path} />

            <meta property='og:title' content={title} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://junpei-oue.vercel.app' />
            <meta property='og:image' content={image_path} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content='Junpei Oue' />
            {/*
                この作品は「自然とテクノロジーの融合による命の観測」をテーマとし、人工的なエコシステムである
                デジタル空間と自然サイクルの一部である天候情報を結びつけ制作しました。
                3Dモデルとバーチャル空間の状態が天候状態と連動し変化することで、常に新しい状態を作品自身が自立して表現し続けます。
                この作品は自然とテクノロジーの関係性及び生命の持つ変化の継続性を示すことを目的としたインターネット空間における
                彫刻・インスタレーション作品です。
            */}
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Junpei Oue',
    keywords: 'Siron-1997,portfolio',
    description: 'web developer'
}

export default Meta