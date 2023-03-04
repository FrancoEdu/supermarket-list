import { useEffect, useState } from 'react';
import styles from './list.module.scss'

interface Products{
    id:number
    name:string
    quantity:number
    price:number
}

export default function List() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState<Products[]>([]);
  
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);
  
    function handleCreateProduct() {
        const newProduct = {
            id: Math.random(),
            name: name,
            quantity: quantity,
            price: Number(price.replace(',', '.')), // substitui a vírgula por ponto para garantir que o número seja interpretado corretamente
        };
  
        const newProducts = [...products, newProduct];
        localStorage.setItem('products', JSON.stringify(newProducts));
    
        setName('');
        setQuantity(0);
        setPrice('');
        window.location.reload();
    }
    
    function handleDeleteProduct(id: number){
        const filteredProduct = products.filter(products => products.id !== id)
        setProducts(filteredProduct)
    }

    function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value.replace(',', '.'); // substitui a vírgula por ponto para garantir que o número seja interpretado corretamente
        const validValue = /^[0-9]*\.?[0-9]*$/.test(newValue) ? newValue : price; // valida se o novo valor é um número válido e, se não for, mantém o valor anterior
        setPrice(validValue);
    }

    return(
        <>
            <main className={styles.main}>
                <table>
                    <thead>
                        <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <button onClick={() => handleDeleteProduct(product.id)}>
                                    🗑
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <footer className={styles.footer}>
                <div className={styles.inputs}>
                    <input type="text" placeholder='Ex: Banana' value={name} onChange={event => setName(event.target.value)}/>
                    <input type="number" placeholder='Ex: 7' value={quantity} onChange={event => setQuantity(Number(event.target.value))}/>
                    <input type="text" placeholder='Ex: 5' value={price} onChange={handlePriceChange} />
                </div>
                <button onClick={handleCreateProduct}>
                    Adicionar novo item
                </button>
                <div className={styles.totalFooter}>
                    <p>Total: </p>
                    <strong>
                        {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                        }).format(products.reduce((acc, product) => acc + product.price * product.quantity, 0))}
                    </strong>
                </div>
            </footer>
        </>
    )
}