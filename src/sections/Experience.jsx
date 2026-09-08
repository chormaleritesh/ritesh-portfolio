import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <p className="section-tag">MY EXPERIENCE</p>
        <h2>Professional Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Intern</h3>
              <h4>Motwane Manufacturing Company Pvt. Ltd.</h4>
            </div>
            <span>May 2024 – July 2024</span>
          </div>

          <p>
            Completed a 6-week internship in the ETK Department, gaining
            practical exposure to LV Lines and PCB-related operations.
          </p>

          <div className="experience-tags">
            <span>ETK Department</span>
            <span>LV Lines</span>
            <span>PCB</span>
            <span>Manufacturing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;