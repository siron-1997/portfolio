import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { ScrollToTopButton } from '@/components/ui'

type CustomProps = {
    children: any,
    metaProps?: any,
    isViewerActive?: any
}

const Layout: React.FC<CustomProps> = ({ children, metaProps, isViewerActive }) => {
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