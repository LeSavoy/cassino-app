import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './assets/css/scrollBar.css'

function App() {
  return (
    <main className="bg-[#17181C] h-full ">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
