import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:atsoumathieu228@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            atsoumathieu228@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +212 774-467662
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Casablanca
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
