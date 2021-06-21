import React from "react"
import Hero from "../components/Hero"
import PageContent from "../components/PageContent"
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <PageContent>
          <Hero/>
        </PageContent>
    </>
  )
}

export default index
