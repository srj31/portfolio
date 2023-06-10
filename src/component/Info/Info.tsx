import styles from './Info.module.css'

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Instructions</div>
      <div className={styles.body}>
        <div className={styles.section}>
          <div>
            <img src={'images/wasd.png'} className={styles.iconImages} />
          </div>
          <div>Move</div>
        </div>
        <div className={styles.section}>
          <div>
            <img src={'images/enter_key.png'} className={styles.iconImages} />
          </div>
          <div>Continue</div>
        </div>
        <div className={styles.section}>
          <div>
            <img src={'images/e_key.png'} className={styles.iconImages} />
          </div>
          <div>Switch to Manual</div>
        </div>
      </div>
    </div>
  )
}

export default Info
