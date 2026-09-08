import "./Projects.css"

function Projects() {
  const projects = [
    {
      title: "Air Quality Analyzer",
      description:
        "A system designed to monitor and analyze air quality parameters to help identify environmental conditions and provide meaningful insights.",
      technologies: ["Python", "IoT", "Sensors"],
    },
    {
      title: "Voice Controlled Wheelchair",
      description:
        "A voice-controlled smart wheelchair designed to assist users with mobility by allowing movement and control through voice commands.",
      technologies: ["Arduino", "Embedded Systems", "Voice Recognition"],
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="section-container">
        <div className="projects-heading">
          <p> PROJECTS</p>
          <h2>My Projects.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects