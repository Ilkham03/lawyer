import React from 'react'

// css
import styles from './review.module.scss'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
  return (
    <div id='Review' className={styles.review__block}>
        <div className={styles.container}>
            <div className={styles.review__inner}>

                <div className={styles.title__main__inner}>
                    <div className={styles.title__main__title}>Отзывы</div>
                </div>

                <div className={styles.review__content__block}>
                    <div className={styles.review__item}>
                        <div className={styles.review__item__title}>
                            <div className={styles.review__name}>
                                <h3>Нуркен</h3>
                                <h5>Алматы</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className={styles.review__icon} icon={faQuoteRight} />
                            </div>
                        </div>
                        <div className={styles.decor__review}></div>
                        <div className={styles.review__item__text}>Я очень благодарна 
                        адвокатам за профессиональную помощь. 
                        Они оказали мне поддержку и экспертное 
                        сопровождение в сложной судебной ситуации. 
                        Моя благодарность безмерна.</div>
                    </div>

                    <div className={styles.review__item}>
                        <div className={styles.review__item__title}>
                            <div className={styles.review__name}>
                                <h3>Сахирям</h3>
                                <h5>Алматы</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className={styles.review__icon} icon={faQuoteRight} />
                            </div>
                        </div>
                        <div className={styles.decor__review}></div>

                        <div className={styles.review__item__text}>Защита моих интересов была в надежных руках. Они действительно слушали меня, адаптировались под мои потребности и достигли отличных результатов. Большое спасибо!</div>
                    </div>

                    <div className={styles.review__item}>
                        <div className={styles.review__item__title}>
                            <div className={styles.review__name}>
                                <h3>Сергей</h3>
                                <h5>Алматы</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className={styles.review__icon} icon={faQuoteRight} />
                            </div>
                        </div>
                        <div className={styles.decor__review}></div>
                        <div className={styles.review__item__text}>Сотрудничество было для меня комфортным и результативным. Адвокаты проявили высокий профессионализм, отличную коммуникацию и довели мое дело до успешного завершения. Я довольна их работой.</div>
                    </div>

                    <div className={styles.review__item}>
                        <div className={styles.review__item__title}>
                            <div className={styles.review__name}>
                                <h3>Икрам</h3>
                                <h5>Алматы</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className={styles.review__icon} icon={faQuoteRight} />
                            </div>
                        </div>
                        <div className={styles.decor__review}></div>
                        <div className={styles.review__item__text}>Сотрудничество с этой конторой было для меня комфортным и результативным. Адвокаты проявили высокий профессионализм, отличную коммуникацию и довели мое дело до успешного завершения. Я довольна их работой.</div>
                    </div>
                </div>
              
            </div>         
        </div>
    </div>  

  )
}

export default Review
