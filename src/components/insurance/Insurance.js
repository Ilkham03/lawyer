import React from 'react'

//css
import styles from './insurance.module.scss';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon icon={faCheckDouble} /> */}

const Insurance = () => {
  return (
    <div id='Insurance' className={styles.insurance__block}>
        <div className={styles.container}>
            <div className={styles.title__main__inner}>
                <div className={styles.title__main__title}>Взыскание страховых выплат</div>
            </div>
            
            <div className={styles.insurance__inner}>
                <div className={styles.insurance__content}>

                    <div className={styles.content__item}>
                        <FontAwesomeIcon className={styles.insurance__icon} icon={faCheckDouble} />
                        <p>Независимая оценка здоровья.</p>
                    </div>

                    <div className={styles.content__item}>
                        <FontAwesomeIcon className={styles.insurance__icon} icon={faCheckDouble} />
                        <p>Возмещение ущерба по восстановлению автотранспорта.</p>
                    </div>

                    <div className={styles.content__item}>
                        <FontAwesomeIcon className={styles.insurance__icon} icon={faCheckDouble} />
                        <p>Возмещение ущерба при приченении вреда жизни и здоровья.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Insurance
