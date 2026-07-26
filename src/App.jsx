import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
