import styles from './products.module.scss'

export default function Products(){
    return(
        <>  
            <div className={styles.inputs}>
                <input type="text" className={styles.inpProducts}/>
                <input type="number" className={styles.inpQuntity}/>
                <input type="number" className={styles.inpValue}/>
            </div>
        </>
    )
}