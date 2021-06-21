import Link from 'next/link'
import  navItems from "../metaconf/nav.json";

type navProps = {
    name: string,
    path: string
  }
const NavItem = ({name,path}:navProps) => {
    return (
        <span className="font-mono text-blue-400 uppercase hover:underline hover:text-blue-500">
        <Link href={path}>{name}</Link>
        </span>

    )
}

const Nav = () => {
    return (
        <div className="flex flex-row items-baseline px-4 space-x-4 justify-self-start">
           {navItems.map((nav)=>{
                return <NavItem name={nav.name} key={nav.path} path={nav.path}/>
            })}
        </div>
    )
}

export default Nav
