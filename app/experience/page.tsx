"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, Calendar } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export default function ExperiencePage() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "MERN Stack Developer",
      company: "Matic UI",
      period: "Feb 2024 - Present",
      description: "Working on various web applications including a Medical Diagnostic App and a SaaS Property Management Platform.",
      responsibilities: [
        "Developed a responsive Medical Diagnostic App using React and Node.js",
        "Contributed to a SaaS Property Management Platform with user authentication and dashboard",
        "Created custom animated loaders and transitions using Framer Motion",
        "Implemented responsive design patterns for cross-device compatibility",
        "Collaborated with design and backend teams to deliver features on schedule"
      ]
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Tech Solutions",
      period: "Jul 2023 - Jan 2024",
      description: "Worked on frontend development and UI implementation for various client projects.",
      responsibilities: [
        "Built responsive user interfaces using React.js and Tailwind CSS",
        "Implemented state management solutions using Redux",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Participated in code reviews and implemented feedback",
        "Assisted in optimizing application performance"
      ]
    },
    {
      id: 3,
      role: "Web Development Freelancer",
      company: "Self-employed",
      period: "Jan 2023 - Jul 2023",
      description: "Worked with various clients to deliver web solutions for their businesses.",
      responsibilities: [
        "Developed custom websites for small businesses and entrepreneurs",
        "Created responsive layouts compatible with all modern browsers",
        "Implemented SEO best practices for better search engine visibility",
        "Maintained ongoing relationships with clients for updates and maintenance",
        "Managed multiple projects simultaneously while meeting deadlines"
      ]
    }
  ];

  return (
    <div className="pb-16 pt-24 md:pb-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
        />

        <div className="mt-12 space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 bg-primary/10 p-6 md:w-64 flex flex-col items-center justify-center text-center">
                      <div className="rounded-full bg-primary/20 p-3 mb-3">
                        <BriefcaseIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{experience.role}</h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-muted-foreground">{experience.description}</p>
                      <h4 className="font-medium mt-4 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {experience.responsibilities.map((responsibility, rIndex) => (
                          <motion.li
                            key={rIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + rIndex * 0.05 }}
                            className="flex items-start"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Master of Computer Applications (MCA)</h4>
                    <p className="text-muted-foreground">
                      Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
                    </p>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>2020 - 2023</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Science (BSc)</h4>
                    <p className="text-muted-foreground">
                      Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
                    </p>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>2017 - 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}