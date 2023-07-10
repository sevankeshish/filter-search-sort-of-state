import Select from "react-select"
import styles from "./select.module.css"

const SelectComponent = ({title, ...rest}) =>{
    // console.log(rest)
    return ( 
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <Select
            {...rest} className={styles.select}
            //  value={value}
            //  onChange={onChange} 
            //  options={options} 
             />
        </div>
    )
}

export default SelectComponent