import React from 'react'

import styles from './connection.module.scss'



const Connection = ({ setModalActive }) => {
  return (
    <div>
        <button className={styles.connection__btn}
          onClick={() => setModalActive(true)}>
              Связаться с нами
        </button>
      
    </div>
  )
}

export default Connection
