import { ReactElement } from 'react'
import WovenImageList from './component/common/WovenImageList'
import styles from './data.module.css'

const uniImages = ['images/nus.png', 'images/iitrpr.png']

interface messageDict {
  [label: string]: ReactElement
}

const uniData = (
  <div className={styles.container}>
    <WovenImageList imgList={uniImages} cols={2}/>
    <div>These are the unis i been to</div>
  </div>
)

export const data: messageDict = {
  uni: uniData,
  tutor: <div>This is for tutor</div>,
  exam: <div>This is for IOL</div>,
  bukuwarung: <div>This is for BukuWarung</div>,
  ncs: <div>This is for NCS</div>,
  zendodo: <div>This is for zendodo</div>,
  contact: <div>This is for contact</div>,
  masterword: <div>This is for masterword</div>,
  thinkathon: <div>this is for thinkathon</div>,
  tools: <div>This is for tools</div>,
}
