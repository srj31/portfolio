import styles from './Info.module.css'

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Instructions</div>
      <div className={styles.body}>
        <div>
          <img src={'images/wasd.png'} className={styles.iconImages} />
        </div>
        <div>To move</div>
      </div>
    </div>
  )
}

export default Info
