import Button from "../../components/button/Button";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className="section-content-container">
      <div className={`section-content ${styles.content}`}>
        <a href="/">
          <img src="images/logo-dark.svg" alt="logo" />
        </a>

        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="#">
              About us
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Services
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Use Cases
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Blog
            </a>
          </li>
          <li>
            <Button type="button" className={styles.button}>
              Request a quote
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
