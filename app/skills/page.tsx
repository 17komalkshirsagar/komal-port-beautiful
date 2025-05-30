"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code, Database, Layout, Smartphone, Server } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 78 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Redux", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Jest", level: 78 },
        { name: "Webpack", level: 75 },
      ],
    },
  ];

  return (
    <div className="pb-16 pt-24 md:pb-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies I work with"
        />

        <div className="mt-12 grid gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
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
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <CardTitle>My Learning Approach</CardTitle>
              </div>
              <CardDescription>
                How I stay updated with the latest technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Continuous Learning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I regularly take online courses and follow industry blogs to stay updated with the latest trends and technologies.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Hands-On Projects</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I believe in learning by doing, so I frequently work on side projects to experiment with new technologies and frameworks.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Developer Community</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I actively participate in developer communities, attend meetups, and contribute to open-source projects when possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}