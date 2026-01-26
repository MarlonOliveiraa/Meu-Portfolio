  import { motion } from 'framer-motion';
  import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
  import { useState, useEffect } from 'react';

import saasDashboard from '@/assets/projects/lp-baikal.png';
import ecommerce from '@/assets/projects/lp-baikal2.png';
import mobileApp from '@/assets/projects/lp-baikal3.png';
import filaZeroImg from '@/assets/projects/fila-zero.png';
import veccelioImg from '@/assets/projects/veccelio.png';
import flowManagerImg from '@/assets/projects/flowmanager.png';

  interface Project {
    title: string;
    description: string;
    technologies: string[];
    role: string;
    images: string[];
  }

  const projects: Project[] = [
  {
    title: "Landing Page – Baikal",
    description:
      "Landing page desenvolvida com foco em conversão de leads e ativação de trial do sistema Baikal. Atuei no backend em Ruby on Rails, implementando o fluxo de cadastro, validação dos dados e persistência das informações, além da integração com o Zoho CRM.",
    technologies: ["React", "Ruby on Rails", "API REST", "Zoho CRM"],
    role: "Desenvolvedor Backend",
    images: [saasDashboard, mobileApp, ecommerce]
  },
  {
    title: "Fila Zero",
    description:
      "Sistema de gestão de filas que permite ao usuário retirar senhas online, otimizando o atendimento e reduzindo filas físicas em estabelecimentos.",
    technologies: ["React Native", "PHP", "MySQL"],
    role: "Desenvolvedor Full Stack",
    images: [filaZeroImg]
  },
  {
    title: "Veccelio - Hospital São Julião",
    description:
      "Protótipo de sistema interno para gestão de processos hospitalares, desenvolvido no Figma com foco em melhorar o fluxo de atendimento e o registro de pacientes.",
    technologies: ["Figma", "Prototype"],
    role: "UX/UI Designer",
    images: [veccelioImg]
  },
  {
    title: "FlowManager",
    description:
      "Sistema de gestão para pequenos negócios, criado para auxiliar no controle de vendas, finanças e tarefas operacionais de forma centralizada.",
    technologies: ["React", "TypeScript", "PHP", "MySQL"],
    role: "Desenvolvedor Full Stack",
    images: [flowManagerImg]
  }
];

  const ExpandableDescription = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const previewLength = 110;
  const isLong = text.length > previewLength;

  return (
    <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
      {expanded || !isLong ? text : `${text.slice(0, previewLength)}... `}
      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="ml-1 text-primary font-medium hover:underline transition-colors"
        >
          {expanded ? 'Ler menos' : 'Ler mais'}
        </button>
      )}
    </p>
  );
};

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [activeImage, setActiveImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (isHovered) return;

      const interval = setInterval(() => {
        setActiveImage((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }, [isHovered, project.images.length]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative card-elevated rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/30"
      >
        {/* Image */}
        <div className="relative h-56 lg:h-64 overflow-hidden">
          <img
            src={project.images[activeImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-background/60 group-hover:bg-background/80 transition-colors duration-300" />

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

          {/* Carousel indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeImage ? 'bg-primary scale-125' : 'bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              <ExpandableDescription text={project.description} />
            </div>

            <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium text-primary/90 bg-primary/10 rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              {project.role}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };


  const Projects = () => {
    return (
      <section id="projetos" className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Projetos
            </h2>
            <p className="text-muted-foreground font-light">
              Seleção de trabalhos que demonstram versatilidade e atenção aos detalhes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Projects;
