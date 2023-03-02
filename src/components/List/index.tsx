import { useState } from 'react';
import styles from './list.module.scss'

export default function List(){

    function handleCreateNewProduct(){
        return(
            <div className={styles.inputs}>
                <input type="text" className={styles.inpProducts}/>
                <input type="number" className={styles.inpQuntity}/>
                <input type="number" className={styles.inpValue}/>
            </div>
        )
    }
    const newProductInputs = handleCreateNewProduct();
    
    return(
        <>
            <header className={styles.title}>
                <strong>Produto</strong>
                <strong>Quantidade</strong>
                <strong>Valor</strong>
            </header>
            <main className={styles.main}>
                {newProductInputs}
            </main>
            <footer className={styles.footer}>
                <button onClick={handleCreateNewProduct}>
                    Adicionar novo item
                </button>
            </footer>
        </>
    )
}