import styles from "./button.module.css";

export default function Button({
  isFilled = false,
  className = "",
  onClick,
  type = "button",
  children,
}) {
  return (
    <button
      className={`${className} ${styles.button} ${
        isFilled ? styles.filled : ""
      }`}
      type={type}
    >
      <a href="#">{children}</a>
    </button>
  );
}
