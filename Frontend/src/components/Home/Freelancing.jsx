import { Code, Layout, Database, Server, ChevronRight, Star, Check, MessageSquare, Zap, Shield, Clock } from 'lucide-react';

const FreelancingServices = () => {
  
  const services = [
    {
      icon: <Code size={40} className="text-purple-600" />,
      title: "Full Stack Solutions",
      description: "End-to-end web applications with seamless frontend and backend integration.",
      features: [
        "Java & Spring Boot",
        "API integration",
        "Database implementation",
        "User authentication",
        "Payment processing"
      ]
    },
    {
      icon: <Layout size={40} className="text-blue-600" />,
      title: "Devops & Cloud Services",
      description: "Responsive, pixel-perfect UI/UX with modern frameworks. Focused on performance and user experience.",
      features: [
        "Maven & Gradle",
        "Docker & Kubernetes",
        "Jenkins CI/CD",
        "GitHub Actions",
        "AWS & Azure deployment", 
      ]
    },
    
  ];

  const testimonials = [
    {
      name: "Rohan Mehta",
      role: "Founder",
      image: "../../person.svg",
      rating: 4,
      text: "He developed our e-commerce platform flawlessly and ahead of schedule. His coding skills and professionalism made the entire process smooth and efficient."
    },
    {
      name: "Priya Sharma",
      role: "Digital Marketing Head",
      image: "../../person.svg",
      rating: 4,
      text: "His web design improved our site's performance and engagement significantly. His design sense and responsiveness led to a 45% increase in traffic."
    },
    {
      name: "Arjun Nair",
      role: "Product Manager",
      image: "../../person.svg",
      rating: 5,
      text: "He was a key contributor to our AI-based platform. He grasped the requirements quickly and delivered a robust, scalable solution that our users love."
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Freelancing <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            High-quality development services at competitive prices. From concept to deployment, I deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Get a quote
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check size={16} className="text-green-500 dark:text-green-400 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that perfectly fits your needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ChevronRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreelancingServices;