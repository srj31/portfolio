import Phaser from 'phaser'
import { Avatar } from '../objects/Avatar'
import { ButtonInteraction } from '../objects/Interaction'
import { createWorld } from './helper'

var keyA!: Phaser.Input.Keyboard.Key
var keyS!: Phaser.Input.Keyboard.Key
var keyD!: Phaser.Input.Keyboard.Key
var keyW!: Phaser.Input.Keyboard.Key
var keyEnter!: Phaser.Input.Keyboard.Key

export default class MainScene extends Phaser.Scene {
  avatar!: Avatar
  mapHeight = 1270
  mapWidth = 1920

  constructor() {
    super('MainScene')
  }

  preload() {
    this.load.spritesheet('avatar', 'assets/sprite/avatar1.png', {
      frameWidth: 64,
      frameHeight: 64,
    })
    this.load.tilemapTiledJSON('map', 'assets/map1.json')

    this.load.spritesheet('base_out_atlas', 'assets/base_out_atlas.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('obj_misk_atlas', 'assets/obj_misk_atlas.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('terrain_atlas', 'assets/terrain_atlas.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('build_atlas', 'assets/build_atlas.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.spritesheet('desert-ruins', 'assets/desert-ruins.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
  }

  create() {
    this.avatar = new Avatar(
      this,
      this.mapWidth / 2,
      this.mapHeight / 2,
      'avatar',
      0,
    )
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

    ButtonInteraction.avatar = this.avatar

    this.avatar.player.depth = 1
    this.physics.add.existing(this.avatar.player)

    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tileset1 = map.addTilesetImage('terrain_atlas', 'terrain_atlas')
    const tileset2 = map.addTilesetImage('build_atlas', 'build_atlas')
    const tileset3 = map.addTilesetImage('desert-ruins', 'desert-ruins')
    const tileset4 = map.addTilesetImage('obj_misk_atlas', 'obj_misk_atlas')
    const tileset5 = map.addTilesetImage('base_out_atlas', 'base_out_atlas')

    const tilesets = [tileset1, tileset2, tileset3, tileset4, tileset5]

    const worldLayers = createWorld(this, this.avatar.player, map, tilesets)

    this.cameras.main
      .setBounds(0, 0, this.mapWidth, this.mapHeight)
      .setName('main')
    this.physics.world.setBounds(0, 0, this.mapWidth, this.mapHeight)
    this.cameras.main.startFollow(this.avatar.player, false, 0.5, 0.5)
    this.cameras.main.centerOn(this.mapWidth / 2, this.mapHeight / 2)
    this.cameras.main.roundPixels = true
  }

  update() {
    this.avatar.update(keyA, keyD, keyS, keyW, keyEnter)
  }
}
