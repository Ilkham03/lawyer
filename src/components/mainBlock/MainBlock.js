import React from 'react'
import {Link} from 'react-router-dom';

// styles
import styles from './mainblock.module.scss'


// import img
import main__img from '../../img/img1.jpg'; 
import about__img from '../../img/about__img.jpg';
import advan1__img from '../../img/advan.jpg';
import advan2__img from '../../img/advan2.jpg';
import advan3__img from '../../img/advan3.jpg';


// component
import Connection from '../connection/Connection';
import Review from '../review/Review';
import Discount from '../discount/Discount';
import Form from '../form/Form'

// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from  '@fortawesome/free-solid-svg-icons';

const MainBlock = () => {
  return (
    <div>

    {/* first block */}
        <div className={styles.first__block}>
            <div className={styles.back__img}>
                <img src={main__img} alt="My Image" className={styles.main__img}/>

                    <div className={styles.title__block}>
                        {/* <div className={styles.title__inner}> */}
                            <div className={styles.title}>СДЕЛАЕМ ВСЕ ЗА ВАС
                                    ВЫПЛАТИМ МАКСИМАЛЬНУЮ СУММУ!
                                    НЕЗАВИСИМАЯ ОЦЕНКА УЩЕРБА
                                    УСКОРЕННАЯ ВЫПЛАТА
                                    ПРЕДСТАВЛЯЕМ ВАШИ ИНТЕРЕСЫ В СУДЕ</div>

                                <div className={styles.sub__title}>
                                Адвокатская защита Ваших интерес при ДТП.
                                Полное юридическое сопровождение.
                            </div>

                            <div className={styles.link__form}>
                                <Link className={styles.toLink} to="/Form">Связаться с нами</Link>
                            </div>
                        {/* </div> */}
                    </div>
            </div>
        </div>


    {/* second block */}
        <div className={styles.about__block}>
            <div className={styles.container}>
                <div className={styles.about__inner}>
                    <img src={about__img} alt="My Image" className={styles.img__about}/>

                    <div className={styles.right__block}>
                        <h1 className={styles.right__block__title}>
                            О компании
                        </h1>
                        <div className={styles.right__block__text}>
                            <p>Добро пожаловать на сайт компании AUTOCONSULT.KZ</p> 

                            <p>Наша компания обладает богатым опытом ведения
                            и сопровождения административных дел. Основным нашим
                            направлением является юридическое сопровождение в 
                            сфере дорожно - транспортных происшествий и взыскание
                            страховых выплат.</p>  

                            <p>Основным критерием нашей команды является качество 
                            предоставляемых нами услугами. В нашей команде работают 
                            опытные юристы и адвокаты за плечами которых лежит богатейший 
                            опыт работы в сфере юриспруденции. </p>
                        </div>

                        <div className={styles.list__goal}>
                            <ul>
                                <li className={styles.list__text}>
                                    <FontAwesomeIcon className={styles.list__icon} icon={faCheck} />
                                    <div>5 лет успешной работы</div>
                                </li>
                                <li className={styles.list__text}>
                                    <FontAwesomeIcon className={styles.list__icon} icon={faCheck} />
                                    <div>92% выигранных дел</div>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.link__form}>
                            <Link className={styles.toLink} to="/Form">Связаться с нами</Link>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>


    {/* advanteges block */}
        <div className={styles.advanteges__block}>
            <div className={styles.container}>

                <div className={styles.title__main__inner}>
                    <div className={styles.title__main__title}>Преимущества</div>
                    <div className={styles.title__main__suptitle}>Трудное будет сделано немедленно, <br/>
                    невозможное потребует чуть больше времени.</div>
                </div>


                <div className={styles.advanteges__inner}>

                    <div className={styles.advanteges__item}>
                        <img src={advan1__img} alt="My Image" className={styles.advan__img}/>

                        <div className={styles.advanteges__content}>
                            <h3>Эффективность и доверие </h3>

                            <div className={styles.advanteges__decor}></div>
                            <p>
                                Мы любим свою работу и выполняем ее профессионально и добросовестно. <br/>
                                Поэтому наши клиенты рекомендуют нас своим родственникам.
                            </p>
                        </div>
                    </div>
                    <div className={styles.advanteges__item}>
                        <img src={advan2__img} alt="My Image" className={styles.advan__img}/>

                        <div className={styles.advanteges__content}>
                            <h3>Высокие результаты</h3>

                            <div className={styles.advanteges__decor}></div>
                            <p>
                            Количество выигранных в судах дел составляет более 97%. 
                            Такой показатель достигаем благодаря имеющимся знаниям, опыту ведения судебных дел.
                            </p>
                        </div>
                    </div>
                    <div className={styles.advanteges__item}>
                        <img src={advan3__img} alt="My Image" className={styles.advan__img}/>

                        <div className={styles.advanteges__content}>
                            <h3>Богатая практика</h3>

                            <div className={styles.advanteges__decor}></div>
                            <p>
                            В нашей команде работают профессионалы своего дела, 
                            с богатым опытом работы в правоохранительных органах
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


   
        {/* <Review/> */}

    {/* discount block */}
        <Discount/> 
    </div>
  )
}

export default MainBlock
