import styles from "./index.module.css";
import Card from "./Card";
import data from "../data/data";
import { data } from ".";

export default () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.logo} src="/logo.png" />
      </header>
      <div className={styles.grid}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
