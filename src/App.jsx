import "./assets/styles/App.css";
import Menu from "./assets/components/Navbar/Menu";
import Hero from "./assets/components/Hero/Hero";
import skills from './assets/components/Skills/skills'
function App() {
  return (
    <div>
      <Menu></Menu>
      <Hero></Hero>
      <skills></skills>
    </div>
  );
}

export default App;
