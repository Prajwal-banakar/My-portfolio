import { 
    Github, 
    Linkedin, 
    Twitter, 
    Instagram, 
    ChevronRight,
    ExternalLink 
  } from 'lucide-react';
  
const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
      {
        icon: <Github size={20} />,
        name: "GitHub",
        url: "https://github.com/Prajwal-banakar"
      },
      {
        icon: <Linkedin size={20} />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prajwal-banakar"
      },
      {
        icon: <Twitter size={20} />,
        name: "Twitter",
        url: "https://x.com/Pbanakar18"
      },
     
    ];
    
    return (
      <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Prajwal Banakar</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Java developer specializing in modern web technologies, AI integration, 
                and creating exceptional digital experiences for businesses worldwide.
              </p>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-sm hover:shadow transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} All rights reserved.
            </p>
            
            <div className="flex items-center">
              <a 
                href="#top"
                className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Back to top
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;