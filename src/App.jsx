import { useState } from 'react';
import Topbar from "./components/topbar/Topbar.jsx"
import Intro from "./components/intro/Intro.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Work from "./components/work/Work.jsx"
import Testimonials from "./components/testimonials/Testimonials.jsx"
import Contact from "./components/contact/Contact.jsx"
import Menu from "./components/menu/Menu.jsx"

import Footer from "./components/footer/Footer.jsx"
import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Work />
          <Testimonials />
          <Contact />
        </div>
      <Footer />
    </div>
  );
}

export default App;
