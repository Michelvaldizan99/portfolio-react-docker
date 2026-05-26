import { motion } from "framer-motion"
import perfil from "../assets/perfil.jpg"
function Navbar() {
  return (

    <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}>      
  
  <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <div className="relative">

  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-70"></div>

        <img
           src={perfil}
            alt="Logo"
            className="relative w-16 h-16 rounded-full object-cover border border-white/20 hover:scale-110 transition duration-300 shadow-2xl"
        />
  </div>

        <motion.div
             className="flex gap-6 text-sm md:text-base"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}>

          <a
            href="#about"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            Sobre Mí
          </a>

          <a
            href="#skills"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            Habilidades
          </a>

          <a
            href="#experience"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            Experiencia
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            Contacto
          </a>

        </motion.div>

      </div>

    </motion.nav>
  )
}

export default Navbar