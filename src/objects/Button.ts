import { Overlapable } from '../class/Overlapable/Overlapable'
import { ButtonInteraction } from './Interaction'

export default class Button extends Phaser.Physics.Arcade.Sprite
  implements Overlapable {
  id!: number
  isPressed: boolean
  private dialogBox!: Phaser.GameObjects.Container
  messageShownWhenPressed!: JSX.Element

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | number,
  ) {
    super(scene, x, y, texture, frame)
    this.isPressed = false
    this.dialogBox = this.scene.add.container().setDepth(1000)
  }
  // add texts in the dialog box container
  setMessage(message: JSX.Element) {
    this.messageShownWhenPressed = message
  }

  setDialogBox(text: string) {
    const innerText = this.scene.add
      .text(0, 0, text)
      .setFontFamily('Arial')
      .setFontSize(12)
      .setColor('#000000')

    //set the size of the dialog box
    const dialogBoxWidth = innerText.width + 20
    const dialogBoxHeight = innerText.height + 10

    //play around with the values to see what they do
    const dialogBoxX = this.x - dialogBoxWidth * 0.5
    const dialogBoxY = this.y - this.height * 0.75

    this.dialogBox.add(
      this.scene.add
        .graphics()
        .fillStyle(0xffffff, 1)
        .fillRoundedRect(
          dialogBoxX,
          dialogBoxY,
          dialogBoxWidth,
          dialogBoxHeight,
          3,
        )
        .lineStyle(1.5, 0x000000, 1)
        .strokeRoundedRect(
          dialogBoxX,
          dialogBoxY,
          dialogBoxWidth,
          dialogBoxHeight,
          3,
        ),
    )
    this.dialogBox.add(innerText.setPosition(dialogBoxX + 10, dialogBoxY + 5))
  }

  // remove everything in the dialog box container
  clearDialogBox() {
    this.dialogBox.removeAll(true)
    ButtonInteraction.onButton = null
  }

  onOverlapDialog() {
    // this.setDialogBox('Press E to interact')
    ButtonInteraction.onButton = this
  }

  pressButton() {
    this.isPressed = true

    /*
        Open a React Modal to display the message
    */
    ButtonInteraction.pressButton(this)
  }

  unPressButton() {
    this.isPressed = false
    ButtonInteraction.unpressButton()
  }
}
