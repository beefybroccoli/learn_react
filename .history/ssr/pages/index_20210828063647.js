import styles from "./index.module.css";
import Card from "./Card";

export default () => {

    return(
        <div className={styles.app}>
            <header className={styles.header}>
                <img className={styles.logo}src="/logo.png"/>
            </header>
            <h1>Home Page</h1>
        </div>
    );

}
