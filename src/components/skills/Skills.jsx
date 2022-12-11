import React from "react";
import './skills.css'
import {AiFillCode, AiTwotoneFile, AiOutlineConsoleSql} from "react-icons/ai"
import {GiDatabase, GiElephant} from "react-icons/gi"
import {DiSpark, DiCodeBadge, DiJavascript1} from 'react-icons/di'
import {SiApachekafka, SiDatabricks, SiSnowflake, SiMongodb, SiScala, SiMicrosoft, SiPython, SiCsswizardry,
        SiNodedotjs, SiElastic, SiMicrosoftazure, SiGooglecloud, SiReact, SiKubernetes, SiGithub, SiTerraform,
        SiAzuredevops} from 'react-icons/si'

const Skills = () => {
    return(
        <section id="skills">
            <h5>Tech</h5>
            <h2>Skills</h2>

            <div className="container skills__container" >
                <article className="skills">
                    <div className="skills__head">
                        <h3>Languages</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <SiScala className="skills__list-icon" />
                            <p>Scala</p>
                        </li>
                        <li>
                            <SiMicrosoft className="skills__list-icon" />
                            <p>C#</p>
                        </li>
                        <li>
                            <SiPython className="skills__list-icon" />
                            <p>Python</p>
                        </li>
                        <li>
                            <DiCodeBadge className="skills__list-icon" />
                            <p>C++</p>
                        </li>
                        <li>
                            <AiFillCode className="skills__list-icon" />
                            <p>Shell (Scripting)</p>
                        </li>
                        <li>
                            <AiOutlineConsoleSql className="skills__list-icon" />
                            <p>SQL</p>
                        </li>
                        <li>
                            <DiJavascript1 className="skills__list-icon" />
                            <p>JS & TypeScript</p>
                        </li>
                        <li>
                            <SiCsswizardry className="skills__list-icon" />
                            <p>HTML & CSS</p>
                        </li>
                    </ul>
                </article>
                <article className="skills">
                    <div className="skills__head">
                        <h3>Data Storage & Processing</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <DiSpark className="skills__list-icon" />
                            <p>Spark Engine</p>
                        </li>
                        <li>
                            <AiTwotoneFile className="skills__list-icon" />
                            <p>Cloud Storage (ALDS/GCS/S3)</p>
                        </li>
                        <li>
                            <SiDatabricks className="skills__list-icon" />
                            <p>Data Processing (Databricks)</p>
                        </li>
                        <li>
                            <SiSnowflake className="skills__list-icon" />
                            <p>Cloud Warehouses (Snowflake)</p>
                        </li>
                        <li>
                            <GiDatabase className="skills__list-icon" />
                            <p>RDBMS (Oracle/Postgress/Mysql)</p>
                        </li>
                        <li>
                            <SiElastic className="skills__list-icon" />
                            <p>Search Engine (Elasticsearch Cloud)</p>
                        </li>
                        <li>
                            <GiDatabase className="skills__list-icon" />
                            <p>Data Warehouse (Netezza)</p>
                        </li>
                        <li>
                            <SiMongodb className="skills__list-icon" />
                            <p>NoSQL (Mongodb)</p>
                        </li>
                        <li>
                            <SiApachekafka className="skills__list-icon" />
                            <p>Streaming (Kafka, Confluent)</p>
                        </li>
                    </ul>
                </article>
                <article className="skills">
                    <div className="skills__head">
                        <h3>Cloud Ecosystem, Library & Frameworks</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <SiMicrosoftazure className="skills__list-icon" />
                            <p>Azure</p>
                        </li>
                        <li>
                            <SiGooglecloud className="skills__list-icon" />
                            <p>GCP</p>
                        </li>
                        <li>
                            <SiNodedotjs className="skills__list-icon" />
                            <p>Node JS</p>
                        </li>
                        <li>
                            <SiReact className="skills__list-icon" />
                            <p>React</p>
                        </li>
                        <li>
                            <SiKubernetes className="skills__list-icon" />
                            <p>Kubernetes</p>
                        </li>
                        <li>
                            <GiElephant className="skills__list-icon" />
                            <p>Hadoop-Hortonworks</p>
                        </li>
                    </ul>
                </article>
                <article className="skills">
                    <div className="skills__head">
                        <h3>Devops</h3>
                    </div>

                    <ul className="skills__list">
                        <li>
                            <SiGithub className="skills__list-icon" />
                            <p>GitHub</p>
                        </li>
                        <li>
                            <SiTerraform className="skills__list-icon" />
                            <p>Terraform (IaC)</p>
                        </li>
                        <li>
                            <SiAzuredevops className="skills__list-icon" />
                            <p>Azure Devops (Repo/Pipelines)</p>
                        </li>
                        <li>
                            <SiGooglecloud className="skills__list-icon" />
                            <p>Google Cloud Code</p>
                        </li>
                    </ul>
                </article>
            </div>        
        </section>
    )
}

export default Skills