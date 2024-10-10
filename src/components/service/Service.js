import styles from "./service.module.css";

export default function Service({
  bgColor = "#f3f3f3",
  headingBgColorClass = "brand-green",
  className,
  imagePath,
  headingRows,
  learnMoreLink = "#",
}) {
  return (
    <div
      className={`${className} ${styles.service} ${
        bgColor === "var(--brand-dark)" ? styles.dark : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.text}>
        <div>
          {headingRows.map((row, id) => (
            <h3 className={`heading-bg ${headingBgColorClass}`} key={id}>
              {row}
            </h3>
          ))}
        </div>

        <a className={styles.serviceLink} href={learnMoreLink}>
          <span className={styles.arrow}>
            <img
              src={
                bgColor === "var(--brand-dark)"
                  ? "icons/white-dark-arrow.svg"
                  : "icons/dark-green-arrow.svg"
              }
              alt="arrow"
            />
          </span>
          Learn More
        </a>
      </div>

      <img src={imagePath} alt="service illustration" />
    </div>
  );
}
