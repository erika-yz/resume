import '../styles/component.css'

export default function About(){
    return(
        <div className="component">
            <h1 className="component--title">Experience</h1>
            <div className="component--information">
                <h2 className="title">Software development and support</h2>
                <h2 className="company">Aerotrack Systems </h2>
                <h2 className="year">June 2021 – Present</h2>
                <ul>
                    <li>Software testing & bug tracking</li>
                    <li>MySQL slow queries log monitoring and query optimization </li>
                    <li>Application programming using Servoy (javascript) </li>
                    <li>Provide technical support to application users</li>
                </ul>

                <h2 className="title">Software Developer</h2>
                <h2 className="company">Power Amigo, Gold Coast</h2>
                <h2 className="year">June 2016 – September 2018</h2>
                <ul>
                    <li>Design and maintenance of MariaDB Databases(relational concepts, SQL, ER diagrams). </li>
                    <li>Collaborated with an interdisciplinary team to define, update, and develop new product concepts. </li>
                    <li>Capable of multitasking efficiently, responding to changing requirements, and meeting deadlines while working remotely or on-site.</li>
                    <li>Back–end programming of a platform for users and electronic devices management using PHP 7 and MVC. </li>
                    <li>Front – end programming: Responsive web page development using HTML5, CSS (Bootstrap) and jQuery. </li>
                </ul>
            </div>

        </div>
    )
}