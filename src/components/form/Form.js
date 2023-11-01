import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser"

// css
import styles from './form.module.scss'

const Form = () => {
    const [isDataFilled, setIsDataFilled] = useState(true);
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        const formData = new FormData(form.current);
        const userName = formData.get("user_name");
        const userPhone = formData.get("user_phone");
        const userMessage = formData.get("user_message");

        // Проверьте, заполнены ли обязательные поля
        if (!userName || !userPhone || !userMessage) {
            setIsDataFilled(false);
            return;
        }

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
    <div id="Form" className={styles.container}>
      <div className={styles.form__block}>
                

                <form ref={form} onSubmit={sendEmail} className={styles.form__content}>
                    <div className={styles.form__inner}>
                        <h1 className={styles.form__head}>Оставить заявку</h1>

                        <div className={styles.field}>
                            <h4 className={styles.field__title}>Имя:</h4>
                            <div className={styles.value}>
                                <input className={styles.value__text} type="text" maxlength="100" size="30"  name="user_name"></input>
                            </div>
                            {!isDataFilled && (
                                <div className={styles.error__message}>
                                    Пожалуйста, заполните все обязательные поля.
                                </div>
                            )}
                        </div>

                        <div className={styles.field}>
                            <h4 className={styles.field__title}>Телефон:</h4>
                            <div className={styles.value}>
                            <input className={styles.value__text} type="text" maxlength="100" size="30"  name="user_phone"></input>
                            </div>
                            {!isDataFilled && (
                                <div className={styles.error__message}>
                                    Пожалуйста, заполните все обязательные поля.
                                </div>
                            )}
                        </div>

                        <div className={styles.field}>
                            <h4 className={styles.field__title}>Ваше сообщение:</h4>
                            <div className={styles.value}>
                                <textarea cols="50" rows="7" name="user_message"></textarea>
                            </div>
                        </div>

                        <button type='submit' className={styles.submit__btn}>Отправить</button>
                    </div>
                </form>
        </div>

    </div>
  )
}

export default Form
