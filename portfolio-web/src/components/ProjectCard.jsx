const ProjectCard = ({ project }) => {
  return (
<div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80 md:w-96 transform transition duration-300 hover:scale-105 hover:shadow-xl">
<h3 className="text-xl font-bold text-secondary">{project.name}</h3>
      <p className="text-gray-600">{project.description}</p>
      <ul className="flex flex-wrap mt-2">
        {project.technologies.map((tech, index) => (
          <li key={index} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md m-1">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
      <a href={project.repo} className="text-accent hover:underline transition duration-200 hover:text-primary">
          📂 Repositorio Github
        </a>
        {project.demo !== "#" && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
            🚀 Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
