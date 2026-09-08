function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Ritesh<span>.dev</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar