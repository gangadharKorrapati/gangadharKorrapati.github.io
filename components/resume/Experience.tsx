import React from "react"
import ContextItem from "./ContextItem"
import Context from "./Context"

const Experience = () => {
    return (
            <>

                <Context name="experience">  

                <ContextItem duration="Jul 2019 - Nov 2020" title="Software Developer" location="Back-end, TCS Yantra Park (Thane, Mumbai)">                
                        
                        <p className="pb-2">
                            <b className="bkpi">Work: </b>
                            Developer in CVP(connected vehicles program) for FCA(Fiat Chrysler Automobiles) in V2X(vehicle to everyting) technologies.
                        </p>
                            <p>Parsed high velocity sensor data streams from TBM(Telematic Box Module) in FCA vehicles to generate VHRs(vehicle health reports)</p>

                            <ul className="lidec">
                                <li>Developed parsing logic for sensor data from gyroscope, GPS, odometer, vehicle status indicators etc and 
                                    generalized logic for VHR reports for several vehicle kinds(GAS,Electric,Hybrids) based on inputs from field and automotive engineers in FCA using java and spring boot.</li>
                                <li>Developed notification services to push VHR to android and ios apps using AWS SNS,AWS lambda and nodejs.</li>
                                <li>Was granted complete product ownership for development of parsing algorithm and generation of VHR for after market vehicles by streaming sensor data from ODB2(On Board Diagnostics) Interface. 
                                    used AWS Kinesis, AWS SQS, AWS Lambda, S3, Dynamo DB services for this solution.</li>
                            </ul>
                            
                            <p>proposed and executed solutions for Legacy systems migration</p>
                            <ul className="lidec">
                                <li>Containarized and migrated few brown field VHR services for old vehicles in EMEA region to AWS cloud using docker.</li>
                                <li>Developed a mutual authentication solution in java using bouncycastle library to enable APIs on AWS cloud to comunicate with manufacturing plant mainframes.
                                    Of several proposed Only solution that got approved by FCA infosec team for mainframe and Cloud communication. </li>
                                <li>Migrated legacy system users from salesforce IAM to AWS IAM with GDPR compliance.</li>
                            </ul> 
                            <div>

                                <a target="_blank" href="/tcs.pdf" className="alink">Service Certificate</a>
                            </div>
                    </ContextItem>
                    
                    <ContextItem title="Intern" location="DevOps, TCS Synergy Park (Hyderabad)" duration="Jan 2019 - Apr 2019">
    
                        <p><b className="bkpi">Work: </b>Containarize and Orchestrate Big Data Solutions, ML Models Deployment- Release Pipeline
                                        Automation for Big Data, Data Science Solutions</p>
    
                        <ul className="lidec">
                            <li>dockerized builds for several TCS internal data Science tools</li>
                            <li>developed scripts for jenkins CI/CD pipelines to deploy dockerized solutions to Amazon Elastic Container Registry</li>
                        </ul> 
                        <div>
                            <a target="_blank" href="/intern.pdf" className="alink">Internship Certificate</a>
                        </div>
                    </ContextItem>                            
                    
                </Context>
    
            </>
    )
}

export default Experience
