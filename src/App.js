import CaseStudies from "./sections/case-studies/CaseStudies";
import ContactOffer from "./sections/contact-offer/ContactOffer";
import Hero from "./sections/hero/Hero";
import NavBar from "./sections/navbar/NavBar";
import Services from "./sections/services/Srevices";
import WorkingProcess from "./sections/working-process/WorkingProcess";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <ContactOffer />
      <CaseStudies />
      <WorkingProcess />
    </>
  );
}
