import styles from './CardSimple.module.css'


const CardSimple = (props) =>{
    return(
        
            <div className={styles.cardContainer}>
                <img src = {props.img} alt='first' />
                <div className={styles.cardBody}>
                    <h2>{props.title}</h2>
                    <p>{props.price}</p>
                    <p>{props.desc}</p>
                    <div className={styles.cardBtn}>
                        <button>Adicionar ao Carrinho</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        
    )
}

export default CardSimple