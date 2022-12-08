import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Bios Computer</title>
                <meta name="keywords" content="computer shop, online computer shop, computer service center, laptop repair, computer repair" />
                <link rel="icon" href="/favicon-16x16.png" />
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            </Head>
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default Layout