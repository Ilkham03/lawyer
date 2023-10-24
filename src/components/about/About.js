import React from 'react'
import { useLocation, Link } from 'react-router-dom';
// import css
import styles from './about.module.scss'

const About = () => {
    const location = useLocation();
  return (
    <div>
        <div className={styles.about__block}>
            <div className={styles.container}>
                <div className={styles.about__inner}>

                    <div className={styles.title__main__inner}>
                        <div className={styles.navigation}>
                            {location.pathname === '/About' ? (
                            <React.Fragment className={styles.site__navigation}>
                                <Link className={styles.main__link__navigation} to="/MainBlock">Главная</Link>  / О компании
                            </React.Fragment>
                            ): null}
                        </div>
                        

                        <div className={styles.title__main__title}>О компании</div>
                    </div>
                    
                    <div className={styles.about__text}>
                        <p>Почему люди обращаются к нам за помощью? &nbsp;&nbsp;&nbsp;</p>&nbsp;&nbsp;

                        <ul className={styles.about__list}>
                            <li>
                                Профессионализм. 
                                <p>Нашу команду отличает безупречный многолетний труд и высокое 
                                профессиональное мастерство при защите прав, свобод и 
                                законных интересов доверителей, с непременным ИНДИВИДУАЛЬНЫМ
                                 подходом к КАЖДОЙ проблеме и задаче КАЖДОГО доверителя.</p>
                            </li>
                            <li>
                                Ответственность. 
                                <p>Работам только на результат. 
                                Мы выиграли более 95% дел и очень этим гордимся.</p>
                            </li>
                            <li>
                                Опыт и репутация.
                                <p>Большинство сотрудников нашей команды в прошлом 
                                работали в органах внутренних дел и имеют богатый 
                                юридический опыт ведения различных дел</p>
                            </li>
                            <li>
                                Энергичность и целеустремленность.
                                <p>Наша команда отличается сравнительно молодым 
                                коллективом и поэтому наши специалисты энергичны 
                                и устремлены в достижении цели и поднятии своего 
                                авторитета в сообществе юристов и адвокатов города 
                                Алматы, исполняя при этом честно и добросовестно 
                                свои обязанности.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About
