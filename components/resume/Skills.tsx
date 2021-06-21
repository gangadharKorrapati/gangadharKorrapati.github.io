const Skills = () => {
    return (
        <>
            
            <hr className="pb-6 border-t-4 border-gray-600"/>
                <h2 className="pb-2 text-xl uppercase">Skills</h2>

                <div className="grid gap-4 text-lg sm:grid-cols-3"> 

                    <div>
                        <p><b className="font-medium text-gray-600">Programming Languages: </b></p>
                 <ul className="pb-2 pl-6 list-disc">

                            <li>JavaScript &amp; TypeScript</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div>
                    <p><b className="font-medium text-gray-600">Databases: </b></p>
                 <ul className="pb-2 pl-6 list-disc">

                            <li>PostgreSQL</li>
                            <li>Redis</li>
                        </ul>
                    </div>
                    <div>
                    <p><b className="font-medium text-gray-600">Data analysis: </b></p>
                 <ul className="pb-2 pl-6 list-disc">

                            <li>pandas</li>
                            <li>SciPy &amp; Numpy</li>
                            <li>Apache Zeppelin &amp; Pyspark</li>
                            <li>Jupyter notebook &amp; Matplotlib</li>
                        </ul>
                    </div>
                    <div>
                    <p><b className="font-medium text-gray-600">Web and REST API Frameworks: </b></p>
                 <ul className="pb-2 pl-6 list-disc">
                            <li>Nodejs &amp; Express.js</li>
                            <li>Django &amp; Flask</li>
                            <li>Spring boot</li>
                            <li>OpenAPI &amp; Swagger</li>
                        </ul>
                    </div>
                    <div>
                    <p><b className="font-medium text-gray-600">DevOps:</b></p>
                 <ul className="pb-2 pl-6 list-disc">

                            <li>Git &amp; Github</li>
                            <li>Nginx</li>
                            <li>Docker</li>
                            <li>Jenkins</li>
                        </ul>
                    </div>
                <div>
                <p><b className="font-medium text-gray-600">Cloud:</b></p>
                 <ul className="pb-2 pl-6 list-disc">
                            <li>AWS</li>
                            <li>Digital Ocean</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>

        </>
    )
}

export default Skills
