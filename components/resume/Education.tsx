import React from "react"
import Context from "./Context"
import ContextItem from "./ContextItem"

const Education = (printPreview) => {
    return (
            <>
                <Context name="education">
                <ContextItem duration="Jul 2015 - May 2019" title="B.Tech, Computer Science and Engineering" location="SASTRA University (Thanjavur)" >
                    
                    <p><b className="bkpi">Project: </b> Cloud Based Big Data Solutions for Autonomous Vehicles and Advanced Driver Assistant Systems</p>
                    <ul className="lidec">
                        <li>Autonomous vehilcle data of several hundred GBs in Rosbag and MDF4(Measurement data Format) formats is parsed in Hadoop cluster using pyspark</li>
                        <li>lidar data from rosbags is converted into pointclouds using point cloud library, data from cameras is converted to videos using ffmpeg and gps data is plotted on google map for visualization</li>
                    </ul> 
                    
                    <p>College activities</p>
                    <ul className="lidec">
                        <li>Headed development efforts for Connected Canopy a project for Introduction to Entrepreneurship
                            course taught by <a target="_blank" href="https://en.wikipedia.org/wiki/Wadhwani_Foundation" className="alink">Wadhwani Foundation</a></li>
                        <li>By end of the course our team was selected as one of <a target="_blank" href="/entrepreneur.jpg" className="alink">top
                                3 startup ideas</a> by <a target="_blank" href="http://www.sastratbi.in/" className="alink">Technology Business Incubator</a> at
                            SASTRA University.</li>
                        <li>Selected for <a target="_blank" href="https://web.archive.org/web/20200201031254/https://www.sastra.edu/downloads/news/2019/oct/students_list_Deans_merit.pdf" className="alink">Dean's merit list</a> for accedemic year 2018-2019</li>
                    </ul>
                    
                    <p>Certificates</p>
                    <ul className="lidec">
                        <li><a target="_blank" href="https://www.coursera.org/account/accomplishments/certificate/7HN3EB5XZ55D" className="alink">Introduction to
                                self Driving Cars by University of Toronto, Coursera</a></li>
                        <li><a target="_blank" href="https://www.freecodecamp.org/gangadharkorrapati/front-end-certification" className="alink">Freecodecamp front
                                end certification</a></li>
                        <li><a target="_blank" href="https://www.udemy.com/certificate/UC-28PHKCJX/" className="alink">web development certification udemy</a>
                        </li>
                        <li><a target="_blank" href="https://www.cybrary.it/verify-certificate/" className="alink">cryptography certification from cybraby </a>with Number SC-471a1d783-90916</li>
                    </ul>
                    
                    <p><b className="bkpi">GATE Rank: </b><a target="_blank" href="/gate.pdf" className="alink">3044</a></p>
                    <p><b className="bkpi">CGPA: </b>7.86</p>
                
                </ContextItem>
                
                <ContextItem duration="Jun 2013 - May 2015" title="MPC, Intermediate Telangana State Board" location="Narayana Jr.College (Hyderabad)" >
                    
                    <p><b className="bkpi">JEE Score: </b>170/360</p>
                    <p><b className="bkpi">Board Marks: </b>941/1000</p>
                
                </ContextItem>


                <ContextItem duration="Jun 2012 - Mar 2013" title="10th, Andhra Pradesh State Board" location="Narayana High School (Narasaraopet)" >

                    <p><b className="bkpi">JEE Score: </b>170/360</p>
                    <p><b className="bkpi">Board Marks: </b>941/1000</p>

                </ContextItem>

                </Context>
            </>
    )
}

export default Education
