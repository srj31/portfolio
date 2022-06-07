import { Scene } from 'phaser'
import { WorldLayer } from '../types/world'

export const createWorldLayers = (
  scene: Phaser.Scene,
  sprite: Phaser.Physics.Arcade.Sprite,
  map: Phaser.Tilemaps.Tilemap,
  tilesets: Phaser.Tilemaps.Tileset[],
): WorldLayer => {
  const backgroundlayer = map.createLayer('background', tilesets, 0, 0)
  const pathlayer = map.createLayer('path', tilesets, 0, 0)
  const dirtlayer = map.createLayer('dirt', tilesets, 0, 0)
  const boundarylayer = map.createLayer('boundary', tilesets, 0, 0)
  const dirtpathlayer = map.createLayer('dirt_path', tilesets, 0, 0)

  const decorCollidable = map.createLayer('decorCollidable', tilesets, 0, 0)
  const decorUncollidable = map.createLayer('decorUncollidable', tilesets, 0, 0)

  addGroupFromTiled(scene, map, sprite, 'pillar', tilesets, false, 100)

  addGroupFromTiled(scene, map, sprite, 'pillarCollide', tilesets, true, 100)

  addGroupFromTiled(scene, map, sprite, 'statue', tilesets, false, 100)

  addGroupFromTiled(scene, map, sprite, 'statueCollide', tilesets, true, 100)

  addGroupFromTiled(scene, map, sprite, 'button', tilesets, false, 0)

  // map

  const world = { backgroundlayer, dirtlayer, boundarylayer, pathlayer }
  scene.physics.add.collider(sprite, boundarylayer)
  boundarylayer.setCollision([100, 101, 102, 103, 104, 398])

  // jungle pillars
  boundarylayer.setCollisionBetween(398, 500)

  scene.physics.add.collider(sprite, decorCollidable)
  decorCollidable.setCollisionBetween(0, 1000)
  return world
}

const addGroupFromTiled = (
  scene: Phaser.Scene,
  map: Phaser.Tilemaps.Tilemap,
  sprite: Phaser.Physics.Arcade.Sprite,
  objectLayerName: string,
  tilesets: Phaser.Tilemaps.Tileset[],
  collidable: boolean,
  depth: number,
) => {
  const group = scene.physics.add.staticGroup({})
  const objectLayer = map.getObjectLayer(objectLayerName)
  objectLayer.objects.forEach((object) => {
    const actualX = object.x! + object.width! * 0.5
    const actualY = object.y! - object.height! * 0.5

    const fromTileset = findCorrectTileset(tilesets, object.gid!)
    if (fromTileset) {
      group
        .get(
          actualX,
          actualY,
          fromTileset.name,
          object.gid! - fromTileset.firstgid,
        )
        .setDepth(depth)
    }
  })

  if (sprite && collidable) {
    scene.physics.add.collider(sprite, [group], undefined, undefined, this)
  }
}

const findCorrectTileset = (
  tilesets: Phaser.Tilemaps.Tileset[],
  objectGid: number,
) => {
  let correctTileset: Phaser.Tilemaps.Tileset | null = null
  console.log(tilesets)
  const arrayLength = tilesets.length
  for (let i = 0; i < arrayLength; i++) {
    const curTileset = tilesets[i]
    if (curTileset.firstgid <= objectGid) {
      if (correctTileset === null) correctTileset = curTileset
      else {
        correctTileset =
          curTileset.firstgid > correctTileset.firstgid
            ? curTileset
            : correctTileset
      }
    }
  }

  return correctTileset
}
