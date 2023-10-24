import React, { useState } from 'react'
import {Link} from 'react-router-dom';

// import styles
import styles from './discount.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// img
import discount__img from '../../img/discount.jpg';
import discount__img2 from '../../img/discount2.jpg';

// component
import Form from '../form/Form'

const Discount = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 3; 

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };


  return (
    <div>
        <div className={styles.discount__block}>
            <div className={styles.container}>
                <div className={styles.title__main__inner}>
                    <div className={styles.title__main__title}>Спецпредложения</div>
                    <div className={styles.title__main__suptitle}>
                        У вас нет денег, оплатить услугу?<br />
                        У нас есть решение!
                    </div>
                </div>

                <div className={styles.discount__inner}>
                    <div className={styles.slider}>
                        <div className={styles.slidesContainer} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                            <div className={styles.discount__item}>
                                <div className={styles.discount__content}>
                                    <img src={discount__img} alt="My Image" className={styles.discount__img} />
                                    <div className={styles.discount__text}>
                                        <h3>Представительство в суде и юридические услуги -20%</h3>
                                        <p>Профессиональное правовое сопровождение и консультирование: по гражданским и уголовным делам</p>
                                        <div className={styles.link__form}>
                                            <Link className={styles.toLinkDiscount} to="/Form">Связаться с нами</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.discount__item}>
                                <div className={styles.discount__content}>
                                    <img src={discount__img} alt="My Image" className={styles.discount__img} />
                                    <div className={styles.discount__text}>
                                        <h3>Представительство в суде и юридические услуги -20%</h3>
                                        <p>Профессиональное правовое сопровождение и консультирование: по гражданским и уголовным делам</p>
                                        <div className={styles.link__form}>
                                            <Link className={styles.toLinkDiscount} to="/Form">Связаться с нами</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.discount__item}>
                                <div className={styles.discount__content}>
                                    <img src={discount__img} alt="My Image" className={styles.discount__img} />
                                    <div className={styles.discount__text}>
                                        <h3>Представительство в суде и юридические услуги -20%</h3>
                                        <p>Профессиональное правовое сопровождение и консультирование: по гражданским и уголовным делам</p>
                                        <div className={styles.link__form}>
                                            <Link className={styles.toLinkDiscount} to="/Form">Связаться с нами</Link>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="slidesContainer">
                        
                        <div className="arrow__icons left" onClick={prevSlide}>
                            <FontAwesomeIcon className={`${styles.arrow__icons} ${styles.left}`} icon={faArrowLeft} />
                        </div>
                        <div className="arrow__icons right" onClick={nextSlide}>
                            <FontAwesomeIcon className={`${styles.arrow__icons} ${styles.right}`} icon={faArrowRight} />
                        </div>
                    </div>

                </div>

            </div>
        </div>


    </div>
  )
}

export default Discount
