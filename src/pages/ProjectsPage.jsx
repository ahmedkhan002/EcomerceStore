import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button } from "@mui/material";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Database,
  Cpu,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce application with cart, payments, and authentication.",
    icon: <ShoppingCart className="w-10 h-10 text-blue-500" />,
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, blogs, and contact form with animations.",
    icon: <Globe className="w-10 h-10 text-green-500" />,
    link: "#",
  },
  {
    title: "Mobile App UI",
    description:
      "React Native app with smooth navigation, dark mode, and modern UI design.",
    icon: <Smartphone className="w-10 h-10 text-purple-500" />,
    link: "#",
  },
  {
    title: "Task Manager",
    description:
      "A task management system with drag-and-drop Kanban boards and user roles.",
    icon: <Cpu className="w-10 h-10 text-yellow-500" />,
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging app with Markdown editor, categories, likes, and comments.",
    icon: <Code2 className="w-10 h-10 text-red-500" />,
    link: "#",
  },
  {
    title: "Database Dashboard",
    description:
      "Admin dashboard with charts, analytics, and CRUD operations using MongoDB.",
    icon: <Database className="w-10 h-10 text-indigo-500" />,
    link: "#",
  },
];

const ProjectsPage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                {project.icon}
                <h2 className="text-lg font-semibold text-gray-700">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500">{project.description}</p>
                <button onClick={() => navigate('')} className="px-4 py-1 cursor-pointer rounded-lg text-blue-500 hover:bg-blue-400 hover:text-white border hover:-translate-y-2 hover:scale-120 duration-200">
                  View Project
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
