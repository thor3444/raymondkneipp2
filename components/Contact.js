import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCheckCircle,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import css from "../styles/contact.scss";
import cssButton from "../styles/button.scss";
import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const data = { email, message };
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setSubmitted(true);
        setEmail("");
        setMessage("");
      });
  };

  return (
    <section className={css.contact} id="contact">
      <div className={"container"}>
        <h1>Contact Me</h1>
        <form onSubmit={e => onSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="example@company.com"
            disabled={submitted}
          />
          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows="5"
            placeholder="I would LOVE to hire you!"
            disabled={submitted}
          ></textarea>

          <button
            type="submit"
            disabled={submitted}
            className={cssButton.button}
          >
            <Icon icon={faPaperPlane} className={css.icon} /> Send
          </button>
        </form>

        {submitted && (
          <div className={css.overlay}>
            <h3>
              <Icon icon={faCheckCircle} className={css.icon} /> Message Sent!
            </h3>
          </div>
        )}

        {loading && (
          <div className={css.overlay}>
            <h3>
              <Icon icon={faSpinner} className={`${css.icon} ${css.spin}`} />{" "}
              Loading
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
