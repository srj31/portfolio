import { InteractionKeys } from '../../types/keys'
import { AutoState } from './AutoState'
import { ManualState } from './ManualState'
import { State } from './State'

export class StartState extends State {
  public handleMove(keys: InteractionKeys): void {
    if (keys.keyEnter.isDown) {
      this.avatar.setAvatar_State(new AutoState(this.avatar))
    }
    if (keys.keyE.isDown) {
      this.avatar.setAvatar_State(new ManualState(this.avatar))
    }
  }
}
