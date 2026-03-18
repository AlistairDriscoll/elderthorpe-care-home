import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

export default function Home() {
    console.log("Home is rendering")
    return (
        <>
            <Hero />
            <AboutSection />
        </>
    );
}
