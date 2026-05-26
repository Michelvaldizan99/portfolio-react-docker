import { motion } from "framer-motion"
function Experience() {

  const experiences = [
    {
      title: "Desarrollo Frontend",
      year: "2022 - 2026",
      description:
        "Creación de interfaces modernas utilizando React, Tailwind CSS y Vite.",
    },

    {
      title: "Docker (aprendiendo) y Linux",
      year: "2025 - 2026",
      description:
        "Administración de contenedores Docker y entornos Linux Ubuntu.",
    },

    {
      title: "Ciberseguridad",
      year: "2025 - 2026",
      description:
        "Implementación de prácticas de seguridad y monitoreo de sistemas.",
    },
  ]

  return (
    <motion.section
  id="experience"
  className="max-w-6xl mx-auto p-10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }} >

      <h2 className="text-4xl font-bold mb-10">
        Experiencia
      </h2>

      <div className="space-y-8">

        {experiences.map((exp, index) => (
          <motion.div
             key={index}
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }} >

            <h3 className="text-2xl font-bold">
              {exp.title}
            </h3>

            <p className="text-blue-400 mt-2">
              {exp.year}
            </p>

            <p className="text-gray-300 mt-4 leading-7">
              {exp.description}
            </p>

          </motion.div>
        ))}

      </div>

    </motion.section>
  )
}

export default Experience