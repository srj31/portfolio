import { useEffect, useRef, useState } from 'react'
import './App.css'
import Info from './component/Info/Info'
import Modal from './component/Modal/Modal'
import { welcomeData } from './data/data'
import { ButtonInteraction } from './objects/Interaction'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [modal, setModal] = useState(<div></div>)
  const [initialOpen, setInitialOpen] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement>(null)

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
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  return (
    <div className="App">
      <Info />
      <div
        ref={ref}
        onKeyDown={(event) => {
          console.log(event)
          if (event.key == 'Enter') {
            setInitialOpen(false)
          }
        }}
        tabIndex={-1}
      >
        <Modal
          open={initialOpen}
          height={'80vh'}
          width={'50vw'}
          handleClose={() => {}}
        >
          {welcomeData}
        </Modal>
      </div>
      <Modal
        open={open}
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
