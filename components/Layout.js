import React from 'react'
import Footer from './footer'
import Header from './Header'
import Meta from './Meta'
export default function Layout({ children }) {
    return (
        <>
            <Meta title="Blog" />
            <Header />
            {children}
            <Footer />
        </>
    )
}
