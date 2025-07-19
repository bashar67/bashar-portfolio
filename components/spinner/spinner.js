import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" className={styles.track} />
        <circle cx="25" cy="25" r="20" fill="none" className={styles.path} />
      </svg>
    </div>
  );
};

export default Spinner;
