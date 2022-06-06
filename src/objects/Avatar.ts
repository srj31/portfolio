// GameObject avatar
import Phaser from 'phaser'

export class Avatar extends Phaser.Physics.Arcade.Sprite {
  player!: Phaser.Physics.Arcade.Sprite
  speed = 200
  y_offset = 15
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    key: string,
    frame: string | number,
  ) {
    super(scene, x, y, key, frame)
    const player = scene.physics.add.sprite(x, y, key)
    player.setScale(0.75)
    this.scene = scene
    this.setPosition(x, y)
    this.setTexture(key)
    this.setFrame(frame)
    scene.physics.add.existing(player)

    scene.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('avatar', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'still',
      frames: [{ key: 'avatar', frame: 0 }],
      frameRate: 20,
    })

    scene.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('avatar', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('avatar', { start: 12, end: 16 }),
      frameRate: 10,
      repeat: -1,
    })

    scene.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('avatar', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    player.setCollideWorldBounds(true)
    player.setBounce(1)
    scene.time.addEvent({
      delay: 1000, // ms
      callback: this.setCorrectBounds,
      callbackScope: this,
      loop: false,
    })
    this.player = player
    return this
  }

  setCorrectBounds() {
    this.player.body.setSize(
      0.5 * this.player.width,
      0.75 * this.player.height,
      true,
    )
    this.player.body.offset.y = this.y_offset
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    this.player.setVelocity(0, 0)
    if (cursors.left.isDown) {
      this.player.setVelocityX(-this.speed)
      this.player.anims.play('left', true)
    } else if (cursors.down.isDown) {
      this.player.setVelocityY(this.speed)
      this.player.anims.play('down', true)
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(this.speed)
      this.player.anims.play('right', true)
    } else if (cursors.up.isDown) {
      this.player.setVelocityY(-this.speed)
      this.player.anims.play('up', true)
    } else {
      this.player.scene.time.delayedCall(
        0.15 * 1000,
        () => this.player.anims.play('still', true),
        [],
        this.player,
      )
    }
  }
}
