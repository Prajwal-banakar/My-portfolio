import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { handleError, handleSuccess } from '../Includes/Utils';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const mailtoLink = `mailto:prajwal.banakar18@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    // Open default email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitStatus('success');
    setStatusMessage('Opening your email client...');
    handleSuccess('Opening your email client...');

    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage('');
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      value: 'prajwal.banakar18@gmail.com',
      link: 'mailto:prajwal.banakar18@gmail.com',
    },
    {
      icon: <Linkedin size={24} className="text-blue-700 dark:text-blue-500" />,
      title: 'LinkedIn',
      value: 'Prajwal Banakar',
      link: 'https://www.linkedin.com/in/prajwal-banakar',
    },
    {
      icon: <Github size={24} className="text-gray-900 dark:text-gray-100" />,
      title: 'GitHub',
      value: 'Prajwal-banakar',
      link: 'https://github.com/Prajwal-banakar',
    },
    {
      icon: <MapPin size={24} className="text-red-600 dark:text-red-400" />,
      title: 'Location',
      value: 'Bengaluru, Karnataka',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Write your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Write your email address"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Describe your project or inquiry..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      Processing<span className="ml-2 animate-pulse">...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm">
                  {statusMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1">{method.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{method.title}</h4>
                      {method.link ? (
                        <a href={method.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-white/90 text-sm mb-4">
                I typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white/90">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;