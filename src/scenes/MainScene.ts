import Phaser from 'phaser'
import { Avatar } from '../objects/Avatar'
import { createWorldLayers } from './helper'

var cursors: Phaser.Types.Input.Keyboard.CursorKeys

export default class MainScene extends Phaser.Scene {
  avatar!: Avatar
  mapHeight = 1270
  mapWidth = 1920
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
    this.avatar = new Avatar(
      this,
      window.innerWidth / 2,
      window.innerHeight / 2,
      'avatar',
      0,
    )
    this.avatar.player.depth = 1
    this.physics.add.existing(this.avatar.player)

    cursors = this.input.keyboard.createCursorKeys()

    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tileset = map.addTilesetImage('terrain_atlas', 'tiles')
    const worldLayer = createWorldLayers(this, this.avatar.player, map, tileset)

    this.cameras.main
      .setBounds(0, 0, this.mapWidth, this.mapHeight)
      .setName('main')
    this.physics.world.setBounds(0, 0, this.mapWidth, this.mapHeight)
    this.cameras.main.startFollow(this.avatar.player, false, 0.2, 0.2)
  }

  update() {
    this.avatar.update(cursors)
  }
}
