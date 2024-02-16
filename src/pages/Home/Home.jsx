import { Header } from "../../components/Header/Header";
import About from "./About/About";
import CTA from "./CTA/CTA";
import Hero from "./Hero/Hero";
import ImportantThing from "./ImportantThing/ImportantThing";
import Loving from "./Loving/Loving";
import Services from "./Services/Services";
import Universe from "./Universe/Universe";

export default function Home() {
  return (
  <main className="home">
    <Hero />
    <Universe />
    <ImportantThing />
    <Loving />
    <About />
    <Services />
    <CTA />
  </main>
  );
}
