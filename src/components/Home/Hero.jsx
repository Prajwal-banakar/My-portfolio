import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Prajwal banakar</span>
          </h1>
          
          <div className="h-10 mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <span className="mr-2">I'm a</span>
              <span className="text-blue-600 dark:text-blue-400 relative">
                Java fullStack Developer
              </span>
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
            Experienced in creating scalable applications with modern technologies. 
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1Wj-ZU402STlLiafh5m9sdqZpb7bX8d4W/view?usp=drive_link"
              target="_blank"
              download
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Prajwal-banakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prajwal-banakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:prajwal.banakar18@gmail.com" 
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center relative">
          <div className="absolute w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-60 h-60 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -translate-x-20 translate-y-20"></div>
          
          <div className="relative w-80 h-80">
            <img
              src={profileImage}
              alt="Prajwal banakar"
              className="rounded-full object-cover w-full h-full border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-1">Scroll Down</span>
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;