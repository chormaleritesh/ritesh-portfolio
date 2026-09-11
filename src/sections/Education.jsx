import { useState } from "react"
import "./Education.css"

function Education() {
  const [certificateOpen, setCertificateOpen] = useState(false)

  const education = [
    {
      type: "Bachelor's Degree",
      title: "B.Tech in Computer Science & Engineering",
      institution: "Pimpri Chinchwad University (PCU), Pune",
      period: "2025 - 2028",
      details: [
        "Currently in Third Year",
        "Academic Year: 2026 - 27",
        "Current CGPA: 8.14",
      ],
      link: "https://pcu.edu.in/",
    },
    {
      type: "Diploma",
      title: "Diploma in Electronics and Telecommunication Engineering",
      institution: "MVP's Rajarshi Shahu Maharaj Polytechnic, Nashik",
      period: "Completed",
      details: [
        "Percentage: 81.00%",
      ],
      link: "https://rsmpoly.org/",
      certificate: true,
    },
  ]

  return (
    <>
      <section id="education" className="education section">
        <div className="section-container">
          <div className="section-heading">
            <p> EDUCATION</p>
            <h2>My Academic Journey.</h2>
          </div>

          <div className="education-grid">
            {education.map((item, index) => (
              <div className="education-card" key={index}>
                <span className="education-type">
                  {item.type}
                </span>

                <h3>{item.title}</h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="education-institution"
                >
                  {item.institution} ↗
                </a>

                {item.certificate ? (
                  <button
                    className="education-period certificate-button"
                    onClick={() => {
                   if (window.innerWidth <= 768) {
                     window.open("/diploma-certificate.pdf", "_blank", "noopener,noreferrer")
                   } else {
                     setCertificateOpen(true)
                   }
                  }}
                  >
                    Completed
                  </button>
                ) : (
                  <span className="education-period">
                    {item.period}
                  </span>
                )}

                <div className="education-details">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {certificateOpen && (
        <div
          className="certificate-modal"
          onClick={() => setCertificateOpen(false)}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-close"
              onClick={() => setCertificateOpen(false)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <div className="certificate-header">
              <p>DIPLOMA CERTIFICATE</p>
              <h3>
                Diploma in Electronics and Telecommunication Engineering
              </h3>
            </div>

            <div className="certificate-viewer">
              <iframe
                src="/diploma-certificate.pdf"
                title="Diploma Certificate"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Education