import Phaser from 'phaser'
import { Avatar } from '../objects/Avatar'

var cursors: Phaser.Types.Input.Keyboard.CursorKeys

export default class MainScene extends Phaser.Scene {
  avatar!: Avatar
  constructor() {
    super('MainScene')
  }

  preload() {
    this.load.image('tiles', 'assets/terrain_atlas.png')
    this.load.tilemapTiledJSON('map', 'assets/map1.json')
    this.load.spritesheet('avatar', 'assets/sprite/avatar1.png', {
      frameWidth: 64,
      frameHeight: 64,
    })
  }

  create() {
    this.avatar = new Avatar(this, 450, 450, 'avatar', 0)
    this.avatar.player.depth = 1
    this.physics.add.existing(this.avatar.player)

    cursors = this.input.keyboard.createCursorKeys()

    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tilset = map.addTilesetImage('terrain_atlas', 'tiles')
    const layer = map.createLayer('background', tilset, 0, 0)
    const dirtlayer = map.createLayer('dirt', tilset, 0, 0)

    this.matter.world.setBounds(0, 0, window.innerWidth, window.innerHeight)
    this.cameras.main
      .setBounds(0, 0, window.innerWidth, window.innerHeight)
      .setName('main')
    this.cameras.main.startFollow(this.avatar, false, 0.2, 0.2)
  }

  update() {
    this.avatar.update(cursors)
  }
}
