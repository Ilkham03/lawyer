import React from 'react'

import styles from './dopinfo.module.scss'


// import img
import img__logo from '../../img/ElegantLogo.png'

const Dopinfo = () => {
  return (
    <div className={styles.dopinfo}>
      <div className={styles.container}>
            <div className={styles.info__block}>
                <div className={styles.info__logo}>
                    <img src={img__logo} alt="My Image" className={styles.img__logo}/>
                    <p className={styles.logo__text}>Aripov&partners</p>
                </div>
                <span className={styles.phone__number}> Горячая линия: 8(702)673-05-58</span>
            </div>
        </div>
    </div>
  )
}

export default Dopinfo
