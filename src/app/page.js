import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <br/>
      <div className="list-div">
        <ol>
          <li><Link href="/home">Home (home)</Link></li>
          <br/>
          <li><Link href="/components">components (components)</Link></li>
          <br/>
          <li><Link href="/contact">Contact (contact)</Link></li>
            <ul>
              <li><Link href="contact/student">Student (DB) (contact/student)</Link></li>
              <li><Link href="contact/employee">Employee (contact/employee)</Link></li>
            </ul>
          <br/>
          <li><Link href="/userList">Users List (useList)</Link></li>
          <br/>
          <li><Link href="/css">CSS (css)</Link></li>
          <br/>
          <li><Link href="/image">Image Optimization (image)</Link></li>
          <br/>
          <li><Link href="/metadata">Dynamic Metadata (metadata)</Link></li>
          <br/>
          <li><Link href="/script">Script Component (script)</Link></li>
          <br/>
          <li><Link href="/font">Font Optimization (font)</Link></li>
          <br/>
          <li><Link href="/post">Post Route (post)</Link></li>
          <br/>
          <li><Link href="/upload">Upload Files (upload)</Link></li>
          <br/>
          <li><Link href="/ssg">Static Site Generation (ssg)</Link></li>
          <br/>
          <li><Link href="/loading">Loading Annimation (loading)</Link></li>
          <br/>
          <li><Link href="/about">About (about) // Blocked By Middleware</Link></li>
          <br/>
        </ol>
      </div>
      
    </main>
  );
}
