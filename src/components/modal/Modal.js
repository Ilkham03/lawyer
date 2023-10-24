import React from 'react'

// css
import styles from './modal.module.scss'

const Modal = ({active, setActive}) => {
  return (
    <div className={`${styles.modal__content} ${styles.active}`}
    onClick={() => setActive(false)}>
      <div className={styles.modal__content} onclick={e => e.stopPropagation()}>

      </div>
    </div>
  )
}

export default Modal
