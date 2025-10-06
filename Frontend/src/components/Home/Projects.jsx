import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Plant Disease Detection System",
      description: "Developed a real-time plant disease detection model with an accuracy of 92% using CNNs with TensorFlow and Keras, achieving a 50% reduction in misdiagnoses. Enhanced user experience with an AI chatbot using Google Gemini API for personalized guidance.",
      image: "https://th.bing.com/th/id/OIP.gWv8j50fRJmAgTN8RBFE9AHaEO?w=316&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      tags: ["TensorFlow", "CNN", "Google Gemini API", "Streamlit", "Keras"],
      github: "#",
      live: "#",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Techmate - Electronics Marketplace",
      description: "Developed a scalable web application for selling graphic design services and electronic gadgets using the MERN stack, with secure JWT authentication, bcrypt for password hashing, and RESTful APIs for efficient data management.",
      image: "https://th.bing.com/th/id/OIP.l_tTjcashDvRcbgegVs23AHaFD?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      tags: ["React.js", "MongoDB", "Express", "Node.js", "Docker"],
      github: "#",
      live: "#",
      category: "Web App"
    },
    {
      id: 3,
      title: "AIChE-RGIPT Student Chapter Web Application",
      description: "Developed and deployed a high-performance web application on AWS EC2, integrating Razorpay for secure payment authentication, serving over 2,000 active users with optimized database performance.",
      image: "../../Aiche.jpeg",
      tags: ["AWS EC2", "SEO", "Razorpay", "Database Optimization"],
      github: "#",
      live: "#",
      category: "Web App"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work across software development. Each project represents my passion for creating innovative solutions.
          </p>
        </div>

       


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div>
                    <span className="text-white text-sm bg-blue-600/90 px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="bg-blue-600/50 p-2 rounded-full hover:bg-blue-600/80 transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
          >
            View All Projects
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;