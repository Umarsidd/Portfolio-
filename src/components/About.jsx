import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { personalInfo } from '@/data/resume';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: '3+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Rocket,
      title: '10+ Projects',
      description: 'Successfully Delivered',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Agile & Scrum Expert',
    },
    {
      icon: Award,
      title: 'Certified',
      description: 'GCP & TCS Awards',
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl rotate-6 opacity-20" />
              <div className="relative bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Full Stack Development</p>
                      <p className="text-sm text-muted-foreground">MERN Stack Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Cloud Technologies</p>
                      <p className="text-sm text-muted-foreground">AWS & GCP</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Agile Methodology</p>
                      <p className="text-sm text-muted-foreground">Scrum Master</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Full Stack Developer & Software Engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.summary}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> {personalInfo.location}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Email:</span> {personalInfo.email}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Phone:</span> {personalInfo.phone}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
