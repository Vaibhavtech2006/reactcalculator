import styles from "./Display.module.css";

const Display = ({ displayVal }) => {  // Destructure displayVal from props
  return (
    <input
      className={styles.display}
      type="text"
      value={displayVal}  // Use the correct prop here
      readOnly
    />
  );
};

export default Display;
