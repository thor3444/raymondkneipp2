import css from "../styles/projects.scss";
import Project from "./Project";

const Projects = () => (
	<section className={css.projects} id="projects">
		<div className={"container"}>
			<h1>My Projects</h1>
			<Project
				title="Beauty Bratz"
				desktop="../static/images/projects/beauty-desktop.png"
				mobile="../static/images/projects/beauty-mobile.png"
				tags={["HTML5", "CSS3", "SASS", "Adobe Xd", "React"]}
				description="Responsive webpage created to advertise customers hair business. Adobe XD was used to create a prototype as well as the logo for the webpage. Form submissions are handled using netlify."
				code="https://github.com/thor3444/beauty-bratz"
				website="https://beauty-bratz.com/"
			/>
			<Project
				title="EAA Chapter 174"
				desktop="../static/images/projects/eaa-desktop.png"
				mobile="../static/images/projects/eaa-mobile.png"
				tags={["HTML5", "CSS3", "SASS", "React"]}
				description="Built and currently maintaining website for local aviation club. The website offers monthly newsletters to members and information regauding the chapter."
				code="https://github.com/thor3444/eaa-chapter-174"
				website="https://eaachapter174.org/"
			/>
			<Project
				title="Keto Safe"
				desktop="../static/images/projects/keto-desktop.png"
				mobile="../static/images/projects/keto-mobile.png"
				tags={["HTML5", "CSS3", "Bootstrap", "React"]}
				description="This project uses the Nutritionix API to get the macronutrient content of a food. This app was made to be able to tell if a food is safe to eat on a keto diet."
				code="https://github.com/thor3444/keto-safe"
				website="https://keto-safe.netlify.com/"
			/>
		</div>
	</section>
);

export default Projects;
