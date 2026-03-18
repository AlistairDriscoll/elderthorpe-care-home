import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
    console.log("Home is rendering")
    return (
        <>
            <Hero />
            <About />
        </>
    );
}
