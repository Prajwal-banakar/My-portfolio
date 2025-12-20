import { Award, BookOpen, ExternalLink } from 'lucide-react';

const Activities = () => {
  const certifications = [
    {
      title: "Java Coding Test",
      issuer: "Hackerrank",
      description: "Earned Java (Basic) Certification from HackerRank by solving real-world coding challenges covering OOP and core Java fundamentals.",
      link: "https://www.hackerrank.com/certificates/iframe/ee77cbf9cd0f"
    },
    {
      title: "Advanced Java Skillup",
      issuer: "GeeksforGeeks",
      description: "Comprehensive course covering Java, Collections, Multithreading, JDBC, Srevlets, JSP, Spring, Spring Boot, Hibernate, Spring Security and  Spring AI.",
      link: "https://media.geeksforgeeks.org/courses/certificates/8c3fa0fd3097ea68fcc4477905da6adc.pdf"
    }
  ];

  const activities = [
    {
      title: "Software Engineering Job Simulation",
      organization: "JP Morgan Chase & Co",
      description: " JP Morgan Chase Software Engineering Virtual Internship Program Experience(Forage).",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_F8azjEskWwN6uLcLv_1765516320686_completion_certificate.pdf"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Actively contributing to various open-source projects to improve code quality and add features.",
      link: "https://github.com/Prajwal-banakar"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Activities & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My continuous learning journey and professional involvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-blue-600 dark:text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow flex flex-col min-h-[220px]">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h4>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.description}</p>
                  </div>
                  {cert.link && cert.link !== "#" && (
                    <div className="mt-auto">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        View Certificate <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Activities Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-purple-600 dark:text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Activities</h3>
            </div>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow flex flex-col min-h-[220px]">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{activity.title}</h4>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-3">{activity.organization}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{activity.description}</p>
                  </div>
                  {activity.link && (
                    <div className="mt-auto">
                      <a href={activity.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        View Activity <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;