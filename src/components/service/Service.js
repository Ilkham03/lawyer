import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useLocation, Link } from 'react-router-dom';


import styles from './service.module.scss'

// component
import Breadcrumbs from '../router__links/Breadcrumbs';


const Service = () => {
    const location = useLocation()
  return (
        <div>
      <div className={styles.service__block}>
        <div className={styles.container}>
            <div className={styles.service__inner}>


                <div className={styles.title__main__inner}>
                        <div className={styles.navigation}>
                        <React.Fragment>
                            <div className={styles.site__navigation}>
                                <Link className={styles.main__link__navigation} to="/MainBlock">Главная</Link>  / Услуги 
                            </div>
                        </React.Fragment>
                        </div>
                        

                    <div className={styles.title__main__title}>Наши услуги</div>
                </div>

                <div className={styles.service__text}>
                    <h3>Вот уже более 5 лет мы оказываем качественные услуги по юридическому и адвокатскому сопровождению административных, гражданских и уголовных дел.&nbsp;&nbsp;&nbsp;</h3>&nbsp;&nbsp;

                    <p>В числе предоставляемых услуг Вам могут быть полезны</p>
                    <ul className={styles.service__list}>
                            <li>
                                <strong>Юридическое сопровождение по ДТП. </strong> 
                                После подписания договора оказания услуг 
                                и доверенности на нашу компанию весь дальнейший 
                                процесс мы берем на себя. 
                            </li>
                            <li>
                                <strong>Независимая оценка и спор со страховой компанией.</strong> 
                                Страховые компании как и любая коммерческая организация 
                                пытаются занижать страховые выплаты. После получения 
                                калькуляции от страховых компаний мы качественно изучаем 
                                отчет и при обнаружении явного занижения назначаем 
                                независимую оценку.
                            </li>
                            <li>
                                <strong>Адвокат по гражданским делам.</strong>
                                В настоящее время максимальная страховая 
                                выплата при ДТП составляет 600 МРП. 
                                Если ущерб составляет более, то требуется 
                                участие нашего адвоката в гражданском суде.

                            </li>
                            <li>
                                <strong>Адвокат по уголовным делам. </strong>
                                Зачастую в ДТП могут быть пострадавшие, 
                                в зависимости от степени тяжести ущерба 
                                потерпевшей стороны, дело могут 
                                переквалифицировать на уголовную ответственность. 
                                Специалисты нашей компании более 5 лет успешно 
                                справляются с подобного рода задачами и качественно 
                                сопровождают каждого нашего клиента 
                            </li>
                    </ul>&nbsp;

                    

                    <div className={styles.service__type}>
                        <ul className={styles.service__type__lists}>
                            <li>
                                <Link className={styles.service__type__list} to="/Standart">Стандарт</Link>
                            </li>
                            <li>
                                <Link className={styles.service__type__list} to="/independence">Независимая оценка</Link>
                            </li>
                            <li>
                                <Link className={styles.service__type__list} to="/IncludeAll">Все включено</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                    
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Service
