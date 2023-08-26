import "./assets/styles/App.css";
import Menu from "./assets/components/Navbar/Menu";
import Hero from "./assets/components/Hero/Hero";
import Skills from "./assets/components/Skills/skills";
import About from "./assets/components/About/About";
import Sidebar from "./assets/components/ui/Sidebar/Sidebar";
function App() {
  return (
    <div>
      <section className="fixed py-32 px-4 z-50 w-screen h-screen bg-white lg:hidden">
        <h1 className="text-black text-3xl my-10 text-center px-10 font-bold animate-fadeIn">
          App is not working for phones yet!
        </h1>
        <p className="text-2xl text-center animate-fadeIn text-black">In future, app will be presented for mobile devices!</p>
      </section>
      <div className="lg:block hidden">
        <Sidebar></Sidebar>
        <Menu></Menu>
        <Hero></Hero>
        <div className="lg:w-[90vw] w-[100vw]">
          <Skills></Skills>
          <About></About>
        </div>
      </div>
    </div>
  );
}

export default App;
