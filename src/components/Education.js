import '../styles/component.css'

export default function About(){
    return(
        <div className="component">
            <h1 className="component--title">Education</h1>
            <div className="component--information">
                <h2 className="title">Master of Information Technology</h2>
                <h2 className="company">Central Queensland University</h2>
                <h2 className="year">Graduated 2018</h2>
                <ul>
                    <li>Java</li>
                    <li>Java EE</li>
                    <li>Software Development Methodologies</li>
                </ul>

                <h2 className="title">Bachelor of Information Technology</h2>
                <h2 className="company">Universidad de Cundinamarca, Colombia</h2>
                <h2 className="year">Graduated 2015</h2>
                <ul>
                    <li>C++</li>
                    <li>Prolog</li>
                    <li>SQL Server</li>
                    <li>Agile Practices</li>
                </ul>
            </div>

        </div>
    )
}