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

    if (avatar.avatar_state.getStateString() === 'auto') {
      return
    }

    const { x, y } = avatar.player
    const velocity = avatar.player.body.velocity
    if (avatar.can_move) {
      if (velocity.x < 0) {
        this.setPosition(x - 32, y)
      } else if (velocity.x > 0) {
        this.setPosition(x + 32, y)
      } else if (velocity.y > 0) {
        this.setPosition(x, y + 32)
      } else if (velocity.y < 0) {
        this.setPosition(x, y - 32)
      }
    }

    if (this.objectInZone) {
      if (!this.scene.physics.overlap(this, this.objectInZone)) {
        this.objectInZone.clearDialogBox()
        this.objectInZone = undefined
      }
    }
  }
}
