import profileImage from "../assets/ritesh-profile.png"
import "./Hero.css"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">HELLO, I'M</p>

        <h1>
          Ritesh
          <span> Chormale</span>
        </h1>

        <h2>
          Computer Science & Engineering Student
          <br />
          <span>Software Developer</span>
        </h2>

        <p className="hero-description">
          A Computer Science & Engineering student passionate about software
          development, technology, and building practical projects while
          continuously expanding my technical skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>2</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>1</strong>
            <span>Internship</span>
          </div>

          <div>
            <strong>6+</strong>
            <span>Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero-image-section">
        <div className="image-glow"></div>

        <div className="image-circle">
          <img
            src={profileImage}
            alt="Ritesh Chormale"
            className="profile-image"
          />
        </div>

        <div className="availability-badge">
          <span></span>
          Open to Internships & Opportunities
        </div>
      </div>
    </section>
  )
}

export default Hero