import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { ScrollToTopButton } from '@/components/ui'

export default function Layout({ children, metaProps, isViewerActive }) {
    return (
        <>
            <Meta {...metaProps} />
            <Header/>
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton isViewerActive={isViewerActive} />
        </>
    )
}