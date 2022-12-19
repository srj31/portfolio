import { InteractionKeys } from '../types/keys'
import { Avatar } from './Avatar'

export default class PlayerSelector extends Phaser.GameObjects.Zone {
  objectInZone?: any

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    super(scene, x, y, width, height)
    scene.physics.add.existing(this)
  }

  update(avatar: Avatar, keys: InteractionKeys) {
    if (!keys) return

    if (avatar.avatar_state.getStateString() == 'auto') {
      return
    }

    const { x, y } = avatar
    if (avatar.can_move) {
      if (keys.keyA.isDown) {
        this.setPosition(x - 32, y)
      } else if (keys.keyD.isDown) {
        this.setPosition(x + 32, y)
      } else if (keys.keyS.isDown) {
        this.setPosition(x, y - 32)
      } else if (keys.keyW.isDown) {
        this.setPosition(x, y + 32)
      }
    }

    if (this.objectInZone) {
      if (!this.scene.physics.overlap(this, this.objectInZone)) {
        this.objectInZone = undefined
      }
    }
  }
}
