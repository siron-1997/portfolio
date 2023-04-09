import { Suspense, useEffect } from 'react'
import { Loading } from '@/components/etc'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const options = {
    showAfterMs: false,
    speed: 500,
    // template: '<div className="bar" role="bar">%</div>'
  }

  const router = useRouter();

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      // ページ更新時の処理をここに記述する
      console.log("ページが更新されました");
    };

    router.events.on("beforeHistoryChange", handleBeforeHistoryChange)

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, []);

  return (
    <>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={50}
          showAfterMs={500}
          options={options}
            
        />
        <Component {...pageProps} />
    </>
  )
}
