import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    name: "Email",
    href: "mailto:marlonsantanaoliveira2007@gmail.com",
    icon: Mail,
    label: "contato@exemplo.com"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marlon-oliveira-234929333",
    icon: Linkedin,
    label: "/in/marlonoliveira"
  },
  {
    name: "GitHub",
    href: "https://github.com/MarlonOliveiraa",
    icon: Github,
    label: "@seuusername"
  }
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Vamos construir algo?
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Sempre aberto a conversas sobre projetos interessantes, 
            colaborações ou apenas trocar ideias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="group flex items-center gap-3 px-6 py-4 card-elevated rounded-lg transition-all duration-300 hover:border-primary/30"
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                {link.name}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
