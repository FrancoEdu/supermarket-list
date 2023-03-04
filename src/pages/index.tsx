import Head from "next/head";
import styles from './home.module.scss'
import List from "@/components/List";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>Supermarket List</title>
      </Head>
      <div className={styles.toBuyList}>
        <header className={styles.headerOfList}>
          <h1><span>.</span>SUPERMARKET <span>List</span></h1>
        </header>
        <main className={styles.mainOfList}>
          <List />
        </main>
      </div>
    </>
  )
}
