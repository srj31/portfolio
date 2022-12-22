import Phaser from 'phaser'
import { EDUCATION_NPC_DIALOGS } from '../data/npc_dialogs'
import { Avatar } from '../objects/Characters/Avatar'
import { ButtonInteraction } from '../objects/Interaction'
import { Npc } from '../objects/Characters/Npc'
import { npcLocations } from './constants'
import { createWorld } from './helper'

var keyA!: Phaser.Input.Keyboard.Key
var keyS!: Phaser.Input.Keyboard.Key
var keyD!: Phaser.Input.Keyboard.Key
var keyW!: Phaser.Input.Keyboard.Key
var keyEnter!: Phaser.Input.Keyboard.Key
var keyE!: Phaser.Input.Keyboard.Key

export default class MainScene extends Phaser.Scene {
  avatar!: Avatar
  npcs!: Npc[]
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
    const npc_sprites = [1, 2, 3, 4]

    npc_sprites.forEach((num) => {
      this.load.spritesheet(`npc${num}`, `assets/sprite/npc${num}.png`, {
        frameWidth: 64,
        frameHeight: 64,
      })
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
    this.npcs = []

    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
    keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

    ButtonInteraction.avatar = this.avatar

    this.avatar.player.depth = 5
    this.physics.add.existing(this.avatar.player)

    npcLocations.forEach((pos, i) => {
      this.addNpcAtPos(pos, i + 1)
    })

    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tileset1 = map.addTilesetImage('terrain_atlas', 'terrain_atlas')
    const tileset2 = map.addTilesetImage('build_atlas', 'build_atlas')
    const tileset3 = map.addTilesetImage('desert-ruins', 'desert-ruins')
    const tileset4 = map.addTilesetImage('obj_misk_atlas', 'obj_misk_atlas')
    const tileset5 = map.addTilesetImage('base_out_atlas', 'base_out_atlas')

    const tilesets = [tileset1, tileset2, tileset3, tileset4, tileset5]

    const worldLayers = createWorld(
      this,
      this.avatar,
      this.avatar.player,
      this.npcs,
      map,
      tilesets,
    )

    this.cameras.main
      .setBounds(0, 0, this.mapWidth, this.mapHeight)
      .setName('main')
    this.physics.world.setBounds(0, 0, this.mapWidth, this.mapHeight)
    this.cameras.main.startFollow(this.avatar.player, false, 0.5, 0.5)
    this.cameras.main.centerOn(this.mapWidth / 2, this.mapHeight / 2)
    this.cameras.main.roundPixels = true
  }

  addNpcAtPos(pos: { x: number; y: number }, sprite_num: number) {
    const npc = new Npc(
      this,
      pos.x,
      pos.y,
      `npc${sprite_num}`,
      0,
      EDUCATION_NPC_DIALOGS,
    )
    this.npcs.push(npc)
    npc.depth = 1
    this.physics.add.existing(npc)
  }

  update() {
    this.avatar.update({ keyA, keyD, keyS, keyW, keyE, keyEnter })
  }
}
