import React from 'react'

// import css
import styles from './whywe.module.scss'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyBillWave, faHandshakeAngle,faLocationDot} from  '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div id='Whywe' className={styles.we__block}>
            <div className={styles.container}>
                <div className={styles.we__inner}>
                    <div className={styles.title__main__inner}>
                        <div className={styles.title__main__title}>Почему мы</div>
                    </div>

                
                    <div className={styles.we__content}>
                        <div className={styles.we__content__item}>
                            <FontAwesomeIcon className={styles.we__icon} icon={faMoneyBillWave} />
                            <h2>Гибкие условия оплаты</h2>
                            <p>Гибкие условия оплаты - ваше удобство, наша забота.
                            Мы предлагаем опции оплаты, которые подходят именно вам. Делайте первый шаг к правосудию без забот о финансах.</p>
                        </div>
                        <div className={styles.we__content__item}>
                            <FontAwesomeIcon className={styles.we__icon} icon={faHandshakeAngle} />
                            <h2>Оперативная юридическая помощь</h2>
                            <p>Наша команда адвокатов готова предоставить вам оперативную юридическую помощь. 
                            Мы знаем, что юридические вопросы могут возникнуть внезапно и требуют немедленного решения.
                            Мы всегда на связи, чтобы предоставить вам неотложную поддержку 
                            в случае неотложных ситуаций. Важно знать, что вы можете полагаться на 
                            наш опыт и знания, когда время играет роль. Мы готовы помочь вам решить вашу
                            проблему быстро и профессионально.</p>
                        </div>
                        <div className={styles.we__content__item}>
                            <FontAwesomeIcon className={styles.we__icon} icon={faLocationDot} />                            <h2>Представляем интересы клиентов как в Алмате так и по всему Казахстану</h2>
                            <p>Мы гордимся тем, что представляем интересы наших клиентов не только в Алматы, 
                            но и по всей территории Казахстана. Наша экспертная команда юристов 
                            готова оказать квалифицированную поддержку и защитить ваши интересы 
                            в любой точке страны. Независимо от вашего местоположения, мы всегда 
                            рядом, чтобы обеспечить вас юридической защитой высокого уровня.</p>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

export default About
