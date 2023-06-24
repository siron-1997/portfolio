import Head from 'next/head'

export default function Meta({ title, keywords, description, image_path, type }) {
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
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Junpei Oue',
    keywords: 'Siron-1997,portfolio',
    description: 'web developer'
}