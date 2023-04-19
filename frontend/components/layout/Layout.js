import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { BackTop } from 'antd'


export default function Layout({ children, metaProps }) {
    return (
        <>
            <Meta {...metaProps} />
            <Header/>
            <main>{children}</main>
            <Footer/>
            <BackTop />
        </>
    )
}