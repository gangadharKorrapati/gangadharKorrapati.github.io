import { useRouter } from 'next/router'


const Hero = () => {

    const router = useRouter()
    
    const handleClick = (e:React.MouseEvent, path:string) => {
        e.preventDefault()
        router.push(path)
    }

    return (
	<div className="flex flex-col items-center pb-4 font-mono">
        <img className="max-w-xs" src="img/hero.svg" alt="My Image"/>
        <h1 className="pt-4 text-2xl text-gray-700 sm:text-3xl">I am Gangadhar Korrapati</h1>
        <h2 className="py-2 text-xl text-gray-500 sm:text-2xl">A CS grad From SASTRA University</h2>
        <button className="flex px-4 py-2 text-lg text-white cursor-pointer sm:text-xl max-w-min rounded-2xl bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-500 whitespace-nowrap focus:outline-none focus:ring" onClick={(e) => handleClick(e, "/about")} aria-label="Tell Me More">
            Tell Me More
        </button>
    </div>
    )
}

export default Hero
