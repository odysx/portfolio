import { StatusBar } from "@/components/status-bar";
import { ControlCenter } from "@/components/control-center";
import { Work, About, Services, Contact, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <span id="top" />
      <StatusBar />
      <main>
        <ControlCenter />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
