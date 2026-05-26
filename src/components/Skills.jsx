import { motion } from "framer-motion"
function Skills() {

  const skills = [
  
    "Docker",
    "Linux",
    "JavaScript",
    "GitHub",
    "CSS",
    "HTML",
    "Ciberseguridad",
  ]

  return (
    <motion.section
  id="skills"
  className="max-w-6xl mx-auto p-10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }} >

      <h2 className="text-4xl font-bold mb-8">
        Habilidades
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill) => (
          <motion.div
          key={skill}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }} >
            {skill}
          </motion.div>
        ))}

      </div>

    </motion.section>
  )
}

export default Skills