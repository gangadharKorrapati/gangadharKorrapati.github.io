import React from "react"
import Nav from "./Nav"
import info from "../metaconf/info.json"
const Logo = () => {
    return (
        <header className="font-mono">
            <div className="flex flex-row items-center px-4 pt-4 pb-2 space-x-2 justify-items-start">
            <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 64 53" className="w-8 h-8 text-gray-700 fill-current">
                <path d="M51 7c2 1 0 2 2 2-2 1 0 2 2 2-1 1 1-1 1 1l5 8 3 9v9l-1 7c-1 0 0 2-2 2-2 1-1 5-2 5l-1-9-2-7c-1-2-2-4-1-6l-4-4c-1-2 1-3-1-3-2-1-5-3-6-1-2 0-4-2-6-1l-3-1c0-1-3-3-4-2-3 1-5 2-6 5-2 2-4-1-7 0l-7 1c-2 2 1 4-1 7v2c0 2-4 5-4 8l-1 9c0 1-1 6-2 2 3-1 1-5-1-7l-2-3v-6c0-3 2-6 1-8l2-8c0-3 2-5 4-7l5-6 8-5 7-2h6l8 3c3 0 5 0 7 2 1 1 5 2 3 2"/>
            </svg>
            <span className="text-xl font-medium text-gray-700 ">{info.yourname}</span>
            </div>
        </header>
    )
}

const Header = () => {
    return (
      <div className="flex flex-col justify-items-start">
            <Logo/>
            <Nav/>
      </div>
    )
}

export default Header
