import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Ce portfolio est lui-même un projet à part entière ! Développé avec Astro et enrichi par React, Svelte et Vue, il reflète mon approche du développement moderne. Chaque section a été pensée pour offrir une expérience utilisateur fluide.",
    image: "/",
    tech: ["Astro", "React", "Svelte", "Vue", "DaisyUI", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/nojikodaisy/portfolio",
    featured: false
  },
  {
    id: 2,
    title: "Mood Meal",
    description: "Application web qui génère des suggestions de boissons personnalisées en fonction de l'humeur, de la phase du cycle menstruel. Utilise l'IA (Groq/Llama) pour proposer des recettes adaptées avec leurs bienfaits.",
    image: "/",
    tech: ["React", "TypeScript", "Spring Boot", "Tailwind CSS", "Docker"],
    category: "fullstack",
    github: "https://github.com/nojikodaisy/mood-meal",
    featured: false
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const ProjectCard = ({ project }) => (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <figure className="overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </figure>
      
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <h3 className="card-title text-lg">{project.title}</h3>
          {project.featured && (
            <div className="badge badge-pink badge-sm">Featured</div>
          )}
        </div>
        
        <p className="text-sm text-base-content/70 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span key={tech} className="badge badge-outline text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="card-actions justify-end">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            Code
          </a>
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-pink text-pink-content hover:bg-pink/80 btn-sm"
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-base-100" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-pink mx-auto rounded mb-8"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents en développement backend et analyse de données.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="btn btn-circle btn-sm bg-pink text-pink-content hover:bg-pink/80 disabled:bg-base-300 disabled:text-base-content/50"
            >
              ❮
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`btn btn-circle btn-sm ${
                  currentPage === i + 1 
                    ? 'bg-pink text-pink-content' 
                    : 'bg-base-100 hover:bg-base-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="btn btn-circle btn-sm bg-pink text-pink-content hover:bg-pink/80 disabled:bg-base-300 disabled:text-base-content/50"
            >
              ❯
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <a href="https://github.com/nojikodaisy" className="btn btn-outline border-pink text-pink hover:bg-pink hover:text-pink-content btn-lg" target="_blank">
            Voir plus sur GitHub
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}