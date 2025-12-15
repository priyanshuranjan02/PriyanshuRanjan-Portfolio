import { motion } from 'framer-motion';
import { Building, Users, Calendar, Award, Trophy,Medal, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ExternalLink } from "lucide-react";
import reportPdf from "@/assets/VITB Experiential Learning Report (23BAI10691).pdf";
import { FileText } from "lucide-react";
import {
  SiAmazonwebservices,
  SiOracle,
  SiCoursera
} from "react-icons/si";

const experiences = [
  {
    role: "Experiential Learning Program",
    organization: "VIT Bhopal University, Bhopal",
    period: "2 Weeks (Oct - Nov 2025)",
    type: "Industry Program",
    icon: Cpu,
    responsibilities: [
      "Built and programmed a 4WD smart robot car using Raspberry Pi Pico and ESP8266",
      "Interfaced ultrasonic sensors, DC motors, and motor drivers for real-time control",
      "Implemented wireless control and basic automation logic",
      "Performed debugging, testing, and hardware troubleshooting"
    ],
    achievements: [
      "Successfully assembled and demonstrated a working IoT-enabled bot",
      "Gained hands-on exposure to embedded systems and hardware-software integration",
      "Received positive evaluation from industry instructors"
    ],
    reportLink: reportPdf
  }
];

const achievements = [
  {
    title: "Naukri Campus Young Turks",
    organizer: "Naukri Campus",
    year: "2025",
    description:
      "Scored 99.82 percentile in Young Turks 2025 (India's Largest Skill Contest).",
    icon: Medal
  },
  {
    title: "National Financial Literacy Quiz",
    organizer: "NISM (SEBI)",
    year: "2025",
    description:
      "Participated in the NFLQ (Online Round) conducted by NISM, SEBI. Scored 15/15.",
    icon: Trophy
  },
  {
    title: "TCS CodeVita 2025",
    organizer: "Tata Consultancy Services (TCS)",
    year: "2025",
    description:
      "Qualified TCS CodeVita 2025 with strong national ranks — AIR 9353 in Round 1 and AIR 1205 in Round 2.",
    icon: Trophy
  }
];

const certifications = [
  {
    title: "Applied Machine Learning in Python",
    provider: "Coursera",
    icon: SiCoursera,
    color: "#0056D2",
    link: "https://drive.google.com/file/d/1oGPX2QN48P9VSdACxRIXUNeWYFOdmFct/view?usp=sharing",
    year: 2025,
    description: "Hands-on machine learning using Python"
  },
  {
    title: "Oracle OCI Data Science Professional",
    provider: "Oracle",
    icon: SiOracle,
    color: "#F80000",
    link: "https://drive.google.com/file/d/1G1LONmntI9R338BRQb-fikDHeLD75EAp/view?usp=sharing",
    year: 2025,
    description: "Data science workflows on Oracle Cloud Infrastructure"
  },
  {
    title: "AWS Technical Essentials",
    provider: "Amazon Web Services",
    icon: SiAmazonwebservices,
    color: "#FF9900",
    link: "https://drive.google.com/file/d/15X-DdfwqxuIUoy5V5b5rbC0IWnYnpIkW/view?usp=sharing",
    year: 2025,
    description: "Core AWS services and cloud fundamentals"
  },
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    icon: Award,
    color: "#22C55E",
    link: "https://drive.google.com/file/d/1gaXdIq5K9KuCDHc8ikXrPNXHuujQQOSq/view?usp=sharing",
    year: 2025,
    description: "Cloud architecture, virtualization, service models, and distributed systems"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My industry experience and notable achievements in academics and competitions
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Industry Experience
          </motion.h3>
          
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            {exp.role}
                          </h4>
                          <p className="text-lg text-primary font-medium mb-2">
                            {exp.organization}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="inline-flex items-center px-4 py-1.5 rounded-full
                            bg-primary/10 text-primary
                            text-sm font-semibold
                            border border-primary/30">
                            Industry Program
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="text-md font-semibold text-foreground mb-3">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-md font-semibold text-foreground mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Report Link */}
                      {exp.reportLink && (
                        <div className="mt-6">
                          <a
                            href={exp.reportLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                          >
                            <FileText className="w-4 h-4" />
                            View Report
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Achievements
          </h3>

          {/* FORCE 3 IN ONE ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
            
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <Card className="p-6 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 h-full text-center">

                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
              
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h4>
              
                    <p className="text-primary font-medium mb-2">
                      {item.organizer}
                    </p>
              
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
              
                    <span className="text-xs font-semibold text-muted-foreground">
                      {item.year}
                    </span>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* Certifications */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
          
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card className="relative p-6 bg-card border-border transition-all duration-300 h-full">
            
                  {/* Link Icon */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Certificate"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
            
                  <div className="flex items-start gap-5">
                    {/* Provider Icon */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <Icon
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: cert.color }}
                      />
                    </div>
            
                    {/* Text */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {cert.title}
                      </h4>
            
                      <p className="text-primary font-medium">
                        {cert.provider}
                      </p>
            
                      <p className="text-sm text-muted-foreground mb-2">
                        {cert.description}
                      </p>
            
                      <span className="inline-block text-xs font-semibold text-muted-foreground">
                        {cert.year}
                      </span>
                    </div>
                  </div>
            
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `0 0 30px ${cert.color}55` }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div> {/* Certifications end */}
    </div>
  {/* max-w-7xl */}
    </section>
  );
}