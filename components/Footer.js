import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import css from "../styles/footer.scss";

const Footer = () => (
  <footer className={css.footer}>
    <div className={"container"}>
      <div className={css.row}>
        <div className={css.col}>
          <Icon icon={faMapMarkerAlt} className={css.icon} />
          <p className={css.select}>Cincinnati, OH</p>
        </div>
        <div className={css.col}>
          <Icon icon={faPhoneAlt} className={css.icon} />
          <p className={css.select}>(513) 680-0072</p>
        </div>
        <div className={css.col}>
          <Icon icon={faEnvelope} className={css.icon} />
          <p className={css.select}>raymond.f.kneipp@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
