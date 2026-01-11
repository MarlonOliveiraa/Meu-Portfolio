import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import saasDashboard from '@/assets/projects/saas-dashboard.jpg';
import ecommerce from '@/assets/projects/ecommerce.jpg';
import mobileApp from '@/assets/projects/mobile-app.jpg';
import analytics from '@/assets/projects/analytics.jpg';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Plataforma SaaS",
    description: "Sistema completo de gestão empresarial com dashboard analytics e automações inteligentes.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    role: "Lead Developer",
    image: saasDashboard
  },
  {
    title: "E-commerce Premium",
    description: "Loja virtual de alta conversão com experiência de compra fluida e checkout otimizado.",
    technologies: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    role: "Full Stack Developer",
    image: ecommerce
  },
  {
    title: "App de Produtividade",
    description: "Aplicativo mobile-first para gestão de tarefas com sincronização em tempo real.",
    technologies: ["React Native", "Firebase", "Redux"],
    role: "Frontend Developer",
    image: mobileApp
  },
  {
    title: "Dashboard Analytics",
    description: "Visualização de dados complexos com gráficos interativos e relatórios automatizados.",
    technologies: ["Vue.js", "D3.js", "Python", "AWS"],
    role: "Data Visualization",
    image: analytics
  }
];

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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative card-elevated rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/30"
            >
              {/* Project Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/80 transition-colors duration-300" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {project.description}
                  </p>

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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
