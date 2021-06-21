import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const PageContent = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="flex flex-col h-screen max-w-screen-xl mx-auto">
            <Header/>
                <div className="flex-grow">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default PageContent
