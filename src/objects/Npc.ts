// GameObject avatar
import Phaser, { GameObjects } from 'phaser'
import { Overlapable } from '../class/Overlapable/Overlapable'

export class Npc extends Phaser.Physics.Arcade.Sprite implements Overlapable {
  y_offset = 0
  private dialogBox!: Phaser.GameObjects.Container

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    key: string,
    frame: string | number,
  ) {
    super(scene, x, y, key, frame)
    scene.physics.world.enable(this)
    this.body.immovable = true
    scene.add.existing(this)
    scene.add.sprite(x, y, key)

    this.setScale(0.7)
    this.scene = scene
    this.setPosition(x, y)
    this.setTexture(key)
    this.setFrame(frame)
    this.dialogBox = this.scene.add.container().setDepth(1000)


    scene.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(key, { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'still',
      frames: [{ key: key, frame: 0 }],
      frameRate: 20,
    })

    scene.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(key, { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers(key, { start: 12, end: 16 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers(key, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    this.setCollideWorldBounds(true)
    this.setBounce(0)
    scene.time.addEvent({
      delay: 1000, // ms
      callback: this.setCorrectBounds,
      callbackScope: this,
      loop: false,
    })
  }
  setCorrectBounds() {
    this.body.setSize(0.5 * this.width, 0.5 * this.height, true)
    this.body.setOffset(20, 5)
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
  }

  onOverlapDialog() {
    this.setDialogBox('Press E to interact')
  }

  update() {
    this.body.debugBodyColor = this.body.touching.none ? 0x0099ff : 0xff9900
  }
}
