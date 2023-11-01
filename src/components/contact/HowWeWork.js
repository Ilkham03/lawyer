import React from 'react'
// import css
import styles from './howWeWork.module.scss'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from  '@fortawesome/free-brands-svg-icons';


const HowWeWork = () => {
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
      <div className={styles.work__block}>
        <div className={styles.container}>
        <div className={styles.work__inner}>
            <div className={styles.title__main__inner}>
              <div className={styles.title__main__title}>Как мы работаем</div>
            </div>

            
              <div className={styles.work__content__block}>

                <div className={styles.work__content__item}>
                  <h3>1</h3>
                  <div className={styles.content__text}>
                    <h4>Первоначальная бесплатная консультация по телефону</h4>
                    <p>Свяжитесь с нами по телефону горячей линии 8(702)673-05-58.</p>
                  </div>
                </div>

                <div className={styles.work__content__item}>
                  <h3>2</h3>
                  <div className={styles.content__text}>
                    <h4>Назначаем встречу</h4>
                    <p>Прежде чем начать работу над вашим делом, мы предоставляем бесплатную консультацию, чтобы оценить вашу ситуацию и предложить стратегию защиты.</p>
                  </div>
                </div>

                <div className={styles.work__content__item}>
                  <h3>3</h3>
                  <div className={styles.content__text}>
                    <h4>Заключение договора</h4>
                    <p>Наши адвокаты начинают работу с заключения официального договора с вами. Этот шаг обеспечивает четкое понимание задач и обязательств, а также обозначение сроков выполнения.</p>
                  </div>
                </div>

                <div className={styles.work__content__item}>
                  <h3>4</h3>
                  <div className={styles.content__text}>
                    <h4>Выбор стратегии</h4>
                    <p>После анализа вашего дела, наши адвокаты совместно с вами выбирают наилучшую стратегию для достижения ваших целей. Мы работаем на основе ваших интересов и соблюдаем высокие стандарты профессионализма.</p>
                  </div>
                </div>

                <div className={styles.work__content__item}>
                  <h3>5</h3>
                  <div className={styles.content__text}>
                    <h4>Достижение результата</h4>
                    <p>Наша цель - достичь наилучшего результата для вас. Мы боремся за ваши права и интересы, участвуя в переговорах, судебных процессах и других процедурах. Мы остаемся с вами до тех пор, пока не достигнем успеха.</p>
                  </div>
                </div>

                <div className={styles.link__form}>
                    <a className={styles.toForm} 
                    onClick={() => scrollToElement('Form')}>Получить консультацию</a>
                </div>
                
              </div>
            </div>         
        </div>
      </div>  
    </div>
  )
}

export default HowWeWork
