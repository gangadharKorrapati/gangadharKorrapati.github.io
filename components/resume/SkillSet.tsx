const SkillSet = ({type,keywords}:{type:string,keywords:string[]}) => {
    return (
        <>
            <div>
                <p><b className="bkpi">{type}</b></p>
                <ul className="lidec">
                    {keywords.map((keyword) =><li key={keyword}>{keyword}</li>)}
                </ul>
            </div>
        </>
    )
}

export default SkillSet
