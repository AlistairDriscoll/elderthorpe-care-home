import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header />
            <main>
                <Hero />
                <About />
            </main>
            <Footer />
        </div>
    );
}
