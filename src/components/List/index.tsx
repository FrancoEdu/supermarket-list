import { useEffect, useState } from 'react';
import styles from './list.module.scss'

interface Products{
    id:number
    name:string
    quantity:number
    price:number
}

export default function List() {
    const [name, setName] = useState(''); // State hook to store the name of a product
    const [quantity, setQuantity] = useState(0); // State hook to store the quantity of a product
    const [price, setPrice] = useState(''); // State hook to store the price of a product
    const [products, setProducts] = useState<Products[]>([]); // State hook to store an array of products
  
    useEffect(() => { // Effect hook to load products from localStorage when the component mountstem('products');
      const storedProducts = localStorage.getI 
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    }, []);
  
    function handleCreateProduct() {
      const newProduct = {
        id: Math.random(),
        name: name,
        quantity: quantity,
        price: Number(price.replace(',', '.')), //replaces the comma with a period to ensure the number is interpreted correctly
      };
  
      const newProducts = [...products, newProduct];
      localStorage.setItem('products', JSON.stringify(newProducts));
  
      setName('');
      setQuantity(0);
      setPrice('');
      window.location.reload();
    }
  

    function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value.replace(',', '.'); // replaces the comma with a period to ensure the number is interpreted correctly
        const validValue = /^[0-9]*\.?[0-9]*$/.test(newValue) ? newValue : price; //validates that the new value is a valid number, and if not, keeps the previous value
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