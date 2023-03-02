import Head from "next/head";
import styles from './home.module.scss'
import carrinhoImg from '../pages/images/carrinho.png'
import List from "@/components/List";

export default function Home() {
  return (
    <>
      <Head>
        <title>Supermarket List</title>
      </Head>
      <div className={styles.toBuyList}>
        <header className={styles.headerOfList}>
          <h1><span>.</span>SUPERMARKET <span>List</span></h1>
        </header>
        <main className={styles.mainOfList}>
          <List />
        </main>
        <footer className={styles.footerOfList}>
          <p>Total: </p>
          <strong>
            {new Intl.NumberFormat('pt-BR',{
              style: 'currency',
              currency: 'BRL'
            }).format(0)}
          </strong>
        </footer>
      </div>
    </>
  )
}
