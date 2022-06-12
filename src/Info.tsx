import { ReactElement } from 'react'
import {
  bukuwarungData,
  contactData,
  examData,
  hobbiesData,
  masterwordData,
  ncsData,
  thinkathonData,
  toolsData,
  travelData,
  tutorData,
  uniData,
  zendodoData,
} from './data/data'

interface messageDict {
  [label: string]: ReactElement
}

export const data: messageDict = {
  uni: uniData,
  tutor: tutorData,
  exam: examData,
  bukuwarung: bukuwarungData,
  ncs: ncsData,
  zendodo: zendodoData,
  contact: contactData,
  masterword: masterwordData,
  thinkathon: thinkathonData,
  tools: toolsData,
  travel: travelData,
  hobbies: hobbiesData,
}
