import { motion } from 'framer-motion';
import resume from '../Assets/resume.pdf';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-5 md:pt-10">
        <section id='about' className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p
                className="text-primary font-semibold text-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                MY STORY
              </motion.p>
              <motion.h2
                className="section-title mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                CRAFTING MODERN, <span className="gradient-text"></span><br />
                <span className="gradient-text-alt">USER-FRIENDLY EXPERIENCES</span>
              </motion.h2>
              <motion.p
                className="section-subtitle max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From late-night debugging to fullstack development, I've learned the challenges firsthand. Now, I create solutions that are practical, reliable, and people-focused.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Frontend Mastery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crafting pixel-perfect user interfaces with React, Next.js, and JavaScript.
                    I believe great UX is invisible - it just works seamlessly.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Backend Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building robust APIs and scalable server architectures with Node.js and Next.js
                    Performance and security are never afterthoughts.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Full-Stack Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding the complete development lifecycle allows me to make decisions that benefit
                    the entire project, not just individual components.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="glass p-8 rounded-xl hover-glow">
                  <h4 className="text-xl font-bold mb-6">What drives me to code?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Problem Solving:</strong> Every bug is a puzzle waiting to be solved
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Continuous Learning:</strong> Technology evolves, and so do I
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Impact:</strong> Code that makes a real difference in people's lives
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Collaboration:</strong> Building amazing things with amazing people
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, z: 30 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className='mt-16 text-center'>
              <a href={resume} target="_blank">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default About;