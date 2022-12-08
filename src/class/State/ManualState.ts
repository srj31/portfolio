import { State } from './State'

export class ManualState extends State {
  public handleMove(
    keyA: Phaser.Input.Keyboard.Key,
    keyD: Phaser.Input.Keyboard.Key,
    keyS: Phaser.Input.Keyboard.Key,
    keyW: Phaser.Input.Keyboard.Key,
  ): void {
    this.avatar.player.setVelocity(0, 0)
    if (this.avatar.can_move) {
      if (keyA.isDown) {
        this.avatar.player.setVelocityX(-this.avatar.speed)
        this.avatar.player.anims.play('left', true)
      } else if (keyS.isDown) {
        this.avatar.player.setVelocityY(this.avatar.speed)
        this.avatar.player.anims.play('down', true)
      } else if (keyD.isDown) {
        this.avatar.player.setVelocityX(this.avatar.speed)
        this.avatar.player.anims.play('right', true)
      } else if (keyW.isDown) {
        this.avatar.player.setVelocityY(-this.avatar.speed)
        this.avatar.player.anims.play('up', true)
      } else {
        this.avatar.player.scene.time.delayedCall(
          0.15 * 1000,
          () => this.avatar.player.anims.play('still', true),
          [],
          this.avatar.player,
        )
      }
    } else {
      this.avatar.player.scene.time.delayedCall(
        0.15 * 1000,
        () => this.avatar.player.anims.play('still', true),
        [],
        this.avatar.player,
      )
    }
  }
}
