import "./Skills.css"

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Django"],
    },
    {
      title: "Databases & Tools",
      skills: ["SQLite", "Git", "GitHub", "VS Code"],
    },
    {
      title: "Technologies & Systems",
      skills: [
        "Linux",
        "Docker",
        "REST APIs",
        "IoT",
        "Cybersecurity Fundamentals",
      ],
    },
  ]

  return (
    <section id="skills" className="skills section">
      <div className="section-container">
        <div className="section-heading">
          <p> SKILLS</p>
          <h2>Technical Skills.</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills