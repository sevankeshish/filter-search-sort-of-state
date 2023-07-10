import { useState } from "react"
import styles from"./search.module.css"

const SearchBar = () =>{
const [value , setValue] = useState("")

const changeHandler = (e) => {
    setValue(e.target.value)
}
    return(
        <div className={styles.formControl}>
            <input type="text" placeholder="search for ..." 
                value={value} onChange={changeHandler} />
        </div>

    )
    
}

export default SearchBar 