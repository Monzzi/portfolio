// src/components/ProjectCard.jsx
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="links">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          📂 Repositorio
        </a>
        {project.demo !== "#" && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            🚀 Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
