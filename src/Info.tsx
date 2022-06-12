import { ReactElement } from 'react'
import { examData, tutorData, uniData } from './data/data'

interface messageDict {
  [label: string]: ReactElement
}

export const data: messageDict = {
  uni: uniData,
  tutor: tutorData,
  exam: examData,
  bukuwarung: <div>This is for BukuWarung</div>,
  ncs: <div>This is for NCS</div>,
  zendodo: <div>This is for zendodo</div>,
  contact: <div>This is for contact</div>,
  masterword: <div>This is for masterword</div>,
  thinkathon: <div>this is for thinkathon</div>,
  tools: <div>This is for tools</div>,
}
