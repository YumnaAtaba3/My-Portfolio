import React, { useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Project, projects } from "@/data/projects";
import { Stat, stats } from "@/data/stats";

// ================= Animations =================
const transition: Transition = { duration: 0.6, ease: "easeOut" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: i * 0.15 },
  }),
};

// ================= ProjectCard =================
const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `${import.meta.env.BASE_URL}${project.image}`;

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.03}
      transitionSpeed={250}
    >
      <motion.div
        className="glass-card rounded-3xl overflow-hidden group bg-gradient-to-br
                   from-blue-500/10 via-purple-500/10 to-transparent border border-white/10 shadow-xl"
        custom={index}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md">
              {project.category === "web" ? "Web App" : "Mobile App"}
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Title & Links */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 circle-primary flex items-center justify-center hover-glow transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 circle-secondary flex items-center justify-center hover-glow transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{project.role}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

// ================= ProjectFilters =================
const ProjectFilters: React.FC<{
  filters: { id: string; label: string }[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ filters, activeFilter, setActiveFilter }) => (
  <motion.div
    className="flex flex-wrap justify-center gap-4 mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {filters.map((filter) => (
      <button
        key={filter.id}
        onClick={() => setActiveFilter(filter.id)}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
          activeFilter === filter.id
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
            : "glass-card text-foreground hover-lift"
        }`}
      >
        <Filter className="w-4 h-4" />
        {filter.label}
      </button>
    ))}
  </motion.div>
);

// ================= ProjectStats =================
const ProjectStats: React.FC<{ stats?: Stat[] }> = ({ stats = [] }) => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        className="text-center glass-card p-6 rounded-2xl hover-scale"
        custom={index}
        variants={fadeUp}
      >
        <div className="text-3xl font-bold gradient-text mb-2">
          {stat.value}
        </div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </motion.div>
    ))}
  </motion.div>
);

// ================= Main Component =================
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-spacing bg-surface relative overflow-hidden"
    >
      {/* Floating gradient orbs for subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-display gradient-text mb-6">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring web and mobile applications
            built with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Filters */}
        <ProjectFilters
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats */}
        <ProjectStats stats={stats} />
      </div>
    </section>
  );
};

export default Projects;
