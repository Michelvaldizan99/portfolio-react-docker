import { motion } from "framer-motion"
import constancia from "../assets/Constancia.pdf"
function Work() {
  return (

    <motion.section
      className="max-w-6xl mx-auto p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <h2 className="text-4xl font-bold mb-10">
        Experiencia Laboral
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          bg-white/5
          backdrop-blur-lg
          p-8
          rounded-2xl
          border
          border-white/10
          shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold mb-4">
          Constancia de Trabajo
        </h3>

        <p className="text-gray-300 leading-7">
          Documento que acredita experiencia laboral y participación profesional.
        </p>

        <a
          href={constancia}
          target="_blank"
          className="
            mt-6
            inline-block
            bg-green-600
            px-5
            py-3
            rounded-xl
            hover:bg-green-700
            transition
          "
        >
          Ver Constancia
        </a>

      </motion.div>

    </motion.section>
  )
}

export default Work