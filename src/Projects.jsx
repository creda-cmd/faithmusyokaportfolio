import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: 'Carbon Canopy Consultancy',
      description: 'Environmental services company website with carbon project development, forestry services, and contact form with MongoDB integration.',
      image: '/carbon-canopy.png',
      link: 'https://carbon-canopy-xi.vercel.app/',
      tech: ['React 19', 'TailwindCSS', 'Express.js', 'MongoDB']
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies-list">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">View Project</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
