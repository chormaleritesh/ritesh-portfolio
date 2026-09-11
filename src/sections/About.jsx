import { useState } from "react"
import "./About.css"

function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const shareResume = async () => {
    const shareData = {
      title: "Ritesh Chormale - Resume",
      text: "Check out my resume",
      url: window.location.origin + "/resume.pdf",
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        alert("Resume link copied to clipboard!")
      }
    } catch (error) {
      console.log("Sharing cancelled")
    }
  }

  return (
    <section id="about" className="about">
      <div className="section-heading">
        <p> ABOUT ME</p>
        <h2>Get to know me.</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Ritesh Chormale, a Computer Science & Engineering student with
            an interest in software development, cybersecurity, and emerging
            technologies.
          </p>

          <p>
            I enjoy learning by building practical projects and exploring how
            technology can be used to solve real-world problems. Alongside my
            academics, I continuously work on improving my programming,
            development, and problem-solving skills.
          </p>

          <p>
            I have also gained industry exposure through an internship at
            Motwane Manufacturing Company Pvt. Ltd., where I worked with the
            ETK Department.
          </p>
        </div>

        <div className="resume-section">
          <p className="resume-label">MY RESUME</p>

          <div
            className="resume-preview"
            onClick={() => {
              if (window.innerWidth <= 768) {
                window.open("/resume.pdf", "_blank", "noopener,noreferrer")
             } else {
                 setIsResumeOpen(true)
             }
            }}
          >
            <div className="resume-paper">
              <h3>RITESH CHORMALE</h3>

              <p className="resume-subtitle">
                Computer Science & Engineering Student
              </p>

              <div className="resume-line accent-line"></div>

              <div className="resume-block">
                <span>EDUCATION</span>
                <div className="resume-line"></div>
                <div className="resume-line short"></div>
              </div>

              <div className="resume-block">
                <span>SKILLS</span>
                <div className="resume-line"></div>
                <div className="resume-line"></div>
                <div className="resume-line shorter"></div>
              </div>

              <div className="resume-block">
                <span>EXPERIENCE</span>
                <div className="resume-line"></div>
                <div className="resume-line short"></div>
              </div>

              <div className="resume-block">
                <span>PROJECTS</span>
                <div className="resume-line"></div>
                <div className="resume-line short"></div>
              </div>
            </div>

            <div className="preview-overlay">
              <span>Click to Preview</span>
            </div>
          </div>

          <button
            className="resume-button"
            onClick={() => setIsResumeOpen(true)}
          >
            View Resume
          </button>
        </div>
      </div>

      {isResumeOpen && (
        <div className="resume-modal">
          <div
            className="modal-backdrop"
            onClick={() => setIsResumeOpen(false)}
          ></div>

          <div className="resume-modal-content">
            <div className="modal-header">
              <div>
                <p>MY RESUME</p>
                <h3>Ritesh Chormale</h3>
              </div>

              <button
                className="close-button"
                onClick={() => setIsResumeOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="resume-viewer">
              <iframe
                src="/resume.pdf"
                title="Ritesh Chormale Resume"
              ></iframe>
            </div>

            <div className="resume-actions">
              <a
                href="/resume.pdf"
                download="Ritesh_Chormale_Resume.pdf"
                className="download-button"
              >
                Download Resume
              </a>

              <button
                className="share-button"
                onClick={shareResume}
              >
                Share Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About