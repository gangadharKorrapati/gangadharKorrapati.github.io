import React from "react"
import Context from "./Context"

const Experiance = () => {
    return (
            <>

                <hr className="pb-6 border-t-4 border-gray-600"/>
                <h2 className="pb-2 text-xl uppercase">Experiance</h2>

                <div className="flex flex-col pb-4 space-y-2">                    
                    <div className="flex flex-col items-baseline justify-start space-x-4 sm:flex-row">
                        <div className="flex w-44 whitespace-nowrap">
                        <p>Jul 2019 - Nov 2020</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div>
                            <div className="flex flex-col items-baseline justify-between md:flex-row">
                                <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">Software Developer</h3> 
                                <p className="font-medium text-gray-600 text-md whitespace-nowrap">Back-end, TCS Yantra Park (Thane, Mumbai)</p> 
                            </div>
                            <div className="text-md">
                                <p className="pb-2">
                                    <b className="font-medium text-gray-600">Work: </b>
                                    Developer in CVP(connected vehicles program) for FCA(Fiat Chrysler Automobiles) in V2X(vehicle to everyting) technologies.
                                </p>
                                    <p>Parsed high velocity sensor data streams from TBM(Telematic Box Module) in FCA vehicles to generate VHRs(vehicle health reports)</p>

                                    <ul className="pb-2 pl-6 list-disc text-md">
                                        <li>Developed parsing logic for sensor data from gyroscope, GPS, odometer, vehicle status indicators etc and 
                                            generalized logic for VHR reports for several vehicle kinds(GAS,Electric,Hybrids) based on inputs from field and automotive engineers in FCA using java and spring boot.</li>
                                        <li>Developed notification services to push VHR to android and ios apps using AWS SNS,AWS lambda and nodejs.</li>
                                        <li>Was granted complete product ownership for development of parsing algorithm and generation of VHR for after market vehicles by streaming sensor data from ODB2(On Board Diagnostics) Interface. 
                                            used AWS Kinesis, AWS SQS, AWS Lambda, S3, Dynamo DB services for this solution.</li>
                                    </ul>
                                    
                                    <p>proposed and executed solutions for Legacy systems migration</p>
                                    <ul className="pb-2 pl-6 list-disc text-md">
                                        <li>Containarized and migrated few brown field VHR services for old vehicles in EMEA region to AWS cloud using docker.</li>
                                        <li>Developed a mutual authentication solution in java using bouncycastle library to enable APIs on AWS cloud to comunicate with manufacturing plant mainframes.
                                            Of several proposed Only solution that got approved by FCA infosec team for mainframe and Cloud communication. </li>
                                        <li>Migrated legacy system users from salesforce IAM to AWS IAM with GDPR compliance.</li>
                                    </ul> 
                                    
                                <a href="https://gangadharkorrapati.github.io/tcs.pdf" className="text-blue-400">Service Certificate</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="flex flex-col items-baseline justify-start space-x-4 sm:flex-row">
                        <div className="flex w-44 whitespace-nowrap">
                        <p>Jan 2019 - Apr 2019</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div>
                            <div className="flex flex-col items-baseline justify-between md:flex-row">
                                <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">Intern</h3> 
                                <p className="font-medium text-gray-600 text-md whitespace-nowrap">DevOps, TCS Synergy Park (Hyderabad)</p> 
                            </div>
                            <div className="text-md">
                                <p><b className="font-medium text-gray-600">Work: </b>Containarize and Orchestrate Big Data Solutions, ML Models Deployment- Release Pipeline
                                        Automation for Big Data, Data Science Solutions</p>
                                <ul className="pb-2 pl-6 list-disc text-md">
                                    <li>dockerized builds for several TCS internal data Science tools</li>
                                    <li>developed scripts for jenkins CI/CD pipelines to deploy dockerized solutions to Amazon Elastic Container Registry</li>
                                </ul> 
                                <a href="https://gangadharkorrapati.github.io/intern.pdf" className="text-blue-400">Internship Certificate</a>
                            </div>
                            </div>
                        </div>
                    </div>
                            
                    
                </div>

                
            </>
    )
}

export default Experiance
