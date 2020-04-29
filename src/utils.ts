/**
 * @license MIT
 * @see github.com/michaelhogg/sdsim
 */

//----------------------------------------------------------------------//
//                          Exported functions                          //
//----------------------------------------------------------------------//

/**
 * Picks a random element from the specified array.
 */
export function pickRandomElementFromArray<T>(inputArray: T[]): T {

  return inputArray[
    Math.floor(
      Math.random() * inputArray.length
    )
  ];

}

/**
 * Creates a Phaser color from the specified HSL parameters. Valid ranges:
 *   -        hue: 0 to 360
 *   - saturation: 0 to 100
 *   -  lightness: 0 to 100
 * @see en.wikipedia.org/wiki/HSL_and_HSV
 */
export function hslColor(hue: number, saturation: number, lightness: number): number {

  /** @see photonstorm.github.io/phaser3-docs/Phaser.Display.Color.html#.HSLToColor */
  const displayColor: Phaser.Display.Color = Phaser.Display.Color.HSLToColor(
    hue        / 360,
    saturation / 100,
    lightness  / 100
  );

  /** @see photonstorm.github.io/phaser3-docs/Phaser.Display.Color.html#color */
  return displayColor.color;

}

/**
 * Creates a `Phaser.GameObjects.Rectangle`.
 */
export function makeRectangle(
  gof:        Phaser.GameObjects.GameObjectFactory,
  x:          number,
  y:          number,
  width:      number,
  height:     number,
  fillColor?: number
): Phaser.GameObjects.Rectangle {

  /** @see photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#rectangle */
  const rectangle: Phaser.GameObjects.Rectangle = gof.rectangle(x, y, width, height, fillColor);

  /**
   * @see photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Rectangle.html#setOrigin
   * @see photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.Origin.html
   */
  rectangle.setOrigin(0, 0);

  return rectangle;

}

/**
 * Creates a `Phaser.GameObjects.Text`.
 */
export function makeText(
  gof:        Phaser.GameObjects.GameObjectFactory,
  x:          number,
  y:          number,
  textString: string,
  fontSize:   number
): Phaser.GameObjects.Text {

  /** @see photonstorm.github.io/phaser3-docs/Phaser.Types.GameObjects.Text.html#.TextStyle */
  const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
    fontFamily: '"Arial", sans-serif',
    fontSize:   fontSize + 'px',
    color:      '#fff'
  };

  /** @see photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#text */
  const text: Phaser.GameObjects.Text = gof.text(x, y, textString, textStyle);

  return text;

}

/**
 * Calculates a force from `pointA` to `pointB`.
 *
 * If `forceExponent` is specified, then the force decreases as the distance increases.
 *
 * If `forceExponent` is not specified, then the force is unaffected by the distance.
 */
export function calculateTwoPointsForce(
  pointA:          Phaser.Math.Vector2,
  pointB:          Phaser.Math.Vector2,
  forceMultiplier: number,
  forceExponent?:  number
): Phaser.Math.Vector2 {

  let force: number = forceMultiplier;

  if (forceExponent) {

    /** @see photonstorm.github.io/phaser3-docs/Phaser.Math.Distance.html#.BetweenPoints */
    const distance: number = Phaser.Math.Distance.BetweenPoints(pointA, pointB);

    force = forceMultiplier / Math.pow(distance, forceExponent);

  }

  /** @see photonstorm.github.io/phaser3-docs/Phaser.Math.Angle.html#.BetweenPoints */
  const angle: number = Phaser.Math.Angle.BetweenPoints(pointA, pointB);

  const forceX: number = force * Math.cos(angle);
  const forceY: number = force * Math.sin(angle);

  /** @see photonstorm.github.io/phaser3-docs/Phaser.Math.Vector2.html#Vector2 */
  return new Phaser.Math.Vector2(forceX, forceY);

}
