import React from "react"

const Context = ({name,children}:{name:string,children:React.ReactNode}) => {
    return (
        <>
                <hr className="pb-6 border-t-4 border-gray-600"/>
                <h2 className="pb-2 text-xl uppercase">{name}</h2>

                <div className="flex flex-col pb-4 space-y-2">
                    {children}
                </div>       
        </>
    )
}

export default Context
