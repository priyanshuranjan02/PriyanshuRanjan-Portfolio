import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, Database, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A brief introduction to who I am, what I do, and where I’m heading...
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Card className="relative p-8 md:p-10 bg-card border border-border shadow-blue hover:shadow-glow transition-all duration-500">

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-8">

              {/* Intro */}
              <p className="text-lg leading-relaxed text-foreground">
                I am a <span className="text-primary font-semibold">Computer Science undergraduate</span> specializing in
                <span className="text-primary font-semibold"> Artificial Intelligence and Machine Learning</span> at VIT Bhopal.
                My interests focus on building intelligent systems, data-driven applications, and scalable analytics solutions.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                I enjoy working on projects involving
                <span className="text-primary font-medium"> sentiment analysis</span> and
                <span className="text-primary font-medium"> AI-powered platforms</span> that address real-world problems.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Hands-on experience in <span className="text-foreground font-medium">Python, Java, SQL, AWS cloud fundamentals, and core ML libraries</span>  through academic coursework and practical projects.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    I have gained exposure to <span className="text-foreground font-medium">model development, Databases, backend APIs, frontend collabs, and cloud fundamentals (AWS)</span> strengthening both my technical and problem-solving skills.
                  </p>
                </div>
              </div>

              {/* Goal */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  I am actively seeking opportunities to grow as a <span className="text-foreground font-semibold">Data Analyst or Full Stack AI Developer</span>,
                  where I can contribute my skills to impactful projects while continuing to learn and evolve in the field of AI and data science.                  
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}