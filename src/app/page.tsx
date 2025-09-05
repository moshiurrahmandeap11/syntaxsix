import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-100 top-0 z-50 sticky shadow-md">
        <Navbar></Navbar>
      </nav>
      <main>
        <Hero></Hero>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
