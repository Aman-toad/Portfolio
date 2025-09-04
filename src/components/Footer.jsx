import { motion } from 'framer-motion';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <GithubIcon/>, url: 'https://github.com/Aman-toad/' },
    { name: 'LinkedIn', icon: <LinkedinIcon/>, url: 'https://www.linkedin.com/in/aman-singh-a00toad/' },
    { name: 'Instagram', icon: <InstagramIcon/>, url: 'https://instagram.com/console.log_aman' }
  ];

  return (
    <motion.footer 
      className="py-12 px-6 border-t border-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div>
            <motion.h3 
              className="text-2xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              AS
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed md:w-3/4 lg:w-1/2">
              Fullstack Developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                 target='_blank'
                  key={social.name}
                  href={social.url}
                  className="glass p-3 rounded-lg hover-glow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {currentYear} Aman Singh. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-4 md:mt-0">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;