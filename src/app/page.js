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
              <li><Link href="contact/student">Student (DB)</Link></li>
              <li><Link href="contact/employee">Employee</Link></li>
            </ul>
          <br/>
          <li><Link href="/userList">Users List</Link></li>
          <br/>
          <li><Link href="/css">CSS</Link></li>
          <br/>
          <li><Link href="/image">Image Optimization</Link></li>
          <br/>
          <li><Link href="/metadata">Dynamic Metadata</Link></li>
          <br/>
          <li><Link href="/script">Script Component</Link></li>
          <br/>
          <li><Link href="/font">Font Optimization</Link></li>
          <br/>
          <li><Link href="/post">Post Route</Link></li>
          <br/>
          <li><Link href="/ssg">Static Site Generation</Link></li>
          <br/>
          <li><Link href="/loading">Loading Annimation</Link></li>
          <br/>
          <li><Link href="/about">About</Link></li>
          <br/>
        </ol>
      </div>
      
    </main>
  );
}
