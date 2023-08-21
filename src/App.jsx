import "./assets/styles/App.css";
import Menu from "./assets/components/Navbar/Menu";
import Hero from "./assets/components/Hero/Hero";
function App() {
  return (
    <div>
      <Menu></Menu>
      <div className="defaultRazmetka">
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
