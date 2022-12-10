import { animated } from 'react-spring'
import { Avatar } from '../../objects/Avatar'
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
  constructor(avatar: Avatar) {
    super(avatar)
    vectorPoints.forEach((point) => {
      this.path.lineTo(point)
    })
  }

  public handleMove(
    keyA: Phaser.Input.Keyboard.Key,
    keyD: Phaser.Input.Keyboard.Key,
    keyS: Phaser.Input.Keyboard.Key,
    keyW: Phaser.Input.Keyboard.Key,
  ): void {

    this.t += this.delta_time

    if (this.t >= this.duration) {
      //  Reached the end
      this.avatar.player.setVelocity(0, 0)
      this.avatar.player.scene.time.delayedCall(
        0.15 * 1000,
        () => this.avatar.player.anims.play('still', true),
        [],
        this.avatar.player,
      )
      this.avatar.setAvatar_State(new ManualState(this.avatar));
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
