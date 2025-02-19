// src/App.jsx
import projects from "./data/projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <h1>🎨 Mi Portfolio</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
