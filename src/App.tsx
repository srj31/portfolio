import { useEffect, useState } from 'react'
import './App.css'
import Info from './component/Info/Info'
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
      <Info />
      <Modal
        open={false}
        height={'80vh'}
        width={'50vw'}
        handleClose={() => ButtonInteraction.buttonPressed?.unPressButton()}
      >
        {modal}
      </Modal>
    </div>
  )
}

export default App
