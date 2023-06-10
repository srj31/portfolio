import { useEffect, useRef, useState } from 'react'
import './App.css'
import Info from './component/Info/Info'
import Modal from './component/Modal/Modal'
import { welcomeData } from './data/data'
import { ButtonInteraction } from './objects/Interaction'
import Sound from 'react-sound'

type PlayStatus = 'PLAYING' | 'STOPPED'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [modal, setModal] = useState(<div></div>)
  const [initialOpen, setInitialOpen] = useState<boolean>(true)
  const [playStatus, setPlayStatus] = useState<PlayStatus>('STOPPED')

  const ref = useRef<HTMLDivElement>(null)
  const keysToRemoveModal = ['Enter', 'e']

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
  const BgMusicButton = () => {
    const statusToImageMap: { [key in PlayStatus]: string } = {
      PLAYING: 'images/bg_music_on.png',
      STOPPED: 'images/bg_music_off.png',
    }

    const toggleMusic = () => {
      setPlayStatus((oldStatus) => {
        if (oldStatus == 'PLAYING') return 'STOPPED'
        else return 'PLAYING'
      })
    }
    return (
      <div className={'mute_button'}>
        <img
          width={'50vw'}
          src={statusToImageMap[playStatus]}
          onClick={toggleMusic}
        />
      </div>
    )
  }
  return (
    <div className="App">
      <Info />
      <BgMusicButton />
      <Sound
        url={'audio/bg_music.mp3'}
        playStatus={playStatus}
        loop={true}
        volume={2}
      />
      <div
        ref={ref}
        onKeyDown={(event) => {
          if (keysToRemoveModal.includes(event.key)) {
            setInitialOpen(false)
            setPlayStatus('PLAYING')
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
