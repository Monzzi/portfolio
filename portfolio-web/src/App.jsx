import Navbar from "./components/Navbar";
import projects from "./data/projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar /> {/* Agregamos la barra de navegación */}
      <div className="p-8">
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in place-items-center">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
