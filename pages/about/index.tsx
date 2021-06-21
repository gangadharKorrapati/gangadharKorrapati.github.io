import React, { useState } from "react"
import PageContent from "../../components/PageContent"
import Resume from "../../components/resume/Resume"

const index = () => {

    const [printPreview, setPrintPreview] = useState(false)
    const printView = () => {
        setPrintPreview(!printPreview)
    }

    return (
        <PageContent>
        <div className="grid my-2">
                
            <div className="relative cursor-pointer group">
                <hr className={printPreview ? "border-t-8 border-white" :"border-t-8 border-gray-500 pb-4" }  onClick={()=>printView()}/>
                <div className="absolute z-10 w-1/12 px-10 py-2 mt-2 text-xl text-center text-white rounded-full opacity-0 pointer-events-none whitespace-nowrap min-w-min bg-gradient-to-r from-green-400 to-blue-400 group-hover:opacity-100">
                    Toggle Print View
                </div>
            </div> 
                
            <div className={printPreview ?  "pt-4 pb-6 border-l-12 place-self-center" :  "max-w-screen-xl px-4 pt-8 pb-6 border-l-12 place-self-center sm:px-6 md:px-10"}>
            <div className="text-gray-800">
                
                <Resume />

            </div>
            </div>

            <div className={printPreview ?  "invisible" :  "visible"}>
                <button className="fixed grid w-16 h-16 rounded shadow-none justify-items-center bottom-8 right-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-500">
                <div className="flex items-center justify-around w-full h-full align-middle">
                <a href="https://gangadharkorrapati.github.io/resume.pdf" download>           
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                </a>
                </div>
                </button>
            </div>
        </div>
        </PageContent>
    )
}

export default index
