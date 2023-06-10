import { ReactElement } from 'react'
import {
  bukuwarungData,
  contactData,
  examData,
  hobbiesData,
  masterwordData,
  ncsData,
  codeToImpactData,
  toolsData,
  travelData,
  tutorData,
  uniData,
  welcomeData,
  zendodoData,
  gicData,
} from './data/data'

interface messageDict {
  [label: string]: ReactElement
}

export const data: messageDict = {
  uni: uniData,
  tutor: tutorData,
  exam: examData,
  bukuwarung: bukuwarungData,
  singtel: ncsData,
  gic: gicData,
  zendodo: zendodoData,
  contact: contactData,
  masterword: masterwordData,
  codeToImpact: codeToImpactData,
  tools: toolsData,
  travel: travelData,
  hobbies: hobbiesData,
  welcome: welcomeData,
}
