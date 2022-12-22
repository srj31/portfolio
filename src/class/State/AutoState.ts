import { Avatar } from '../../objects/Characters/Avatar'
import { ButtonInteraction } from '../../objects/Interaction'
import { InteractionKeys } from '../../types/keys'
import { vectorPoints } from './constants'
import { ManualState } from './ManualState'
import { State } from './State'

export class AutoState extends State {
  points = vectorPoints
  curPoint = 0
  path = new Phaser.Curves.Path(vectorPoints[0].x, vectorPoints[0].y)
  delta_time = 1
  duration = 1700
  t = 0
  t_enter_pressed_at = 0
  constructor(avatar: Avatar) {
    super(avatar)
    vectorPoints.forEach((point) => {
      this.path.lineTo(point)
    })
  }

  public getStateString() {
    return 'auto'
  }

  public handleMove(keys: InteractionKeys): void {
    if (ButtonInteraction.onButton) {
      // can be two things now you either press it or unpress it
      const buttonPressed = ButtonInteraction.buttonPressed
      if (buttonPressed) {
        if (keys.keyEnter.isDown) {
          buttonPressed.unPressButton()
          this.avatar.startMovement()
          this.t_enter_pressed_at = this.t
        }
      } else {
        const delta_threshold = 20.0
        if (this.t - this.t_enter_pressed_at > delta_threshold) {
          ButtonInteraction.onButton.pressButton()
          this.avatar.stopMovement()
        }
      }
    } else {
      const buttonPressed = ButtonInteraction.buttonPressed
      if (buttonPressed) {
        buttonPressed.unPressButton()
        this.avatar.startMovement()
      }
    }

    if (this.avatar.can_move) {
      this.t += this.delta_time

      if (this.t >= this.duration) {
        //  Reached the end
        this.avatar.player.setVelocity(0, 0)
        this.avatar.stopMovement()
        this.avatar.setAvatar_State(new ManualState(this.avatar))
        this.avatar.startMovement()
      } else {
        var d = this.t / this.duration
        var cur_pos = new Phaser.Math.Vector2({
          x: this.avatar.player.x,
          y: this.avatar.player.y,
        })
        var new_pos = this.path.getPoint(d)
        this.animate(cur_pos, new_pos)
        this.avatar.player.setPosition(new_pos.x, new_pos.y)
      }
    }
  }

  private animate(cur_pos: Phaser.Math.Vector2, new_pos: Phaser.Math.Vector2) {
    // check which direction it is moving;
    if (cur_pos.x < new_pos.x) {
      this.avatar.player.anims.play('right', true)
    } else if (cur_pos.x > new_pos.x) {
      this.avatar.player.anims.play('left', true)
    } else if (cur_pos.y < new_pos.y) {
      this.avatar.player.anims.play('down', true)
    } else if (cur_pos.y > new_pos.y) {
      this.avatar.player.anims.play('up', true)
    }
  }
}
