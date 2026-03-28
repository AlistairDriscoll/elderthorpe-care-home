import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            <Footer />
        </div>
    );
}
