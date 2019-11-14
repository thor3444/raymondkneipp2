import css from "../styles/skills.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	faTerminal,
	faDatabase,
	faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
	faHtml5,
	faCss3,
	faBootstrap,
	faSass,
	faJs,
	faReact,
	faNodeJs,
	faPhp,
	faPython,
	faJava,
	faGitAlt
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => (
	<section className={css.skills}>
		<div className={"container"}>
			<h2>My Skills</h2>
			<div className={css.layout}>
				<div className={css.group}>
					<h3>Front End</h3>
					<div className={css.block}>
						<Icon icon={faHtml5} className={css.icon} />
						<p>HTML5</p>
					</div>
					<div className={css.block}>
						<Icon icon={faCss3} className={css.icon} />
						<p>CSS3</p>
					</div>
					<div className={css.block}>
						<Icon icon={faSass} className={css.icon} />
						<p>SASS</p>
					</div>
					<div className={css.block}>
						<Icon icon={faBootstrap} className={css.icon} />
						<p>Bootstrap</p>
					</div>
					<div className={css.block}>
						<Icon icon={faJs} className={css.icon} />
						<p>Javascript</p>
					</div>
					<div className={css.block}>
						<Icon icon={faReact} className={css.icon} />
						<p>React.js</p>
					</div>
					<div className={css.block}>
						<img src="../static/images/redux.svg" className={css.icon} />
						<p>Redux</p>
					</div>
				</div>
				<div className={css.group}>
					<h3>Back End</h3>
					<div className={css.block}>
						<Icon icon={faNodeJs} className={css.icon} />
						<p>Node.js</p>
					</div>
					<div className={css.block}>
						<img src="../static/images/mongodb.svg" className={css.icon} />
						<p>MongoDB</p>
					</div>
					<div className={css.block}>
						<img src="../static/images/expressjs.svg" className={css.icon} />
						<p>Express.js</p>
					</div>
					<div className={css.block}>
						<Icon icon={faPhp} className={css.icon} />
						<p>PHP</p>
					</div>
					<div className={css.block}>
						<img src="../static/images/mysql.svg" className={css.icon} />
						<p>MySQL</p>
					</div>
				</div>
				<div className={css.group}>
					<h3>Other</h3>
					<div className={css.block}>
						<Icon icon={faGitAlt} className={css.icon} />
						<p>Git/GitHub</p>
					</div>
					<div className={css.block}>
						<img src="../static/images/adobe-xd.svg" className={css.icon} />
						<p>Adobe XD</p>
					</div>
					<div className={css.block}>
						<Icon icon={faMobileAlt} className={css.icon} />
						<p>Responsive Design</p>
					</div>
					<div className={css.block}>
						<Icon icon={faTerminal} className={css.icon} />
						<p>Command Line</p>
					</div>
					<div className={css.block}>
						<Icon icon={faPython} className={css.icon} />
						<p>Python</p>
					</div>
					<div className={css.block}>
						<Icon icon={faJava} className={css.icon} />
						<p>Java</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Skills;
