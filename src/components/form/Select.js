import styles from './Select.module.css'

function Select({ text, name, option, handlerOnChange, value }) {

    return (

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option desabled select>Selecione uma opção</option>
                {/* <option>{option}</option>
                onChange={handlerOnChange}
                value={value} */}
            </select>
        </div>
    )

}

export default Select