import styles from "./intro-text.module.css";

export default function IntroText({
  sectionTitle,
  descriptionMaxWidth,
  children,
}) {
  return (
    <div className={styles.introText}>
      <h2 className="heading-bg brand-green">{sectionTitle}</h2>
      <p style={{ maxWidth: descriptionMaxWidth }}>{children}</p>
    </div>
  );
}
