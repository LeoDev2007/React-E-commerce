
import Detail from "./Detail.js";
import CardSimple2 from './CardSimple2.js';
import styles from './CatPro.module.css';

const CatPro = ({products, setProducts}) => {
    

    const filterProducts = (categoria) => {
        const update = Detail.productDetail.filter((product) => product.Cat === categoria)
        setProducts(update);
    }

    const resetProducts = () => {
        setProducts(Detail.productDetail);
    }


    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.filtro}>
                    <div className={styles.categorias}>
                        <h3>Categorias</h3>
                        <ul>
                            <li onClick={resetProducts}>Todos os Produtos</li>
                            <li onClick={() => filterProducts("Celular")}>Celulares</li>
                            <li onClick={() => filterProducts("Tablet")}>Tablets</li>
                            <li onClick={() => filterProducts("Notebook")}>Notebooks</li>
                            <li onClick={() => filterProducts("Fone")}>Fones de Ouvido</li>
                            <li onClick={() => filterProducts("Microfone")}>Microfones</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.productBox}>
                    <h2><span>Top</span> Produtos</h2>
                    <div className={styles.content}>
                        {products.map((item, index) => (
                            <CardSimple2 img={item.img} title={item.title} price={item.price} desc={item.desc} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatPro;