import React from 'react'
import { useLocation, Link } from 'react-router-dom'
// import css
import styles from './contact.module.scss'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from  '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const location = useLocation();
  return (
  <div>
    <div className={styles.contact__block}>
        <div className={styles.container}>
            <div className={styles.сontact__inner}>

              <div className={styles.title__main__inner}>
                <div className={styles.navigation}>
                  {location.pathname === '/Contact' ? (
                    <React.Fragment className={styles.site__navigation}>
                      <Link className={styles.main__link__navigation} to="/MainBlock">Главная</Link>  / Контакты
                    </React.Fragment>
                  ): null}
                </div>

                <div className={styles.title__main__title}>Контакты</div>
              </div>

               <div className={styles.contact__content}>
                <div className={styles.contact__info}>
                    <div>Phone: <br/> <h4>8(707)203-52-04</h4></div>
                    <div>Adress: <br/> <h4>г.Алматы улица Хантау 17</h4></div>
                    
                </div>
                <div className={styles.contact__info}>
                    <div>Соц.сети: <br/> 
                        <a href="whatsapp://send?phone=87072035204">
                            <FontAwesomeIcon className={styles.whatsapp__icon} icon={faWhatsapp} />
                        </a>
                        <a href="tg://resolve?domain=@ilkham03">
                            <FontAwesomeIcon className={styles.telegram__icon}  icon={faTelegram} />
                        </a>
                    </div>                   
                </div>             
  
            </div>
                    
            </div>
        </div>
      </div>    
  </div>
  )
}

export default Contact
