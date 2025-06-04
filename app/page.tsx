"use client";
import km from "./image/komal.jpg"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Github, LinkedinIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pb-16 pt-24 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">Hi, I'm </span>
                <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mt-1">
                  Komal Kshirsagar
                </span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                MERN Stack Developer crafting beautiful web experiences
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted">
                <Image
                  src={km}
                  alt="Komal Kshirsagar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full bg-background p-3 shadow-lg">
                <div className="rounded-full bg-primary p-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-foreground"
                    >
                      <path d="M12 19h.01" />
                      <path d="M16 17a4 4 0 0 0-8 0" />
                      <rect width="16" height="10" x="4" y="5" rx="2" />
                      <path d="M8 15v1" />
                      <path d="M16 15v1" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <SectionHeading title="About Me" subtitle="Get to know me better" />

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                I'm a <strong>MERN Stack Developer</strong> with a passion for building modern,
                responsive web applications. With expertise in JavaScript, React, Node.js, and
                related technologies, I create intuitive and visually appealing user interfaces.
              </p>
              <p className="mt-4 text-lg">
                Currently working at <strong>Matic UI</strong>, I've contributed to various
                projects including a Medical Diagnostic App and a SaaS Property Management Platform.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/about">
                    More About Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col items-center rounded-lg bg-background p-4 shadow-sm">
                <span className="text-3xl font-bold text-primary">1+</span>
                <span className="mt-2 text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-background p-4 shadow-sm">
                <span className="text-3xl font-bold text-primary">16+</span>
                <span className="mt-2 text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-background p-4 shadow-sm">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="mt-2 text-sm text-muted-foreground">Technologies</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-background p-4 shadow-sm">
                <span className="text-3xl font-bold text-primary">5+</span>
                <span className="mt-2 text-sm text-muted-foreground">Happy Clients</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="WhatsApp Clone"
                  width={600}
                  height={340}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">WhatsApp Clone</h3>
                <p className="mt-2 text-muted-foreground">
                  Real-time chat application built with React and Socket.IO with user authentication
                  and message storage.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Socket.IO
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Express
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    MongoDB
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Button size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="E-Commerce Platform"
                  width={600}
                  height={340}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
                <p className="mt-2 text-muted-foreground">
                  Fully featured shopping app with cart functionality, authentication flow, and checkout process.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Redux
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Node.js
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Express
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Button size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {[
                "JavaScript", "React", "Node.js", "Express", "MongoDB",
                "HTML", "CSS", "TypeScript", "Next.js", "Redux"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex h-24 items-center justify-center rounded-lg bg-background p-4 shadow-sm"
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/skills">
                  View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg bg-gradient-to-r from-primary/90 to-blue-500/90 p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-2xl font-bold md:text-3xl">Ready to Work Together?</h2>
            <p className="mt-4 text-lg opacity-90">
              Let's discuss your project and see how I can help bring your ideas to life.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}