import { Avatar } from '../../objects/Characters/Avatar'
import { InteractionKeys } from '../../types/keys'

export abstract class State {
  avatar: Avatar // the context

  constructor(avatar: Avatar) {
    this.avatar = avatar
  }

  public abstract getStateString(): string

  public abstract handleMove(keys: InteractionKeys): void
}
