import React from "react"
import Context from "./Context"

const Education = () => {
    return (
            <>
                <hr className="pb-6 border-t-4 border-gray-600"/>
                <h2 className="pb-2 text-xl uppercase">Education</h2>

                <div className="flex flex-col pb-4 space-y-2"> 
                                   
                    <div className="flex flex-col items-baseline justify-start space-x-4 sm:flex-row">
                        <div className="flex w-44 whitespace-nowrap">
                        <p>Jul 2015 - May 2019</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div>
                            <div className="flex flex-col items-baseline justify-between md:flex-row">
                                <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">B.Tech, Computer Science and Engineering</h3> 
                                <p className="font-medium text-gray-600 text-md whitespace-nowrap">SASTRA University (Thanjavur)</p> 
                            </div>
                            <div className="text-md">
                            <p><b className="font-medium text-gray-600">Project: </b> Cloud Based Big Data Solutions for Autonomous Vehicles and Advanced Driver Assistant Systems</p>
                            <ul className="pb-2 pl-6 list-disc text-md">
                                    <li>Autonomous vehilcle data of several hundred GBs in Rosbag and MDF4(Measurement data Format) formats is parsed in Hadoop cluster using pyspark</li>
                                    <li>lidar data from rosbags is converted into pointclouds using point cloud library, data from cameras is converted to videos using ffmpeg and gps data is plotted on google map for visualization</li>
                            </ul> 

                            <p>College activities</p>
                            <ul className="pb-2 pl-6 list-disc text-md">
                                <li>Headed development efforts for Connected Canopy a project for Introduction to Entrepreneurship
                                    course taught by <a href="https://en.wikipedia.org/wiki/Wadhwani_Foundation" className="text-blue-400">Wadhwani Foundation</a></li>
                                <li>By end of the course our team was selected as one of <a href="https://gangadharkorrapati.github.io/ntrepreneur.jpg" className="text-blue-400">top
                                        3 startup ideas</a> by <a href="http://www.sastratbi.in/" className="text-blue-400">Technology Business Incubator</a> at
                                    SASTRA University.</li>
                                <li>Selected for <a href="https://web.archive.org/web/20200201031254/https://www.sastra.edu/downloads/news/2019/oct/students_list_Deans_merit.pdf" className="text-blue-400">Dean's merit list</a> for accedemic year 2018-2019</li>
                            </ul>

                            <p>Certificates</p>
                            <ul className="pb-2 pl-6 list-disc text-md">
                                <li><a href="https://www.coursera.org/account/accomplishments/certificate/7HN3EB5XZ55D" className="text-blue-400">Introduction to
                                        self Driving Cars by University of Toronto, Coursera</a></li>
                                <li><a href="https://www.freecodecamp.org/gangadharkorrapati/front-end-certification" className="text-blue-400">Freecodecamp front
                                        end certification</a></li>
                                <li><a href="https://www.udemy.com/certificate/UC-28PHKCJX/" className="text-blue-400">web development certification udemy</a>
                                </li>
                                <li><a href="https://www.cybrary.it/verify-certificate/" className="text-blue-400">cryptography certification from cybraby </a>with Number SC-471a1d783-90916</li>
                            </ul>

                            <p><b className="font-medium text-gray-600">GATE Rank: </b><a href="https://gangadharkorrapati.github.io/gate.pdf" className="text-blue-400">3044</a></p>
                            <p><b className="font-medium text-gray-600">CGPA: </b>7.86</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div  className="flex flex-col items-baseline justify-start visible space-x-4 sm:flex-row">
                        <div className="flex flex-grow-0 w-44 whitespace-nowrap">
                        <p>Jun 2013 - May 2015</p>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex flex-col items-baseline justify-between md:flex-row">
                                <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">MPC, Intermediate Telangana State Board</h3> 
                                <p className="font-medium text-gray-600 text-md whitespace-nowrap">Narayana Jr.College (Hyderabad)</p> 
                            </div>
                            <div className="text-md">
                            <p><b className="font-medium text-gray-600">JEE Score: </b>170/360</p>
                            <p><b className="font-medium text-gray-600">Board Marks: </b>941/1000</p>
                            </div>
                        </div>
                    </div>

                    <div className= "flex flex-col items-baseline justify-start space-x-4 sm:flex-row">
                        <div className="flex w-44 whitespace-nowrap">
                        <p>Jun 2012 - Mar 2013</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col items-baseline justify-between md:flex-row">
                                <h3 className="font-serif font-semibold tracking-wider text-gray-800 text-md md:text-xl">10th, Andhra Pradesh State Board</h3> 
                                <p className="font-medium text-gray-600 text-md whitespace-nowrap">Narayana High School (Narasaraopet)</p> 
                            </div>
                            <div className="text-md">
                            <p><b className="font-medium text-gray-600">GPA: </b>9.7/10</p>
                            </div>
                        </div>
                    </div>
                                                
                </div>

            </>
    )
}

export default Education
