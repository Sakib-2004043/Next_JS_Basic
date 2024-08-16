import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <br/>
      <div className="list-div">
        <ol>
          <li><Link href="/home">Home</Link></li>
          <br/>
          <li><Link href="/components">components</Link></li>
          <br/>
          <li><Link href="/contact">Contact</Link></li>
            <ul>
              <li><Link href="contact/student">Student</Link></li>
              <li><Link href="contact/employee">Employee</Link></li>
            </ul>
          <br/>
          <li><Link href="/about">About</Link></li>
          <br/>
        </ol>
      </div>
      
    </main>
  );
}
