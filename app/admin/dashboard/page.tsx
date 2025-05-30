"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function AdminDashboardPage() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Sample projects data
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "WhatsApp Clone",
      description: "Real-time chat application with user authentication, message storage, and real-time updates.",
      category: "web",
      technologies: ["React", "Socket.IO", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Fully featured shopping app with cart functionality, authentication flow, and checkout process.",
      category: "web",
      technologies: ["React", "Redux", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Medical Diagnostic App",
      description: "Mobile application for medical diagnostics with appointment scheduling and test results tracking.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]);

  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleDeleteProject = (project: Project) => {
    setSelectedProject(project);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedProject) {
      setProjects(projects.filter(p => p.id !== selectedProject.id));
      toast({
        title: "Project deleted",
        description: `"${selectedProject.title}" has been deleted.`,
      });
      setIsDeleteDialogOpen(false);
    }
  };

  const handleAddProject = () => {
    setSelectedProject(null);
    setIsDialogOpen(true);
  };

  const saveProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const newProject = {
      id: selectedProject ? selectedProject.id : Date.now(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      technologies: (formData.get("technologies") as string).split(",").map(t => t.trim()),
      liveUrl: formData.get("liveUrl") as string,
      githubUrl: formData.get("githubUrl") as string,
    };
    
    if (selectedProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === selectedProject.id ? newProject : p));
      toast({
        title: "Project updated",
        description: `"${newProject.title}" has been updated.`,
      });
    } else {
      // Add new project
      setProjects([...projects, newProject]);
      toast({
        title: "Project added",
        description: `"${newProject.title}" has been added.`,
      });
    }
    
    setIsDialogOpen(false);
  };

  return (
    <div className="pb-16 pt-24 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading
            title="Admin Dashboard"
            subtitle="Manage your portfolio content"
            className="mb-0"
          />
          <Button onClick={handleAddProject} className="mt-4 sm:mt-0">
            <Plus className="mr-2 h-4 w-4" /> Add Project
          </Button>
        </div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Technologies</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{project.category}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEditProject(project)}>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDeleteProject(project)}
                                className="text-destructive focus:text-destructive"
                              >
                                <Trash className="mr-2 h-4 w-4" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Add/Edit Project Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>
                {selectedProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
              <DialogDescription>
                {selectedProject 
                  ? "Update the project information below."
                  : "Fill in the details for the new project."
                }
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={saveProject} className="space-y-4">
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={selectedProject?.title || ""}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    defaultValue={selectedProject?.description || ""}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    name="category"
                    defaultValue={selectedProject?.category || "web"}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="technologies">
                    Technologies (comma separated)
                  </Label>
                  <Input
                    id="technologies"
                    name="technologies"
                    defaultValue={selectedProject?.technologies.join(", ") || ""}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="liveUrl">Live URL</Label>
                  <Input
                    id="liveUrl"
                    name="liveUrl"
                    defaultValue={selectedProject?.liveUrl || "#"}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="githubUrl">GitHub URL</Label>
                  <Input
                    id="githubUrl"
                    name="githubUrl"
                    defaultValue={selectedProject?.githubUrl || "#"}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {selectedProject ? "Save Changes" : "Add Project"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this project? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 rounded-md bg-destructive/10 p-4">
              <p className="font-medium text-destructive">
                {selectedProject?.title}
              </p>
            </div>
            <DialogFooter className="mt-4">
              <Button 
                variant="outline" 
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmDelete}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}