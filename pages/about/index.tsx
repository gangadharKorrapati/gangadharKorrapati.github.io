import React, { useState } from "react"
import PageContent from "../../components/PageContent"
import Resume from "../../components/resume/Resume"
import userinfo from "../../userconf/userinfo.json"
import skills from "../../userconf/skills.json"

const index = () => {

    const [printPreview, setPrintPreview] = useState(false)
    const printView = () => {
        setPrintPreview(!printPreview)
    }

    if(printPreview){
        return (
            <InpageContent printPreview={printPreview} printView={printView}/>
            )
    }
    return (
        <PageContent>
            <InpageContent printPreview={printPreview} printView={printView}/>
        </PageContent>
    )
}

export const InpageContent = ({printPreview,printView}:{printPreview:boolean,printView:() => void}) => {
    return (
        <div className="grid my-2">
            
        <div className={printPreview ?  "px-10 pt-4 pb-6 border-l-12 place-self-center" :  "max-w-screen-xl px-4 pt-8 pb-6 border-l-12 place-self-center sm:px-6 md:px-10"}>
        <div className="text-gray-800">
            
            <Resume userinfo = {userinfo} skills = {skills}/>

        </div>
        </div>



        <div onClick={()=>printView()}>
            <button className="fixed grid w-10 h-10 rounded shadow-none justify-items-center bottom-8 right-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-500">
            <div className="flex items-center justify-around w-full h-full align-middle">
            <a className="text-white">
                <Printer printPreview={printPreview}/>
            </a>
            </div>
            </button>
        </div>
        <div className={printPreview ?  "invisible" :  "visible"}>
            <button className="fixed grid w-10 h-10 rounded shadow-none justify-items-center bottom-20 right-8 bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-500">
            <div className="flex items-center justify-around w-full h-full align-middle">
            <a href={userinfo.resume} download>           
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </a>
            </div>
            </button>
        </div>
    </div>
    )
}

export default index

export const Printer = ({printPreview}:{printPreview:boolean}) => {
    if(!printPreview){
    {/*Printer icon */}
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
    )}
    else {
    {/*X icon */}
        return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )}
}
