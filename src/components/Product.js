import React, {useState} from "react"
import styles from './product.module.css'
import Search from "./Search"
import CatPro from '../components/CatPro'
import Footer from "./Footer"
import Detail from "./Detail"

  const Product = () => {

  const [products, setProducts] = useState(Detail.productDetail)
  const searchbtn = (products) =>{
    const change = Detail.productDetail.filter((x) =>{
      if (searchbtn === 'Enter')
        alert('Pressionado')
      return x.Cat === products
    })
    setProducts(change)
  }

  
    return(
      <div className={styles.productContainer}>
       <Search searchbtn={searchbtn}  />
       <h2>Produtos</h2>
       <p>Home . Produtos</p>
       <CatPro products = {products} setProducts = {setProducts} />
       <Footer />
      </div>
    )
}

export default Product