import React from "react"

const ContextItem = ({title,location,duration,children}:{title:string,location:string,duration:string,children:React.ReactNode}) => {
    return (
        <>
        <div className="flex flex-col items-baseline justify-start space-x-4 sm:flex-row">
            <div className="flex w-44 whitespace-nowrap">
                <p>{duration}</p>
                </div>
                <div className="flex flex-col w-full">
                <div  className="flex flex-col items-baseline justify-between md:flex-row">
                    <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">{title}</h3> 
                    <p className="font-medium text-gray-600 text-md whitespace-nowrap">{location}</p> 
                </div>
                {children}
            </div>
        </div>
        </>
    )
    }
export default ContextItem