import Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  preload() {
    this.load.image('tiles', 'assets/terrain_atlas.png')
    this.load.tilemapTiledJSON('map', 'assets/map1.json')
  }

  create() {
    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tilset = map.addTilesetImage('terrain_atlas', 'tiles')
    const layer = map.createLayer('background', tilset, 0, 0)
    const dirtlayer = map.createLayer('dirt', tilset, 0, 0)

  }
}
