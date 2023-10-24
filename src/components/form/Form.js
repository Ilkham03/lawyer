import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser"

// css
import styles from './form.module.scss'

const Form = () => {
    const [error, setError] = useState();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_agyposc', 'template_dv0rdtq', form.current, 'g4VBYLaBOZeCh4FXe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    
  return (
    <div className={styles.container}>
      <div className={styles.form__block}>
                

                <form ref={form} onSubmit={sendEmail} className={styles.form__content}>
                    <div className={styles.form__inner}>
                        <div className={styles.form__head}>Оставить заявку</div>

                        <div className={styles.field}>
                            <h4 className={styles.field__title}>Name:</h4>
                            <div className={styles.value}>
                            <input type="text" maxlength="100" size="30"  name="user_name"></input>
                            </div>
                        </div>

                        <div className={styles.field}>
                            <h4 className={styles.field__title}>Telephone:</h4>
                            <div className={styles.value}>
                            <input type="text" maxlength="100" size="30"  name="user_phone"></input>
                            </div>
                        </div>

                        <div className={styles.field}>
                            <h4 className={styles.field__title}>Text:</h4>
                            <div className={styles.value}>
                                <textarea cols="50" rows="7" name="user_message"></textarea>
                            </div>
                        </div>

                        <button type='submit' className={styles.submit__btn}>submit</button>
                    </div>
                </form>
        </div>

    </div>
  )
}

export default Form
