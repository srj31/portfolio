import Button from '../objects/Button'
import { WorldLayer } from '../types/world'
import { data } from '../Info'
import { ReactElement } from 'react'
import { Npc } from '../objects/Characters/Npc'
import { Avatar } from '../objects/Characters/Avatar'

export const createWorld = (
  scene: Phaser.Scene,
  avatar: Avatar,
  sprite: Phaser.Physics.Arcade.Sprite,
  npc_sprites: Npc[],
  map: Phaser.Tilemaps.Tilemap,
  tilesets: Phaser.Tilemaps.Tileset[],
): WorldLayer => {
  const layerIds = [
    'background',
    'path',
    'dirt',
    'boundary',
    'dirt_path',
    'decorCollidable',
    'decorUncollidable',
  ]
  const layers = createLayers(map, layerIds, tilesets)

  const {
    backgroundlayer,
    pathlayer,
    dirtlayer,
    boundarylayer,
    decorCollidablelayer,
  } = layers

  addGroupFromTiled(scene, map, sprite, 'pillar', tilesets, false, 100)

  addGroupFromTiled(scene, map, sprite, 'pillarCollide', tilesets, true, 100)

  addGroupFromTiled(scene, map, sprite, 'statue', tilesets, false, 100)

  addGroupFromTiled(scene, map, sprite, 'statueCollide', tilesets, true, 100)

  // handle Collision with npc
  scene.physics.add.collider(sprite, npc_sprites)
  scene.physics.add.collider(
    avatar.playerSelector,
    npc_sprites,
    handleCollisionWithNPC,
    undefined,
    this,
  )

  const textObject = map.getObjectLayer('text')
  textObject.objects.forEach((textObject) => {
    const actualX = textObject.x! + textObject.width! * 0.1
    const actualY = textObject.y! + textObject.height! * 0.5
    if (textObject.text) {
      scene.add
        .text(actualX, actualY, textObject.text.text, {
          align: 'center',
          fontSize: '1.3rem',
          fontFamily: 'VT323',
          backgroundColor: 'rgb(1,1,1, 0.25)',
          padding: {
            x: 5,
            y: 5,
          },
          wordWrap: {
            width: 125,
          },
        })
        .setDepth(100)
    }
  })

  // buttons
  const buttons = scene.physics.add.staticGroup({ classType: Button })
  const buttonLayer = map.getObjectLayer('button')
  buttonLayer.objects.forEach((buttonObj) => {
    const item = addObjectFromTiled(buttons, buttonObj, tilesets, 0) as Button
    item.id = buttonObj.id
    let message: ReactElement
    if (buttonObj.properties && buttonObj.properties.length > 0) {
      message = data[buttonObj.properties[0].value]
    } else {
      message = <div>{buttonObj.id.toString()}</div>
    }
    item.messageShownWhenPressed = message
  })

  addOverlapInteraction(scene, sprite, [buttons])

  // map
  const world = { backgroundlayer, dirtlayer, boundarylayer, pathlayer }
  scene.physics.add.collider(sprite, boundarylayer)
  boundarylayer.setCollision([100, 101, 102, 103, 104, 398])

  // jungle pillars
  boundarylayer.setCollisionBetween(398, 500)

  scene.physics.add.collider(sprite, decorCollidablelayer)
  decorCollidablelayer.setCollisionBetween(0, 1000)
  return world
}

const handleCollisionWithNPC = (selector: any, npc: any) => {
  selector.objectInZone = npc
  npc.onOverlapDialog()
}

const addOverlapInteraction = (
  scene: Phaser.Scene,
  sprite: Phaser.Physics.Arcade.Sprite,
  groups: Phaser.Physics.Arcade.StaticGroup[] | Phaser.Physics.Arcade.Sprite[],
) => {
  scene.physics.add.overlap(sprite, groups, handleItemOverlap, undefined, scene)
}

const handleItemOverlap = (sprite: any, selectionItem: any) => {
  selectionItem.onOverlapDialog()
  setTimeout(() => {
    selectionItem.clearDialogBox()
  }, 500)
}

const createLayers = (
  map: Phaser.Tilemaps.Tilemap,
  layerIds: string[],
  tilesets: Phaser.Tilemaps.Tileset[],
) => {
  const layers: { [layerId: string]: Phaser.Tilemaps.TilemapLayer } = {}
  layerIds.forEach((layerId) => {
    layers[layerId + 'layer'] = map.createLayer(layerId, tilesets, 0, 0)
  })
  return layers
}

const addObjectFromTiled = (
  group: Phaser.Physics.Arcade.StaticGroup,
  object: Phaser.Types.Tilemaps.TiledObject,
  tilesets: Phaser.Tilemaps.Tileset[],
  depth: number,
) => {
  const fromTileset = findCorrectTileset(tilesets, object.gid!)
  const actualX = object.x! + object.width! * 0.5
  const actualY = object.y! - object.height! * 0.5
  if (fromTileset) {
    const obj = group
      .get(
        actualX,
        actualY,
        fromTileset.name,
        object.gid! - fromTileset.firstgid,
      )
      .setDepth(depth)
    return obj
  }
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

export const findCorrectTileset = (
  tilesets: Phaser.Tilemaps.Tileset[],
  objectGid: number,
) => {
  let correctTileset: Phaser.Tilemaps.Tileset | null = null
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
