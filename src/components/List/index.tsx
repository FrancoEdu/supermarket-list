import { use, useState } from 'react';
import styles from './list.module.scss'

export default function List(){

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [productList, setProductList] = useState([])

    function handleCreteProduct(){
        const produto = {
            id: Math.random(),
            name: name,
            quantity: quantity,
            price: price,
        }
    }

    return(
        <>
            <header className={styles.title}>
                <strong>Produto</strong>
                <strong>Quantidade</strong>
                <strong>Valor</strong>
            </header>
            <main className={styles.main}>
                <div className={styles.inputs}>
                    <input type="text" placeholder='Ex: Banana' value={name} onChange={event => setName(event.target.value)}/>
                    <input type="number" placeholder='Ex: 7' value={quantity} onChange={event => setQuantity(Number(event.target.value))}/>
                    <input type="number" placeholder='Ex: 5' value={price} onChange={event => setPrice(Number(event.target.value))}/>
                </div>
            </main>
            <footer className={styles.footer}>
                <button onClick={handleCreteProduct}>
                    Adicionar novo item
                </button>
                <div className={styles.totalFooter}>
                    <p>Total: </p>
                    <strong>
                        {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                        }).format(0)}
                    </strong>
                </div>
            </footer>
        </>
    )
}