import Education from "./Education"
import Experience from "./Experience"
import Nameplate from "./Nameplate"
import Skills from "./Skills"
const Resume = ({userinfo,skills}) => {

    return (
        <>    
            <Nameplate userinfo={userinfo}/>
            <Experience/>
            <Education/>
            <Skills skills={skills}/>
        </>
    )
}

export default Resume