import { AutoState } from './AutoState'
import { State } from './State'

export class StartState extends State {
  public handleMove(
    keyA: Phaser.Input.Keyboard.Key,
    keyD: Phaser.Input.Keyboard.Key,
    keyS: Phaser.Input.Keyboard.Key,
    keyW: Phaser.Input.Keyboard.Key,
    keyEnter: Phaser.Input.Keyboard.Key,
  ): void {
    if(keyEnter.isDown) {
        this.avatar.setAvatar_State(new AutoState(this.avatar));
    }
  }
}
