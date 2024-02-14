import { Header } from "../../components/Header/Header";
import Hero from "./Hero/Hero";
import ImportantThing from "./ImportantThing/ImportantThing";
import Universe from "./Universe/Universe";

export default function Home() {
  return (
  <main className="home">
    <Hero />
    <Universe />
    <ImportantThing />
  </main>
  );
}
