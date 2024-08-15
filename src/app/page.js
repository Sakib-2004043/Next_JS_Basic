import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next JS Basic</h1>
      <br/>
      <div className="list-div">
        <ol>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/components">components</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ol>
      </div>
      
    </main>
  );
}
