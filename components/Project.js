import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import css from "../styles/project.scss";
import Button from "./Button";

const Project = ({
  title,
  desktop,
  mobile,
  tags,
  description,
  code,
  website
}) => (
  <section className={css.project} id="project">
    <div className={css.images}>
      <img src={desktop} alt={title + " desktop"} className={css.desktop} />
      <img src={mobile} alt={title + " mobile"} className={css.mobile} />
    </div>
    <div className={css.description}>
      <h3>{title}</h3>
      <div className={css.tags}>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <p>{description}</p>
      <div className={css.links}>
        <Button text="Code" link={code} icon={faCode} />
        <Button text="Website" link={website} icon={faLink} />
      </div>
    </div>
  </section>
);

export default Project;
