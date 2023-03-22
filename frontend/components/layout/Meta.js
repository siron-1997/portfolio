import Head from 'next/head'

export default function Meta({ title, keywords, description }) {
    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Siron-1997 Portfolio',
    keywords: 'Siron-1997,portfolio',
    description: 'Siron-1997 Portfolio'
}