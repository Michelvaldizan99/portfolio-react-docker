import { motion } from "framer-motion"
function About() {
  return (
    <motion.section
  id="about"
  className="max-w-6xl mx-auto p-10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 2 }}
>

      <h2 className="text-4xl font-bold mb-6">
        Sobre Mí
      </h2>

      <p className="text-gray-300 text-lg leading-8">
        Soy un estudiante apasionado por el desarrollo web,
        Docker, Linux y tecnologías modernas frontend.
        Me especializo en crear interfaces modernas,
        aplicaciones responsivas y proyectos escalables.
      </p>

    </motion.section>
  )
}

export default About