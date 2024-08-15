"use client"
import styles from "./page.module.css";
import EventsFunctionsState from "@/components/EventsFunctionsState";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next JS Basic</h1>
      <hr/>
      <EventsFunctionsState/>
    </main>
  );
}
