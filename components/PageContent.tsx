import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Head from 'next/head';
import { useRouter } from 'next/router';
import  info from "../metaconf/info.json";

const PageContent = (props) => {

    const { children, date }:{children:React.ReactNode,date:string} = props;
    const router = useRouter();
    const meta = {
        title: `${info.yourname} – Software Developer.`,
        description: `Back-end developer, Tech enthusiast.`,
        image: `${info.host}/img/hero.svg`,
        type: 'website',
        date: date
    };


    return (

        <div className="flex flex-col h-screen max-w-screen-xl mx-auto">
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${info.host}${router.asPath}`} />
            <link rel="canonical" href={`${info.host}${router.asPath}`} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content={info.yourname} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            {meta.date && (
            <meta property="article:published_time" content={meta.date} />
            )}
        </Head>
            <Header/>
                <div className="flex-grow">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default PageContent
