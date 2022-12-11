import { Avatar } from '../../objects/Avatar'

export abstract class State {
  avatar: Avatar // the context

  constructor(avatar: Avatar) {
    this.avatar = avatar
  }

  public abstract handleMove(
    keyA: Phaser.Input.Keyboard.Key,
    keyD: Phaser.Input.Keyboard.Key,
    keyS: Phaser.Input.Keyboard.Key,
    keyW: Phaser.Input.Keyboard.Key,
    keyEnter: Phaser.Input.Keyboard.Key,
    keyE: Phaser.Input.Keyboard.Key,
  ): void
}
