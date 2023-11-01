import React, {useEffect, useState, useRef} from 'react'

// styles
import styles from './mainblock.module.scss'

// import module
import { useSpring, animated } from 'react-spring';

// import img
import main__img from '../../img/bd_bg.jpg'; 
import about__img from '../../img/about__img.jpg';
import advan1__img from '../../img/advan.jpg';
import advan2__img from '../../img/advan2.jpg';
import advan3__img from '../../img/advan3.jpg';



// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faArrowUp} from  '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const MainBlock = () => {
    const [isOpen, setOpen] = useState(false);
    const animation = useSpring({
        from: {
          bottom: '-50px', // Начальное положение по Y
          opacity: 0, // Начальная непрозрачность
        },
        to: {
          bottom: '0px', // Конечное положение по Y
          opacity: 1, // Конечная непрозрачность
        },
        config: { duration: 1000 }, // Длительность анимации в миллисекундах
    });

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };
      
  return (
    <div>

    {/* first block */}
        <div id="MainBlock" className={styles.first__block}>
            <div className={styles.back__img}>
                <img src={main__img} alt="My Image" className={styles.main__img}/>

                    <div style={animation} className={styles.title__block}>
                            <div className={styles.title}>Сделаем Все За Вас
                                    Выплатим Максимальную Сумму!
                                    Независимая Оценка Ущерба
                                    Ускоренная Выплата
                            </div>

                                <div className={styles.sub__title}>
                                Осуществляем адвокатскую защиту Ваших интерес при ДТП.
                            </div>

                            <div className={styles.link__form}>
                                <a className={styles.toLink} 
                                onClick={() => scrollToElement('Form')}>Получить консультацию</a>
                                <a className={styles.toService}
                                onClick={() => scrollToElement('Service')}>Виды услуг</a>
                            </div>

                            
                    </div>

                <div className={styles.arrowUp}>
                    <FontAwesomeIcon onClick={() => scrollToElement('MainBlock')}
                     className={styles.arrowUp__btn} 
                     icon={faArrowUp} />

                    <a href='https://api.whatsapp.com/send/?phone=87026730558'><FontAwesomeIcon onClick={() => scrollToElement('MainBlock')}
                        className={styles.arrowUpWhatsapp__btn} 
                        icon={faWhatsapp} />
                     </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MainBlock
