import { ButtonInteraction } from '../../objects/Interaction'
import { InteractionKeys } from '../../types/keys'
import { State } from './State'

export class ManualState extends State {
  lastWalkingKey?: Phaser.Input.Keyboard.Key
  public getStateString(): string {
    return 'manual'
  }
  public handleMove(keys: InteractionKeys): void {
    this.avatar.player.setVelocity(0, 0)
    if (this.avatar.can_move) {
      if (keys.keyA.isDown) {
        if (!this.avatar.scene.walkingSound.isPlaying) {
          console.log('moving')
          this.avatar.scene.walkingSound.play()
        }
        this.avatar.player.setVelocityX(-this.avatar.speed)
        this.lastWalkingKey = keys.keyA
        this.avatar.player.anims.play('left', true)
      } else if (keys.keyS.isDown) {
        if (!this.avatar.scene.walkingSound.isPlaying) {
          this.avatar.scene.walkingSound.play()
        }
        this.avatar.player.setVelocityY(this.avatar.speed)
        this.lastWalkingKey = keys.keyS
        this.avatar.player.anims.play('down', true)
      } else if (keys.keyD.isDown) {
        if (!this.avatar.scene.walkingSound.isPlaying) {
          this.avatar.scene.walkingSound.play()
        }
        this.avatar.player.setVelocityX(this.avatar.speed)
        this.lastWalkingKey = keys.keyD
        this.avatar.player.anims.play('right', true)
      } else if (keys.keyW.isDown) {
        if (!this.avatar.scene.walkingSound.isPlaying) {
          this.avatar.scene.walkingSound.play()
        }
        this.avatar.player.setVelocityY(-this.avatar.speed)
        this.lastWalkingKey = keys.keyW
        this.avatar.player.anims.play('up', true)
      } else {
        var stillAnimationType = 'still'
        switch (this.lastWalkingKey) {
          case keys.keyA: {
            stillAnimationType = 'still_left'
            break
          }
          case keys.keyD: {
            stillAnimationType = 'still_right'
            break
          }

          case keys.keyW: {
            stillAnimationType = 'still_up'
            break
          }

          default: {
            stillAnimationType = 'still'
          }
        }
        this.avatar.player.scene.time.delayedCall(
          0.15 * 1000,
          () => {
            this.avatar.player.anims.play(stillAnimationType, true)
            this.avatar.scene.walkingSound.stop()
          },
          [],
          this.avatar.player,
        )
      }
    } else {
      this.avatar.player.scene.time.delayedCall(
        0.01 * 1000,
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
