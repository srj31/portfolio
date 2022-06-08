import { ReactElement } from 'react'

interface messageDict {
  [label: string]: ReactElement
}

export const data: messageDict = {
  uni: <div>This is for uni</div>,
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
