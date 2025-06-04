"use client";
import React from "react";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectsPage() {
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "WhatsApp Clone",
      description: "Real-time chat application with user authentication, message storage, and real-time updates.",
      image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web",
      technologies: ["React", "Socket.IO", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Fully featured shopping app with cart functionality, authentication flow, and checkout process.",
      image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web",
      technologies: ["React", "Redux", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Medical Diagnostic App",
      description: "Mobile application for medical diagnostics with appointment scheduling and test results tracking.",
      image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Property Management Platform",
      description: "SaaS platform for property management with tenant management, maintenance requests, and payment processing.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web",
      technologies: ["React", "Next.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },


  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="pb-16 pt-24 md:pb-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my work"
        />

        <div className="mt-8 flex justify-center">
          <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="web" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="mobile" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}