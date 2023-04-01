import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.css'

// const ProgressBar = require('react-progressbar.js')
// const Circle = ProgressBar.Circle

export default function App({ Component, pageProps }) {
  // const router = useRouter()
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {

  // }, [])

  const options = {
    strokeWidth: 2
  }

  const containerStyle = {
    width: '200px',
    height: '200px'
  }

  return (
    <>
      {/* <Circle
                        // progress={this.state.progress}
                        text={'test'}
                        options={options}
                        initialAnimate={true}
                        containerStyle={containerStyle}
      /> */}
      <Component {...pageProps} />
    </>
  )
}
