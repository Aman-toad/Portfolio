import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, LinkedinIcon, GithubIcon } from 'lucide-react';
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    //email validation
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return
    }

    setIsSubmitting(true);

    // Simulate form submission
    emailjs
      .sendForm(
        "service_8uo4twa", // from EmailJS dashboard
        "template_pwcws13", // from EmailJS template
        formRef.current,
        "LrPi5E1CtZQErtPXl" // from EmailJS account
      )
      .then(
        () => {
          toast.success("Message sent successfully! I'll get back to you soon."),
            setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error("Failed to send message:", error);
          toast.error("Failed to send message. Please try again later.")
          setIsSubmitting(false)
        }
      );
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: < Mail />,
      title: "Email",
      value: "amancrafts.dev@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: <LinkedinIcon />,
      title: "LinkedIn",
      value: "amancrafts-dev",
      description: "Let's connect professionally"
    },
    {
      icon: <GithubIcon />,
      title: "GitHub",
      value: "Aman-toad",
      description: "Check out my code"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-5">
        <section id='contact' className="py-10 md:py-15 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              {/* <motion.p
                className="text-primary font-semibold text-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                GET IN TOUCH
              </motion.p> */}
              <motion.h2
                className="section-title mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                LET'S BUILD SOMETHING<br />
                <span className="gradient-text">AMAZING </span>
                <span className="gradient-text-alt">TOGETHER</span>
              </motion.h2>
              {/* <motion.p
                className="section-subtitle max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Have a project in mind? Need a technical consultation? Or just want to say hi?
                I'm always excited to discuss new opportunities.
              </motion.p> */}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                className="glass p-8 rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>                
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-8 gradient-text">Other Ways to Reach Me</h3>
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="glass p-6 rounded-xl hover-lift cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{method.icon}</span>
                      <div>
                        <h4 className="font-semibold text-lg">{method.title}</h4>
                        <p className="text-primary font-medium">{method.value}</p>
                        <p className="text-muted-foreground text-sm">{method.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="glass p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-4">Available for Freelance</h4>
                  <p className="text-muted-foreground mb-4">
                    Currently accepting new projects and collaborations
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-semibold">Online & Ready to Work</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <ToastContainer closeOnClick position="bottom-right" autoClose={3000} />
        </section>
      </main>
    </div>
  );
};

export default Contact;