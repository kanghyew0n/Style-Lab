import { Card } from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/style.module.scss";

export default function Home() {
    return (
        <div className={styles.Container}>
            <Header />
            <div className={styles.searchContainer}>
              <input placeholder="search!"/>
            </div>
            <div className={styles.cardList}>
                <Card />
            </div>
        </div>
    );
}
