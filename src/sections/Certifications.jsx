import { useEffect, useRef, useState } from "react"
import * as pdfjsLib from "pdfjs-dist"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url"
import "./Certifications.css"

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

function CertificateThumbnail({ file, title }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    const renderPreview = async () => {
      try {
        const url = `/Certificates/${file}`
        const pdf = await pdfjsLib.getDocument(url).promise

        if (cancelled) return

        const page = await pdf.getPage(1)
        const containerWidth = containerRef.current?.clientWidth || 600

        const baseViewport = page.getViewport({ scale: 1 })
        const scale = containerWidth / baseViewport.width
        const viewport = page.getViewport({ scale })

        const canvas = canvasRef.current

        if (!canvas || cancelled) return

        const context = canvas.getContext("2d")

        canvas.width = viewport.width
        canvas.height = viewport.height

        await page.render({
          canvasContext: context,
          viewport,
        }).promise
      } catch (error) {
        console.error(`Unable to preview ${title}:`, error)
      }
    }

    renderPreview()

    return () => {
      cancelled = true
    }
  }, [file, title])

  return (
    <div
      ref={containerRef}
      className="certificate-pdf-thumbnail"
    >
      <canvas
        ref={canvasRef}
        aria-label={`${title} certificate preview`}
      />
    </div>
  )
}

function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= 768
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const certifications = [
    {
      title: "Foundations of Cybersecurity",
      organization: "Google",
      file: "Foundations of Cybersecurity.pdf",
    },
    {
      title: "Django Web Framework",
      organization: "Meta",
      file: "Django Web Framework.pdf",
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      organization: "IBM",
      file: "Introduction to Cybersecurity Tools & Cyberattacks.pdf",
    },
    {
      title: "Agile Project Management",
      organization: "Google",
      file: "Agile Project Management.pdf",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      organization: "Google",
      file: "Tools of the Trade Linux and SQL.pdf",
    },
    {
      title: "Introduction to Red Hat OpenShift Applications",
      organization: "Red Hat",
      file: "Introduction to Red Hat OpenShift Applications.pdf",
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      organization: "Google",
      file: "Connect and Protect Networks and Network Security.pdf",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      organization: "Google",
      file: "play it safe.pdf",
    },
    {
      title: "Agile with Atlassian Jira",
      organization: "Atlassian",
      file: "Agile with Atlassian Jira.pdf",
    },
    {
      title: "Full-Stack Development with Django: Managing Migrations",
      organization: "Coursera",
      file: "Full-stack Development with Django Managing Migrations.pdf",
    },
    {
      title: "Red Hat OpenStack Administration I",
      organization: "Red Hat",
      file: "Red Hat OpenStack Administration I.pdf",
    },
    {
      title: "Red Hat System Administration I",
      organization: "Red Hat",
      file: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3.pdf",
    },
    {
      title: "Red Hat System Administration II",
      organization: "Red Hat",
      file: "Red Hat System Administration II .pdf",
    },
    {
      title: "Getting Started with Linux Fundamentals",
      organization: "Red Hat",
      file: "Red Hat Training Getting Started with Linux Fundamentals.pdf",
    },
    {
      title: "Poster Making 2024",
      organization: "RSM Polytechnic, Nashik",
      file: "Poster Making 2024.pdf",
    },
    {
      title: "Project Competition 2025",
      organization: "Shri. Hiralal Hastimal Polytechnic, Chandwad",
      file: "Project Competition 2025.pdf",
    },
    {
      title: "Project Competition 2025",
      organization: "Shatabdi Institute of Engineering & Research, Nashik",
      file: "Project Competitionn 2025.pdf",
    },
    {
      title: "Project Competition 2025",
      organization: "RSM Polytechnic, Nashik",
      file: "Project Competitionnn 2025.pdf",
    },
    {
      title: "Internship Certificate",
      organization: "Motwane Manufacturing Company Pvt. Ltd.",
      file: "Motwane Internship Certificate.pdf",
    },
    {
      title: "Smart India Hackathon 2026",
      organization: "Smart India Hackathon, Internal PCU",
      file: "SIH_2026_Certificate_Ritesh_Chormale.pdf",
    },
  ]

  const initialCount = isMobile ? 3 : 6

  const displayedCertificates = showAll
    ? certifications
    : certifications.slice(0, initialCount)

  const openCertificate = (certificate) => {
    const certificateUrl = `/Certificates/${certificate.file}`

    if (isMobile) {
      window.open(
        certificateUrl,
        "_blank",
        "noopener,noreferrer"
      )
      return
    }

    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  const remainingCount = certifications.length - initialCount

  return (
    <section id="certifications" className="certifications section">
      <div className="section-container">
        <div className="section-heading">
          <p>CERTIFICATIONS</p>
          <h2>Certifications & Learning.</h2>
        </div>

        <div className="certifications-grid">
          {displayedCertificates.map((certificate, index) => (
            <div
              className="certificate-card"
              key={`${certificate.file}-${index}`}
              onClick={() => openCertificate(certificate)}
            >
              <div className="certificate-preview">
                {isMobile ? (
                  <CertificateThumbnail
                    file={certificate.file}
                    title={certificate.title}
                  />
                ) : (
                  <object
                    data={`/Certificates/${certificate.file}`}
                    type="application/pdf"
                    title={certificate.title}
                  ></object>
                )}

                <div className="certificate-overlay">
                  <span>View Certificate</span>
                </div>
              </div>

              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p>{certificate.organization}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-button-container">
          <button
            className="view-more-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "Show Less"
              : `View More (${remainingCount} More)`}
          </button>
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={closeCertificate}
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <p>{selectedCertificate.organization}</p>
                <h3>{selectedCertificate.title}</h3>
              </div>

              <button
                className="certificate-close"
                onClick={closeCertificate}
                aria-label="Close certificate"
              >
                ×
              </button>
            </div>

            <div className="certificate-modal-viewer">
              <object
                data={`/Certificates/${selectedCertificate.file}`}
                type="application/pdf"
                title={selectedCertificate.title}
              >
                <p>Unable to display this certificate.</p>
              </object>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications