const points = [
  { x: 960, y: 635 },
  { x: 200, y: 635 },
  { x: 200, y: 330 },
  { x: 350, y: 330 },
  { x: 350, y: 210 },
  { x: 560, y: 210 },
  { x: 560, y: 170 },
]

export const vectorPoints: Phaser.Math.Vector2[] = points.map(
  (point) => new Phaser.Math.Vector2(point),
)
