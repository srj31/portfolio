import { Avatar } from './Avatar'
import Button from './Button'

// to allow us to keep track of the button pressed by the avatar

export class ButtonInteraction {
  static onButton: Button | null
  static buttonPressed: Button | null
  static avatar: Avatar
  static handleOpen: any
  static pressButton = (button: Button) => {
    ButtonInteraction.buttonPressed = button
    ButtonInteraction.handleOpen(true)
    console.log('pressed')
  }

  static unpressButton = () => {
    ButtonInteraction.buttonPressed = null
    ButtonInteraction.handleOpen(false)
    console.log('unpressed')
  }
}
