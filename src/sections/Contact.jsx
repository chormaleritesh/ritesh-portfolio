import "./Contact.css"

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-container">
        <div className="section-heading">
          <span> CONTACT</span>
          <h2>Let's Connect.</h2>
        </div>

        <div className="contact-content">
          <div className="contact-text">
            <h3>Let's create something meaningful.</h3>

            <p>
              I'm always open to connecting with professionals, exploring
              internship opportunities, collaborating on projects, and
              discussing technology.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chormaleritesh@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              Connect with me via Email ↗
            </a>
          </div>

          <div className="contact-details">
            <a
              href="tel:+918459110789"
              className="contact-item"
            >
              <span>Phone</span>
              <p>+91 84591 10789</p>
            </a>

            <div className="contact-item">
              <span>Location</span>
              <p>Pune, Maharashtra, India</p>
            </div>

            <a
              href="https://www.linkedin.com/in/ritesh-chormale-47392435a/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>LinkedIn ↗</span>
              <p>Connect with me professionally</p>
            </a>
            <a
             href="https://github.com/chormaleritesh"
             target="_blank"
             rel="noreferrer"
             className="contact-item"
             >
             <span>GitHub ↗</span>
             <p>Explore my projects and code</p>
             </a>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact