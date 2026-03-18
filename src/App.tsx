import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

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
                    </Routes>
                </main>
            <Footer />
        </div>
    );
}
