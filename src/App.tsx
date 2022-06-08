import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import phaserGame from './PhaserGame'
import HelloWorldScene from './scenes/HelloWorldScene'
import Modal from './component/Modal/Modal'
import Button from './objects/Button'
import { ButtonInteraction } from './objects/Interaction'
import { ReactElement } from 'react'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [modal, setModal] = useState(<div></div>)
  const handleOpenModal = (open: boolean) => {
    if (open) {
      setOpen(true)
      const button = ButtonInteraction.buttonPressed
      setModal(button ? button.messageShownWhenPressed : <div></div>)
    } else {
      setOpen(false)
    }
  }

  useEffect(() => {
    ButtonInteraction.handleOpen = handleOpenModal
  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
      <Modal
        open={open}
        title={'info'}
        height={'70vh'}
        handleClose={() => setOpen(false)}
      >
        {modal}
      </Modal>
    </div>
  )
}

export default App
