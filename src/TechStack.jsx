import "./TechStack.css";

export default function TechStack() {
  const categories = [
    {
      main: "Frontend",
      groups: [
        {
          name: "React Ecosystem",
          description: "Modern React applications with Next.js for SEO and performance.",
          technologies: ["React", "Next.js", "TypeScript", "Redux"]
        },
        {
          name: "Styling & UI",
          description: "Utility-first design systems for pixel-perfect interfaces.",
          technologies: ["Tailwind CSS", "CSS Modules", "Framer Motion"]
        }
      ]
    },
    {
      main: "Backend",
      groups: [
        {
          name: "Node.js & APIs",
          description: "Scalable backend services with REST and GraphQL APIs.",
          technologies: ["Node.js", "Express", "GraphQL", "Socket.io"]
        },
        {
          name: "Python & AI/ML",
          description: "Machine learning integration with modern Python frameworks.",
          technologies: ["Python", "Django", "Scikit-learn", "OpenAI API"]
        }
      ]
    },
    {
      main: "DevOps",
      groups: [
        {
          name: "Infrastructure",
          description: "Cloud services and containerization for scalable deployment.",
          technologies: ["AWS", "Docker", "CI/CD"]
        },
        {
          name: "Database",
          description: "Reliable data management for production applications.",
          technologies: ["PostgreSQL", "MongoDB", "Firebase"]
        }
      ]
    }
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-stack-content">
        <h2>Tech Stack</h2>
        
        <div className="categories-grid">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="category-section">
            <div className="category-header">
              <h3 className="category-main">{category.main}</h3>
            </div>
            
            <div className="groups-container">
              {category.groups.map((group, groupIndex) => (
                <div key={groupIndex} className="tech-group">
                  <h4 className="group-name">{group.name}</h4>
                  <p className="group-description">{group.description}</p>
                  <div className="technologies-list">
                    {group.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
