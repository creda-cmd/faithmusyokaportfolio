import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact-me">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="social-links">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
    </section>
  );
}
