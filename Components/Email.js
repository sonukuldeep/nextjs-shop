import {useRef} from 'react'
import styles from '../styles/Form.module.scss'
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef()
    function handleOnSubmit(e) {
        e.preventDefault();
    
        const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            e.target.reset()
          })
          .catch((error) => {
            console.log(error.text);
          })
      }

    return (
        <div className={styles.container}>
            <form className={styles.form} action="#" ref={form} onSubmit={handleOnSubmit}>
                <div className={styles.left}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' required />
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="text" name='email' required />
                    </div>
                    <div>
                        <label htmlFor="name">Phone:</label>
                        <input type="text" name='phone' />
                    </div>
                <button type='submit'>Submit</button>
                </div>
                <div className={styles.right}>
                    <label htmlFor="message">Query:</label>
                    <textarea name="message" cols="30" rows="10" required></textarea>
                </div>
            </form>
        </div>
    )
}

export default Email