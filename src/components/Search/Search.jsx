import React from "react";
import styles from "./Search.module.css"

const Search = ()=>{
    return(
        <div className={`${styles.searchDiv} w-100 d-flex justify-content-around align-items-center`}>
            <div className={`${styles.ipDiv}`}>
                <input type="text"/>
            </div>
            <button className={styles.btn}>Ask</button>
            <button className={styles.btn}>Save</button>

        </div>
    )
}

export default Search;