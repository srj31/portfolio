export default class Button extends Phaser.Physics.Arcade.Sprite {
  id!: string
  isPressed: boolean
  private dialogBox!: Phaser.GameObjects.Container

  constructor(
    id: string,
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | number,
  ) {
    super(scene, x, y, texture, frame)
    this.id = id
    this.isPressed = false
  }
  // add texts in the dialog box container
  setDialogBox(text: string) {
    const innerText = this.scene.add
      .text(0, 0, text)
      .setFontFamily('Arial')
      .setFontSize(12)
      .setColor('#000000')

    //set the size of the dialog box
    const dialogBoxWidth = innerText.width + 4
    const dialogBoxHeight = innerText.height + 2

    //play around with the values to see what they do
    const dialogBoxX = this.x - dialogBoxWidth * 0.5
    const dialogBoxY = this.y - this.height * 0.5

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
    this.dialogBox.add(innerText.setPosition(dialogBoxX + 2, dialogBoxY))
  }

  // remove everything in the dialog box container
  clearDialogBox() {
    this.dialogBox.removeAll(true)
  }

  pressButton() {
    this.isPressed = true
  }

  unPressButton() {
    this.isPressed = false
  }
}
