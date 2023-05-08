import Meta from './Meta'
import Header from './Header'
import { ScrollToTopButton } from '@/components/ui'

export default function Layout({ children, metaProps }) {
    return (
        <>
            <Meta {...metaProps} />
            <Header/>
            <main>{children}</main>
            <ScrollToTopButton />
        </>
    )
}