import React from "react"
import { ContextDataEntity, TitleInterface } from "./resumeInterface"

const ResumeContext = (props) => {
    const contextarr:ContextDataEntity[] = props.contextarr
    return (
        <>
            <hr className="pb-6 border-t-4 border-gray-600"/> 
            <h2 className="pb-2 text-xl uppercase">{}</h2>
            {props.children}
        </>
    )
}

export default ResumeContext

const ContextTitle = ({jobtitle,location}:TitleInterface) => {
    return (
        <div  className="flex flex-col items-baseline justify-between md:flex-row">
            <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">{jobtitle}</h3> 
            <p className="font-medium text-gray-600 text-md whitespace-nowrap">{location}</p> 
        </div>
    )
}

const Context = (props) => {
    const contextItems:ContextDataEntity[] = props.items
    return (
        <div className="flex flex-col pb-4 space-y-2">                    
            {contextItems.map((item)=>{
                return <ContextItem key={item.name} {...item}/>
            })}
        </div>
    )
}

export const ContextItem = (props:ContextDataEntity) => {
    return (
        <div className="flex flex-col items-baseline justify-start space-x-4 sm:flex-row">
            <div className="flex w-44 whitespace-nowrap">
            <p>Jul 2019 - Nov 2020</p>
            </div>
            <div className="flex flex-col w-full">                
                <ContextTitle {...(props.title)} />

            </div>
        </div>
    )
}

