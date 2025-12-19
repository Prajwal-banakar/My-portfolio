import { useState } from 'react';
import { Code, Server, Database, Layout, Globe, Cloud, Terminal, Cpu, CircleCheck } from 'lucide-react';

const SkillsAndServices = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skillCategories = [
    {
      category: "Languages",
      icon: <Layout size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C++", level: 90 },
        { name: "C", level: 95 }
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
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With expertise in full-stack development, Database, and DevOps, I provide comprehensive solutions to complex technical challenges.
          </p>
        </div>

        <div>
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
      </div>
    </section>
  );
};

export default SkillsAndServices;