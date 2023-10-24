import React from 'react'

import { useLocation, Link } from 'react-router-dom';

//css
import styles from './include.module.scss'

//img
import img__standart from '../../img/standart.jpg'

// component
import Form from '../form/Form'

const IncludeAll = () => {
    const location = useLocation();
  return (

    <div className={styles.standart__block}>
      <div className={styles.container}>
        <div className={styles.standart__inner}>

                <div className={styles.title__main__inner}>
                    <div className={styles.navigation}>
                        <React.Fragment>
                            <div className={styles.site__navigation}>
                                <Link className={styles.main__link__navigation} to="/MainBlock">Главная </Link> /
                                <Link className={styles.main__link__navigation} to="/Service"> Услуги </Link> / <span>Стандарт</span>
                            </div>
                        </React.Fragment>
                    </div>
                </div>

            <div className={styles.total__block__title}>
                <img src={img__standart} alt="My Image" className={styles.total__type__img}/>
                <div className={styles.total__block__title__text}>
                    <p><strong>Удобно, выгодно, быстро</strong></p>
                    <p>Услуга "Стандарт" является самой востребованной 
                    и наиболее удобной услугой для наших клиентов.</p>
                    <p>С самого начала сотрудничества Вы получаете 
                    полное юридическое сопровождение начиная со 
                    сбора документов в административной полиции 
                    и вплоть до окончательной страховой выплаты 
                    на Ваш расчетный счет.</p>
                    <p>Ускоряем процессы на всех этапах, проводим 
                    полный анализ калькуляции страховой компании. 
                    За каждым клиентом нашей компании прикрепляется
                     опытный юрист, который будет действовать именно
                      в Ваших интересах.</p>
                </div>
            </div>

            <p>&nbsp;</p>

            <div className={styles.container}>
                <div className={styles.form__block}>
                    <p>Цена:</p>
                    <h3>От 100.000 тг</h3>
                    <Form/>        

                </div>
            </div>


        </div>
      </div>
    </div>

  )
}

export default IncludeAll