import ofimaticaCert from "../assets/certificados/ofimatica.pdf"
import ensamblajeCert from "../assets/certificados/ensamblaje.pdf"
import basedatosCert from "../assets/certificados/basedatos.pdf"
import { motion } from "framer-motion"
function Projects() {

  const projects = [
  {
    title: "Certificación en Ofimática",
    description:
      "Capacitación profesional en herramientas de productividad y gestión documental.",
    certificate: ofimaticaCert,
  },

  {
    title: "Ensamblaje de Computadoras",
    description:
      "Formación técnica en ensamblaje, mantenimiento y diagnóstico de hardware.",
    certificate: ensamblajeCert,
  },

  {
    title: "Base de Datos",
    description:
      "Capacitación en diseño, administración y gestión de bases de datos.",
    certificate: basedatosCert,
  },

  {
    title: "Portafolio Web Profesional",
    description:
      "Proyecto personal desarrollado, Tailwind,CSS y Docker.",
    certificate: "all",
  },
]
  return (
    <motion.section
  id="projects"
  className="max-w-6xl mx-auto p-10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }} >

      <h2 className="text-4xl font-bold mb-10">
        CERTIFICADOS
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <motion.div
             key={index}
               whileHover={{ scale: 1.05 }}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="
                  bg-white/5
                  backdrop-blur-lg
                  rounded-2xl
                  p-8
                  shadow-2xl
                  hover:scale-105
                  transition
                  duration-300
                  border
                  border-white/10">

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 leading-7">
              {project.description}
            </p>

       {
              project.certificate === "all" ? (

                <button
                  onClick={() => {
                    window.open(ofimaticaCert)
                    window.open(ensamblajeCert)
                    window.open(basedatosCert)
                  }}
                  className="
                    mt-6
                    inline-block
                    bg-purple-600
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-purple-700
                    transition
                  "
                >
                  Ver Todos los Certificados
                </button>

              ) : (

                <a
                  href={project.certificate}
                  target="_blank"
                  className="
                    mt-6
                    inline-block
                    bg-blue-600
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-blue-700
                    transition
                  "
                >
                  Ver Certificado
                </a>

              )
            }

          </motion.div>
        ))}

      </div>

    </motion.section>
  )
}

export default Projects