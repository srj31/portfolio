import { Scene } from 'phaser'
import { WorldLayer } from '../types/world'

export const createWorldLayers = (
  scene: Phaser.Scene,
  sprite: Phaser.Physics.Arcade.Sprite,
  map: Phaser.Tilemaps.Tilemap,
  tileset: Phaser.Tilemaps.Tileset,
): WorldLayer => {
  const backgroundlayer = map.createLayer('background', tileset, 0, 0)
  const pathlayer = map.createLayer('path', tileset, 0, 0)
  const dirtlayer = map.createLayer('dirt', tileset, 0, 0)
  const boundarylayer = map.createLayer('boundary', tileset, 0, 0)

  const world = { backgroundlayer, dirtlayer, boundarylayer, pathlayer }
  scene.physics.add.collider(sprite, boundarylayer)
  boundarylayer.setCollision([100, 101, 102, 103, 104, 398])

  // jungle pillars
  boundarylayer.setCollisionBetween(398, 500)
  return world
}

// const addGroupFromTiled = (
//   scene: Phaser.Scene,
//   map: Phaser.Tilemaps.Tilemap,
//   objectLayerName: string,
//   key: string,
//   tilesetName: string,
//   sprite: Phaser.Physics.Arcade.Sprite,
//   collidable: boolean,
// ) => {
//   const group = scene.physics.add.staticGroup({})
//   const objectLayer = map.get(objectLayerName)
//   objectLayer.objects.forEach((object) => {
//     const actualX = object.x! + object.width! * 0.5
//     const actualY = object.y! - object.height! * 0.5
//     group
//       .get(
//         actualX,
//         actualY,
//         key,
//         object.gid! - map.getTileset(tilesetName).firstgid,
//       )
//       .setDepth(actualY)
//   })
//   if (sprite && collidable) {
//     scene.physics.add.collider(sprite, [group], undefined, undefined, this)
//   }
// }
