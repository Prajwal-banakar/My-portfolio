import { useState } from 'react';
import { Code, Server, Database, Layout, Globe, Cloud, Terminal, Cpu, CircleCheck } from 'lucide-react';

const SkillsAndServices = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const services = [
    {
      icon: <Layout size={36} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />,
      title: "Full Stack Development",
      description: "Building scalable and responsive web applications using modern frameworks and technologies.",
      skills: ["Java", "Spring boot", "Mysql", "database", "Microservices"]
    },
    
    {
      icon: <Cloud size={36} className="text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />,
      title: "DevOps Engineering",
      description: "Streamlining development and operations with automated deployment pipelines and container technologies.",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitOps", "AWS"]
    },
    {
      icon: <Database size={36} className="text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300" />,
      title: "Database Management",
      description: "Designing and optimizing database architectures for performance and scalability.",
      skills: ["Mysql","MongoDB", "SQL", "Database Optimization"]
    }
  ];

  const skillCategories = [
    {
      category: "Languages",
      icon: <Layout size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python ", level: 85 },
        { name: "c++", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      category: "Frameworks",
      icon: <Server size={24} className="text-green-600 dark:text-green-400" />,
      skills: [
        { name: "Spring", level: 85 },
        { name: "Spring boot", level: 90 },
        { name: "Hibernate", level: 75 },
        { name: "Spring mvc", level: 85 },
        { name: "Spring security", level: 80 }
      ]
    },
    {
      category: "Database",
      icon: <Cpu size={24} className="text-purple-600 dark:text-purple-400" />,
      skills: [
        { name: "Mysql", level: 80 },
        { name: "Mangodb", level: 75 },
        { name: "sql", level: 85 },
        { name: "Postgresql", level: 70 },
        { name: "oracle", level: 85 }
      ]
    },
    {
      category: "DevOps",
      icon: <Terminal size={24} className="text-orange-600 dark:text-orange-400" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "GitHub Actions", level: 85 },
        { name: "AWS", level: 80 }
      ]
    }
  ];

  const otherSkills = [
    "Data Structures", "Algorithms", "OOP", "DBMS", "Neural Networks", "Computer Networks", "Linux", "Compiler Design","JDBC", "Rest API","Microservices",
    "Servlets","JSP","Maven","Gradel"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span> & <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With expertise in full-stack development, Database, and DevOps, I provide comprehensive solutions to complex technical challenges.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'skills'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'services'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Services
            </button>
          </div>
        </div>
        <div className={`${activeTab === 'skills' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Other Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={`${activeTab === 'services' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/90 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CircleCheck size={16} className="text-green-500 dark:text-green-400 group-hover:text-white" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-white/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndServices;