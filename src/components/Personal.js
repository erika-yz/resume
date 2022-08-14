/* Style*/
import '../styles/Personal.css';
/*Icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faLocationDot,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";


export default function Personal(){
    return(
        <div>
            <h1 className="name">Erika Y.</h1>
				<h1 className="surname">Zaffira</h1>
				<div className="contact">
					<span>
						<FontAwesomeIcon icon={faEnvelope} />
					</span>
					erika.ys0306@gmail.com
				</div>
				<div className="contact">
					<span>
						<FontAwesomeIcon icon={faPhone} />
					</span>
					0404958279
				</div>
				<div className="contact">
					<span>
						<FontAwesomeIcon icon={faLocationDot} />
					</span>
					Brisbane, QLD
				</div>
        </div>
    )
}