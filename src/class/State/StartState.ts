import { AutoState } from './AutoState'
import { ManualState } from './ManualState'
import { State } from './State'

export class StartState extends State {
  public handleMove(
    keyA: Phaser.Input.Keyboard.Key,
    keyD: Phaser.Input.Keyboard.Key,
    keyS: Phaser.Input.Keyboard.Key,
    keyW: Phaser.Input.Keyboard.Key,
    keyE: Phaser.Input.Keyboard.Key,
    keyEnter: Phaser.Input.Keyboard.Key,
  ): void {
    if (keyEnter.isDown) {
      this.avatar.setAvatar_State(new AutoState(this.avatar))
    }
    if (keyE.isDown) {
      this.avatar.setAvatar_State(new ManualState(this.avatar))
    }
  }
}
