/*import checker from '../api/checker'*/
import styles from "/styles/Home.module.css"
import {count} from "console";
/*import makeLogged from '../index'*/

export default function AuthForm() {

    const handleSubmit = async (event) => {

        event.preventDefault()
        const data = {
            login: event.target.first.value,
            password: event.target.last.value,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/form'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

    }
    return (
        <form onSubmit={handleSubmit} className={styles.authgrid}>
            <label htmlFor="first" className={styles.title}>Логин</label>
            <input className={styles.formInput} type="text" id="first" name="first" required/>

            <label htmlFor="last" className={styles.title}>Пароль</label>
            <input className={styles.formInput} type="text" id="last" name="last" required/>

            <button type="submit"><a>Вход</a></button>
        </form>
    )
}
