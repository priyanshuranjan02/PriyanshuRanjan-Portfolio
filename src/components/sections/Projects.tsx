import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import careerMentorImage from "@/assets/CareerMentor-Logo.png";
import swayamSaarthiImage from "@/assets/SwayamSaarthi-Logo.png";
import moodifyImage from "@/assets/Moodify-Logo.png";

const projects = [
  {
    title: "Moodify - Sentiment Analysis Web App",
      type: "Full Stack AI Project",
      duration: "Sept 2024 – Jan 2025",
      description: "Developed a full-stack AI-powered sentiment analysis web application using Flask and a BERT-based NLP model with a modern interactive UI.",
      features: [
        "Implemented Transformer-based NLP (BERT) for accurate sentiment classification and batch CSV review analysis",
        "Designed RESTful JSON APIs for seamless frontend–backend integration",
        "Achieved high-confidence sentiment predictions with optimized inference performance"
      ],
      technologies: ["Python", "BERT", "NLP", "Flask", "React", "Firebase"],
      status: "Completed",
      image: moodifyImage,
      githubUrl: "https://github.com/priyanshuranjan02/Moodify-WebApp"
  },
  {
    title: "CareerMentor - AI Interview Mentor",
      type: "Full Stack AI Project",
      duration: "Jul 2025 – Ongoing",
      description: "Developed a Full Stack AI interview preparation platform that personalizes mock interviews using resume-based role analysis and real-time interaction.",
      features: [
      "Implemented a resume upload workflow to customize interview questions based on the applicant’s job role",
      "Designed a seamless multi-step interview flow with consistent UI/UX across components",
      "Enabled real-time voice-based interaction and feedback for realistic interview simulation"
    ],
      technologies: ["React", "TypeScript", "Ollama", "OpenCV", "Supabase", "Speech & Voice APIs"],
      status: "In Development",
      image: careerMentorImage,
      githubUrl: "https://github.com/priyanshuranjan02/Career-Mentor"
  },
  {
    title: "Swayam Saarthi",
      type: "Web-based On-Demand Service Platform",
      duration: "December 2025 – Ongoing",
      description: "A web-based on-demand driver assistance platform that connects vehicle owners with nearby verified drivers for personal cars, bikes, and autos, enabling safe and convenient travel without renting a vehicle.",
      features: [
        "Role-based access with separate User and Driver panels",
        "On-demand driver booking using location-based services",
        "Driver availability management and booking acceptance system",
        "Admin dashboard for driver verification and booking monitoring"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "Firebase"],
      status: "In Development",
      image: swayamSaarthiImage,
    githubUrl: "https://github.com/priyanshuranjan02/Swayam-Saarthi"
  }
];


export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in machine learning, data engineering, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-border shadow-lg hover:shadow-purple transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {project.features && (
                    <div className="absolute top-4 left-4">
                      {/* <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge> */}
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className="px-3 py-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Type */}
                  <p className="text-sm font-medium text-primary mb-1">
                    {project.type}
                  </p>

                  {/* Duration */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.duration}
                  </p>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Key Features */}
                  <div className="mb-4">
                    <p className="font-semibold text-foreground mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-purple transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/priyanshuranjan02?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}