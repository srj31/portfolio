// GameObject avatar
import Phaser from 'phaser'
import { StartState } from '../class/State/StartState'
import { State } from '../class/State/State'
import { InteractionKeys } from '../types/keys'

export class Avatar extends Phaser.Physics.Arcade.Sprite {
  player!: Phaser.Physics.Arcade.Sprite
  avatar_state: State
  speed = 300
  y_offset = 15
  can_move = true
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    key: string,
    frame: string | number,
  ) {
    super(scene, x, y, key, frame)
    this.avatar_state = new StartState(this)
    const player = scene.physics.add.sprite(x, y, key)
    player.setScale(0.8)
    this.scene = scene
    this.setPosition(x, y)
    this.setTexture(key)
    this.setFrame(frame)
    scene.physics.add.existing(player)

    scene.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('avatar', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'still',
      frames: [{ key: 'avatar', frame: 0 }],
      frameRate: 20,
    })

    scene.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('avatar', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('avatar', { start: 12, end: 16 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('avatar', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    player.setCollideWorldBounds(true)
    player.setBounce(1)
    scene.time.addEvent({
      delay: 1000, // ms
      callback: this.setCorrectBounds,
      callbackScope: this,
      loop: false,
    })
    this.player = player
    return this
  }

  setAvatar_State(newState: State) {
    this.avatar_state = newState
  }

  setCorrectBounds() {
    this.player.body.setSize(
      0.5 * this.player.width,
      0.75 * this.player.height,
      true,
    )
    this.player.body.offset.y = this.y_offset
  }

  stopMovement() {
    this.can_move = false
    this.player.scene.time.delayedCall(
      0.05 * 1000,
      () => this.player.anims.play('still', true),
      [],
      this.player,
    )
  }

  startMovement() {
    this.can_move = true
  }

  update(keys: InteractionKeys) {
    this.avatar_state.handleMove(keys)
  }
}
