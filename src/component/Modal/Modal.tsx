import { MouseEventHandler, ReactElement } from 'react'
import styles from './Modal.module.css'

interface ModalProp {
  open: boolean
  title: string
  height: string
  handleClose: MouseEventHandler
  children: ReactElement
}

const Modal = ({ open, title, height, children, handleClose }: ModalProp) => {
  return (
    <>
      {open && (
        <>
          <div className={styles.container} style={{ height }}>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{children}</div>
          </div>
          <div className={styles.backdrop} onClick={handleClose} />
        </>
      )}
    </>
  )
}

export default Modal
