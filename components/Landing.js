import css from "../styles/landing.scss";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

const Landing = () => (
  <section className={css.landing}>
    <div className={"container " + css.container}>
      <div>
        <h1>I am a Web Developer</h1>
        <p>
          Hello, my name is <strong>Raymond Kneipp</strong> and I am from{" "}
          <strong>Cincinnati, Ohio</strong>. I am a programmer and full stack
          web developer.
        </p>
        <div className={css.cta}>
          <Button
            link="../static/raymond-kneipp-resume.pdf"
            text="Resume"
            icon={faFilePdf}
          />

          <Button
            link="https://github.com/thor3444"
            text="Github"
            icon={faGithubSquare}
          />

          <Button
            link="https://www.linkedin.com/in/raymondkneipp/"
            text="LinkedIn"
            icon={faLinkedin}
          />
        </div>
      </div>
      <img src="../static/images/undraw_code_thinking_1jeh.svg" alt="RK" className={css.logo} />
    </div>
  </section>
);

export default Landing;
