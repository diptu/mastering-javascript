import Navbar from "./layout/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Testimonial from "@/sections/Testimonial"
import Contact from "@/sections/Contact"




function App() {

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <h1 class="text-3xl font-bold underline">Hello World !</h1>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Testimonial />
          <Contact />

        </main>
      </div>
    </>
  )
}

export default App
