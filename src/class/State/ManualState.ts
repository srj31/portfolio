import { ButtonInteraction } from '../../objects/Interaction'
import { InteractionKeys } from '../../types/keys'
import { State } from './State'

export class ManualState extends State {
  public getStateString(): string {
    return 'manual'
  }
  public handleMove(keys: InteractionKeys): void {
    this.avatar.player.setVelocity(0, 0)
    if (this.avatar.can_move) {
      if (keys.keyA.isDown) {
        this.avatar.player.setVelocityX(-this.avatar.speed)
        this.avatar.player.anims.play('left', true)
      } else if (keys.keyS.isDown) {
        this.avatar.player.setVelocityY(this.avatar.speed)
        this.avatar.player.anims.play('down', true)
      } else if (keys.keyD.isDown) {
        this.avatar.player.setVelocityX(this.avatar.speed)
        this.avatar.player.anims.play('right', true)
      } else if (keys.keyW.isDown) {
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
    if (ButtonInteraction.onButton) {
      // can be two things now you either press it or unpress it
      ButtonInteraction.onButton.pressButton()
    } else {
      const buttonPressed = ButtonInteraction.buttonPressed
      if (buttonPressed) {
        buttonPressed.unPressButton()
      }
    }
  }
}
