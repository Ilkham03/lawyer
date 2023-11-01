import React from 'react'

// css
import styles from './footer.module.scss'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from  '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
      <div id='Contact' className={styles.footer__block}>
        <div className={styles.container}>
            <div className={styles.title__main__inner}>
                <div className={`${styles.title__main__title} ${styles.footer__title}`}>Контакты</div>
                <div className={`${styles.title__main__suptitle} ${styles.footer__title}`}>
                Вы можете связаться с нами любым удобным для Вас способом.

                </div>
            </div>

            <div className={styles.footer__inner}>
                <div className={styles.footer__info}>
                    <div>Phone: <br/> <h4>8(702)673-05-58</h4></div>
                    <div>Adress: <br/> <h4>г.Алматы улица Хантау 17</h4></div>
                    
                </div>
                <div className={styles.footer__info}>
                    <div>Соц.сети: <br/> 
                        <a href="https://api.whatsapp.com/send/?phone=87026730558">
                            <FontAwesomeIcon className={styles.whatsapp__icon} icon={faWhatsapp} />
                        </a>
                        <a href="https://t.me/@ilkham03">
                            <FontAwesomeIcon className={styles.telegram__icon}  icon={faTelegram} />
                        </a>
                    </div>                   
                </div>             
  
            </div>
                
            <div className={styles.copyright}>
                <span>Copyright © 2023</span>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default Footer
