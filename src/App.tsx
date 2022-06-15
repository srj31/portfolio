import { useEffect, useState } from 'react'
import './App.css'
import Modal from './component/Modal/Modal'
import { data } from './Info'
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
      {/* <Modal
        open={open}
        height={'80vh'}
        width={'50vw'}
        handleClose={() => ButtonInteraction.buttonPressed?.unPressButton()}
      >
        {modal}
      </Modal> */}
      <Modal
        open={true}
        height={'80vh'}
        width={'50vw'}
        handleClose={() => ButtonInteraction.buttonPressed?.unPressButton()}
      >
        {data['bukuwarung']}
      </Modal>
    </div>
  )
}

export default App
