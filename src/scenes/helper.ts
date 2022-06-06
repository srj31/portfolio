import { Scene } from 'phaser'
import { WorldLayer } from '../types/world'

export const createWorldLayers = (
  scene: Phaser.Scene,
  sprite: Phaser.Physics.Arcade.Sprite,
  map: Phaser.Tilemaps.Tilemap,
  tileset: Phaser.Tilemaps.Tileset,
  tileset2: Phaser.Tilemaps.Tileset,
  tileset3: Phaser.Tilemaps.Tileset,
): WorldLayer => {
  const backgroundlayer = map.createLayer(
    'background',
    [tileset, tileset2, tileset3],
    0,
    0,
  )
  const pathlayer = map.createLayer('path', [tileset, tileset2, tileset3], 0, 0)
  const dirtlayer = map.createLayer('dirt', [tileset, tileset2, tileset3], 0, 0)
  const boundarylayer = map.createLayer(
    'boundary',
    [tileset, tileset2, tileset3],
    0,
    0,
  )
  const dirtpathlayer = map.createLayer(
    'dirt_path',
    [tileset, tileset2, tileset3],
    0,
    0,
  )

  const decorCollidable = map.createLayer(
    'decorCollidable',
    [tileset, tileset2, tileset3],
    0,
    0,
  )
  const decorUncollidable = map.createLayer(
    'decorUncollidable',
    [tileset, tileset2, tileset3],
    0,
    0,
  )

  addGroupFromTiled(scene, map, sprite, 'pillar', 'desert-ruins', false, 100)

  addGroupFromTiled(
    scene,
    map,
    sprite,
    'pillarCollide',
    'desert-ruins',
    true,
    100,
  )

  addGroupFromTiled(scene, map, sprite, 'statue', 'desert-ruins', false, 100)

  addGroupFromTiled(
    scene,
    map,
    sprite,
    'statueCollide',
    'desert-ruins',
    true,
    100,
  )

  addGroupFromTiled(scene, map, sprite, 'button', 'desert-ruins', false, 0)

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
  tilesetName: string,
  collidable: boolean,
  depth: number,
) => {
  const group = scene.physics.add.staticGroup({})
  const objectLayer = map.getObjectLayer(objectLayerName)
  objectLayer.objects.forEach((object) => {
    const actualX = object.x! + object.width! * 0.5
    const actualY = object.y! - object.height! * 0.5

    console.log(object.gid!, map.getTileset(tilesetName).firstgid)

    group
      .get(
        actualX,
        actualY,
        tilesetName,
        object.gid! - map.getTileset(tilesetName).firstgid,
      )
      .setDepth(depth)
  })

  console.log(objectLayer)
  console.log(group)
  if (sprite && collidable) {
    scene.physics.add.collider(sprite, [group], undefined, undefined, this)
  }
}
