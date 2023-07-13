import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { ScrollToTopButton } from '@/components/ui'

type Props = {
    children: any
    metaProps?: any
    isViewerActive?: boolean
}

const Layout: React.FC<Props> = ({ children, metaProps, isViewerActive }) => {
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

export default Layout