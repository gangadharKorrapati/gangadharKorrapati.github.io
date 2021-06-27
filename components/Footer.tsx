import Media from "./Media"
import info from "../metaconf/info.json"
const Footer = () => {
    return (
        <footer>
            <Media/>
            <p className="pt-2 font-mono font-bold text-center text-gray-600 text-md">Copyright &copy; 2021 {info.yourname}</p>
        </footer>
    )
}

export default Footer
