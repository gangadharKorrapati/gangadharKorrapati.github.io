import React from "react";
import { SkillType } from "../../interface/skills";
import SkillSet from "./SkillSet";

const Skills = ({skills}:{skills:SkillType[]}) => {
    return (
        <>
            
            <hr className="pb-6 border-t-4 border-gray-600"/>
                <h2 className="pb-2 text-xl uppercase">Skills</h2>

                <div className="grid gap-4 text-lg sm:grid-cols-3"> 
                    {
                        skills.map((skill)=> <SkillSet type={skill.type} keywords={skill.keywords} key={skill.type}/>)
                    }
                </div>

        </>
    )
}

export default Skills
