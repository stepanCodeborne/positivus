import styles from "./contact-offer.module.css";
import SectionContent from "../../components/section-content/SectionContent";

export default function ContactOffer() {
  return (
    <section id="contact-offer" className="section-content-container">
      <SectionContent className={styles.content}></SectionContent>
    </section>
  );
}
