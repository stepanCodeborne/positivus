import IntroText from "../../components/button/intro-text/IntroText";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className="section-content-container">
      <div className="section-content">
        <IntroText sectionTitle="Services" descriptionMaxWidth="580px">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </IntroText>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
