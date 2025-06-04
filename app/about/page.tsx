"use client";
import km from "./../image/komal.jpg"
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";
import React from "react";

import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="pb-16 pt-24 md:pb-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
              <Image
                // src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=800"
                src={km}
                alt="Komal Kshirsagar"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-full bg-background p-4 shadow-lg"
              >
                <div className="rounded-full bg-primary/10 p-6">
                  <User className="h-12 w-12 text-primary" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="bio" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bio">Bio</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
              <TabsContent value="bio" className="mt-6 space-y-4">
                <h3 className="text-2xl font-bold">Hello There!</h3>
                <p className="text-muted-foreground">
                  I&apos;m Komal Kshirsagar, a MERN Stack Developer based in Chhatrapati Sambhajinagar,
                  Maharashtra. With a strong foundation in web development, I specialize in creating
                  responsive and user-friendly web applications.
                </p>

                <p className="text-muted-foreground">
                  My journey in web development began during my MCA studies where I developed
                  a passion for creating elegant solutions to complex problems. Since then,
                  I&apos;ve worked on various projects ranging from e-commerce platforms to real-time
                  communication applications.
                </p>

                <p className="text-muted-foreground">
                  Currently working at Matic UI, I&apos;ve had the opportunity to work on cutting-edge
                  projects including a Medical Diagnostic App and a SaaS Property Management Platform.
                  I enjoy collaborating with teams and clients to deliver high-quality products that
                  exceed expectations.
                </p>

              </TabsContent>
              <TabsContent value="education" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">Master of Computer Applications (MCA)</h4>
                        <p className="text-muted-foreground">
                          Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">Bachelor of Science (BSc)</h4>
                        <p className="text-muted-foreground">
                          Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="personal" className="mt-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date of Birth</p>
                          <p className="font-medium">17 March</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium">Chhatrapati Sambhajinagar, Maharashtra</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">komalkshirasagar32009@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">+91-8080211162</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold">Languages</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        English
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Hindi
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Marathi
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}