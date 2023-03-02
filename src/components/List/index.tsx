import Products from '../Products'
import styles from './list.module.scss'

export default function List(){
    return(
        <>
            <header className={styles.title}>
                <strong>Produto</strong>
                <strong>Quantidade</strong>
                <strong>Valor</strong>
            </header>
            <main className={styles.main}>
                <Products />
            </main>
            <footer className={styles.footer}>
                <button >
                    Adicionar novo item
                </button>
            </footer>
        </>
    )
}