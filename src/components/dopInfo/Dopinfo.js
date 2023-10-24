import React from 'react'

import styles from './dopinfo.module.scss'

const Dopinfo = () => {
  return (
    <div>
      <div className={styles.container}>
            <div className={styles.info__block}>
                <span className={styles.street__name}>г.Алматы ул.Хантау 17</span>
                    <div className={styles.info__logo}>
                        <h1>AUTOCONSULT.KZ</h1>
                        <h4 >Ваш адвокат при ДТП</h4>
                    </div>
                <span className={styles.phone__number}>8(707)203-52-04</span>
            </div>
        </div>
    </div>
  )
}

export default Dopinfo
