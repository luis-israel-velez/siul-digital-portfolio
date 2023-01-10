import React from "react";
import './experience.css'
import {FaUniversity, FaHandshake, FaMoneyBill} from "react-icons/fa"
import {DiGoogleAnalytics, DiCodeBadge} from "react-icons/di"
import {GiFloatingPlatforms, GiTeamIdea} from "react-icons/gi"
import {SiKubernetes, SiInformatica} from 'react-icons/si'


const Experience = () => {
    return(
        <section id="experience">
            <h5>Profesional</h5>
            <h2> Experience</h2>

            <div className="container experience__container">

                <div className="hidden"> 
                    <h3>CustomerX.i - Chief Technology Officer</h3>
                    <h5>08/2021 - Current</h5>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <SiKubernetes className='experience__details-icon' />
                            <div>
                                <h4>Deploy Web Applications</h4>
                                <ul className='text-light'>
                                    <li>• Built multiple enterprise-level web applications on Azure Cloud Infrastructure & Kubernetes. These applications allowed users to self-onboard their Point-of-Sales data using conectors to obtain near realtime insights in the form of multiple dashboards.</li>
                                    <li>• Deployed a supporting data platform eco-system composed of a delta lake on ADLS Gen 2  (capable of storing TB of data in multiple cleaning stages), data pipelines using Databrick (capable of processing and calculating value for our customers) and a orchestration layer.</li>
                                    <li>• Leveraged Infrastructure as Code to maximize speed of delivery for new features.</li>
                                </ul>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <GiTeamIdea className='experience__details-icon' />
                            <div>
                                <h4>Team Building</h4>
                                <ul className='text-light'>
                                    <li>• Hire & trained technology team (25+) from multiple disciplines (Architecture/Software/Devops/Quality/Data & UI-UX Engineers)</li>
                                    <li>• Established engineering practices/protocols to ensure quick and efficient development. This included Agile and CI/CD on all of our repositories as well as code standards, checklists and SQA Automatic Testing.</li>
                                    <li>• Managed applications/teams cost working with other executives, built KPI and Executive Dashboards to track efforts across the teams.</li>
                                </ul>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaUniversity className='experience__details-icon' />
                            <div>
                                <h4>Partner/Customer Relationships</h4>
                                <ul className='text-light'>
                                    <li>• Worked directly with customers, consulting companies and 3rd party application platforms to increase CX.i relationship and achieve our business goals.</li>
                                    <li>• Participate in customer feedback sessions to capture the impact and value of our application and pivot accordingly.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="hidden"> 
                    <h3> Catalina Marketing - Data Engineering Director</h3>
                    <h5>01/2015 - 07/2021</h5>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaHandshake className='experience__details-icon' />
                            <div>
                                <h4>Leadership</h4>
                                <ul className='text-light'>
                                    <li>• Led Data Engineering teams (50+) from multiple disciplines (Architecture/ETL/DBA/Data/Quality/Devops). The teams included multiple world wide offices and stakeholders.</li>
                                    <li>• Executed commpany Legacy to Cloud migration strategy, achieving success in executing our existing suite of tools successfully.</li>
                                </ul>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <GiFloatingPlatforms className='experience__details-icon' />
                            <div>
                                <h4>Data Platform</h4>
                                <ul className='text-light'>
                                    <li>• Responsible for Data Platform dealing with over 300 TB, millions of transactions per day and spanning different Legacy and Cloud technology. </li>
                                    <li>• Built/Managed over (25+) data solutions for different world wide stakeholders. These solutions were used by multiple CPG/Retailers and agencies. </li>
                                </ul>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaMoneyBill className='experience__details-icon' />
                            <div>
                                <h4>Financials</h4>
                                <ul className='text-light'>
                                    <li>• Custodian of the technology budget allocated for data management. This included multi-million dollar deals around technology licensing, resource management and support infrastructure.</li>
                                    <li>• Underwent multiple rounds of cost optimization including optimization of technology for better returns as well as negotiating with partners around better pricing.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="hidden"> 
                    <h3> Sofftek PR - ETL Informatica Consultant</h3>
                    <h5>06/2011 - 12/2014</h5>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <SiInformatica className='experience__details-icon' />
                            <div>
                                <h4>Engineering</h4>
                                <ul className='text-light'>
                                    <li>• Responsible for maintenance and support of the Datawarehouse for one of the largest Health Care Company in Puerto Rico.</li>
                                    <li>• Designed and developed a orchestration application that was adopted company wide and used in all of our customers projects. The application used linux-scripts, XML based contracts, RDBM's system to store audit information and Informatica for execution.</li>
                                    <li>• Led multiple projects for different customers as either a Solutions Architect or in charge of training junior personal.</li>
                                </ul>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <DiGoogleAnalytics className='experience__details-icon' />
                            <div>
                                <h4>Customer Relationship</h4>
                                <ul className='text-light'>
                                    <li>• Worked directly with multiple customers in the Telecomunication/Banking and Health industry. Gathered requirements, analyzed business needs and came up with data solutions that fit their challenges.</li>
                                    <li>• Analyze business needs to generate data solutions that fit those specific challenges. Solutions were built with Informatica and multiple RDBMs.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="hidden"> 
                    <h3> Hamilton Sundtrand - Software Engineer </h3>
                    <h5>05/2010 - 09/2010</h5>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <DiCodeBadge className='experience__details-icon' />
                            <div>
                                <h4>Engineering</h4>
                                <ul className='text-light'>
                                    <li>• Built features for ORION Space Capsule GUI using .NET. This GUI was responsible for showing multiple capsule sensores and control basic life support functions.</li>
                                    <li>• Tested fault-detection classes using emulators to stress test the system in a control environment.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience