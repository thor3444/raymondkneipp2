import Link from "next/link";
import css from "../styles/button.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const Button = props => {
  const { icon, text, link } = props;

  if (link.substring(0, 4) === "http") {
    // external link
    return (
      <a href={link} target="_blank" className={`${css.color} ${css.button}`}>
        <Icon icon={icon} className={css.icon} /> {text}
      </a>
    );
  } else {
    // internal link
    return (
      <Link href={link}>
        <a target="_blank" className={`${css.color} ${css.button}`}>
          <Icon icon={icon} className={css.icon} /> {text}
        </a>
      </Link>
    );
  }
};

export default Button;
