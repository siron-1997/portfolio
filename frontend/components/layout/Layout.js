import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { ScrollToTopButton } from '@/components/ui'
import { colors } from '@/assets/colors'

export default function Layout({ children, metaProps, isViewerActive }) {
    return (
        <>
            <Meta {...metaProps} />
            <Header/>
            <main style={{ backgroundColor: colors.bgColor.dark.main }}>{children}</main>
            <Footer />
            <ScrollToTopButton isViewerActive={isViewerActive} />
        </>
    )
}