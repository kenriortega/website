import React from 'react'
import Head from 'next/head'


const Meta = ({
    title = "Kenriortega Blog",
    description = "Kenriortega Blog and personal website",
    keywords = "blog, programing,golang,redis" }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}


export default Meta