import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white scroll-smooth overflow-hidden">

      {/* FONDO PREMIUM */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute top-96 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <div className="pt-24 relative z-10">

        <Header />

        <About />

        <Skills />

        <Experience />

        <Work />

        <Projects />

        <Contact />

        <Footer />

      </div>

    </div>
  )
}

export default App