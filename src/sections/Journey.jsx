import "./Journey.css"

function Journey() {
 const journey = [
  {
    year: "Present",
    title: "Continuing the Journey",
    institution: "Pimpri Chinchwad University, Pune",
    description:
      "Currently pursuing B.Tech in Computer Science & Engineering while building projects, developing technical skills, and exploring software development and cybersecurity.",
  },
  {
    year: "2025",
    title: "Started B.Tech",
    institution: "Pimpri Chinchwad University, Pune",
    description:
      "Joined B.Tech in Computer Science & Engineering and began transitioning deeper into software development and technology.",
  },
  {
    year: "2024",
    title: "Industry Internships",
    institution: "Professional Experience",
    description:
      "Gained practical industry exposure through internships, including experience at Motwane Manufacturing Company Pvt. Ltd.",
  },
  {
    year: "2021 - 2024",
    title: "Diploma in Electronics & Telecommunication Engineering",
    institution: "MVP's Rajarshi Shahu Maharaj Polytechnic, Nashik",
    description:
      "Completed Diploma in Electronics and Telecommunication Engineering with an overall score of 81%.",
  },
]

  return (
    <section id="journey" className="journey section">
      <div className="section-container">
        <div className="section-heading">
          <span> JOURNEY</span>
          <h2>My Journey So Far.</h2>
        </div>

        <div className="timeline">
          {journey.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey