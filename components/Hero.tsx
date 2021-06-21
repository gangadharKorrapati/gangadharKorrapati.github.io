import { useRouter } from 'next/router'


const Hero = () => {

    const router = useRouter()
    
    const handleClick = (e:React.MouseEvent, path:string) => {
        e.preventDefault()
        router.push(path)
    }

    return (
	<div className="flex flex-col items-center pb-4 font-mono">
        <img className="max-w-xs" src="img/gangadhar_animated.svg" alt="Gangadhar Image"/>
        <h1 className="pt-4 text-3xl text-gray-700">I am Gangadhar Korrapati</h1>
        <h2 className="py-2 text-2xl text-gray-500">A Systems Engineer at TCS</h2>
        <span className="px-4 py-2 text-xl text-white cursor-pointer max-w-min rounded-2xl bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-500 whitespace-nowrap" onClick={(e) => handleClick(e, "/about")}>
            Tell me More
        </span>
    </div>
    )
}

export default Hero
