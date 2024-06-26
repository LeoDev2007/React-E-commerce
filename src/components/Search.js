import { IoSearchCircleOutline } from "react-icons/io5";
import styles from './search.module.css'
import { useState } from "react";



const Search = ({searchbtn})=>{

    const [search, setSearch] = useState()

    const Key = (e) => {
      if (e.key === 'Enter') {
        searchbtn(search);
      }
    };
    return(
    <section className={styles.search}>
      <div className={styles.bar}>
        <input className={styles.searchBar} type="text" value={search} placeholder="Pesquise aqui" autoComplete="on" onKeyDown={Key} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => searchbtn (search)} className={styles.searchBtn} ><IoSearchCircleOutline /></button>
        
      </div>
      
    </section>
    )
}

export default Search