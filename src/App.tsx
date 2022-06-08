import { useEffect, useState } from 'react'
import './App.css'
import Modal from './component/Modal/Modal'
import { ButtonInteraction } from './objects/Interaction'

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
        handleClose={() => ButtonInteraction.buttonPressed?.unPressButton()}
      >
        {modal}
      </Modal>
    </div>
  )
}

export default App
