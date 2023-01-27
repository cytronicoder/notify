import styles from "@/styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__container}>
        <span className={styles.loading__loader}></span>
        <span className={styles.loader__text}>Loading...</span>
      </div>
    </div>
  );
}
