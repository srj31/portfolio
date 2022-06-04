import { WorldLayer } from '../types/world'

export const createWorldLayers = (
  map: Phaser.Tilemaps.Tilemap,
  tileset: Phaser.Tilemaps.Tileset,
): WorldLayer => {
  const layer = map.createLayer('background', tileset, 0, 0)
  const dirtlayer = map.createLayer('dirt', tileset, 0, 0)
  const boundarylayer = map.createLayer('boundary', tileset, 0, 0)
  const pathlayer = map.createLayer('path', tileset, 0, 0)
  const world = { layer, dirtlayer, boundarylayer, pathlayer }
  return world
}
