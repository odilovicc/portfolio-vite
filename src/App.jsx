import "./assets/styles/App.css";
import Menu from "./assets/components/Navbar/Menu";
import Hero from "./assets/components/Hero/Hero";
import Skills from "./assets/components/Skills/skills";
import About from "./assets/components/About/About";
function App() {
  return (
    <div>
      <Menu></Menu>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
    </div>
  );
}

export default App;
