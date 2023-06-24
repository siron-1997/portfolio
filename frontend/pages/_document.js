import Script from 'next/script'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy='afterInteractive'
        />
        <Script
          id='google-analytics'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `
          }}
          strategy='afterInteractive'
        />
        <meta charSet='UTF-8' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/images/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/images/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
        <link href='https://fonts.googleapis.com/css2?family=Cabin:wght@700&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Roboto+Slab:wght@400;500;600;700;800&display=swap' rel='stylesheet' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
