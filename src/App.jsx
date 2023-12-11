import { BrowserRouter } from "react-router-dom";
import { About, Work, Tech, Navbar, Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <article className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-[90vh]'>
          {/* 
            relative. Esto significa que el elemento se posicionará relativo a su posición normal en el flujo del documento 
            z-index: 0. Esto significa que el elemento se posicionará detrás de todos los elementos que no tengan un valor z-index o que tengan un valor z-index menor.
          */}
          <Navbar />
          <Hero />
        </article>
        <About />
        <Work />
        <Tech />
      </div>
    </BrowserRouter>
  )
}

export default App
