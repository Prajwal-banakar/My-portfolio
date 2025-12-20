import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Information Science",
      institution: "Ghousia College of Engineering",
      location: "Ramangara, Karnataka",
      period: "2022 - 2026",
      description: "Graduated with a focus on Software Engineering, Data Structures, and Algorithms. Active member of the coding club and participated in various hackathons.",
    },
    {
      degree: "Pre-University Course (PCMC's)",
      institution: "Morarji Desai Residential PU Science college",
      location: "Vijayanagara(D), Karnataka",
      period: "2020 - 2022",
      description: "Completed with distinction, focusing on Physics, Chemistry, Mathematics, and Computer Science.",
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 ml-3 md:ml-6 space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 w-5 h-5 rounded-full"></div>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;