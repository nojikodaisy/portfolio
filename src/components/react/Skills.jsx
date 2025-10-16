import { useState } from 'react';

const skillsData = {
  backend: [
    { name: 'Java', level: 'Avancé', icon: '☕', color: 'pink' },
    { name: 'Scala', level: 'Intermédiaire', icon: '🔴', color: 'pink' },
    { name: 'Spring Boot', level: 'Avancé', icon: '🍃', color: 'pink' },
    { name: 'PostgreSQL', level: 'Avancé', icon: '🐘', color: 'pink' },
    { name: 'MongoDB', level: 'Intermédiaire', icon: '🍃', color: 'pink' },
    { name: 'REST API', level: 'Avancé', icon: '🔌', color: 'pink' },
    { name: 'Docker', level: 'Intermédiaire', icon: '🐳', color: 'pink' },
    { name: 'Python', level: 'Avancé', icon: '🐍', color: 'pink' },
    { name: 'Git', level: 'Intermédiaire', icon: '🔀', color: 'pink' },
    { name: 'React', level: 'Intermédiaire', icon: '⚛️', color: 'pink' }
  ],
  data: [
    { name: 'Kafka', level: 'Intermédiaire', icon: '📨', color: 'pink' },
    { name: 'Redis', level: 'Intermédiaire', icon: '📦', color: 'pink' },
    { name: 'Pandas', level: 'Intermédiaire', icon: '🐼', color: 'pink' },
    { name: 'SQL', level: 'Avancé', icon: '🗃️', color: 'pink' },
    { name: 'Apache Spark', level: 'Intermédiaire', icon: '⚡', color: 'pink' },
    { name: 'MongoDB', level: 'Intermédiaire', icon: '🍃', color: 'pink' }
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('backend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculer les compétences à afficher
  const currentSkills = skillsData[activeTab];
  const totalPages = Math.ceil(currentSkills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSkills = currentSkills.slice(startIndex, endIndex);

  // Réinitialiser la page quand on change d'onglet
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const SkillCard = ({ skill, index }) => {
    const isHovered = hoveredSkill === skill.name;
    
    return (
      <div 
        className="group cursor-pointer"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className={`
          relative bg-base-100 p-8 rounded-2xl shadow-md 
          transition-all duration-300 border-2 border-transparent
          ${isHovered ? 'shadow-2xl -translate-y-3 border-pink' : 'hover:shadow-lg hover:-translate-y-1'}
        `}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`
              text-6xl transition-transform duration-300
              ${isHovered ? 'scale-125' : 'group-hover:scale-110'}
            `}>
              {skill.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <span className={`
                badge badge-${skill.color} badge-lg font-semibold
                ${isHovered ? 'badge-outline' : ''}
              `}>
                {skill.level}
              </span>
            </div>
          </div>
          
          {isHovered && (
            <div className="absolute inset-0 bg-pink/5 rounded-2xl pointer-events-none" />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-base-200" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-pink mx-auto rounded"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="tabs tabs-boxed mb-12 justify-center bg-base-100 p-2">
            <button 
              className={`tab tab-lg ${activeTab === 'backend' ? 'bg-pink text-pink-content' : ''}`}
              onClick={() => handleTabChange('backend')}
            >
              <span className="text-lg">💻 Backend & API</span>
            </button>
            <button 
              className={`tab tab-lg ${activeTab === 'data' ? 'bg-pink text-pink-content' : ''}`}
              onClick={() => handleTabChange('data')}
            >
              <span className="text-lg">📊 Data & Analytics</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
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
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-base-100 p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl mb-4">🎓</div>
              <div className="text-4xl font-bold text-pink mb-2">Master</div>
              <div className="text-base-content/70 font-medium">Niveau d'études</div>
            </div>
            <div className="bg-base-100 p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl mb-4">💡</div>
              <div className="text-4xl font-bold text-pink mb-2">3+</div>
              <div className="text-base-content/70 font-medium">Années d'expérience</div>
            </div>
            <div className="bg-base-100 p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl mb-4">🌍</div>
              <div className="text-4xl font-bold text-pink mb-2">Paris</div>
              <div className="text-base-content/70 font-medium">Localisation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}