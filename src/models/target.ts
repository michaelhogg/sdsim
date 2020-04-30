/**
 * @license MIT
 * @see github.com/michaelhogg/sdsim
 */

//----------------------------------------------------------------------//
//                            Exported class                            //
//----------------------------------------------------------------------//

/**
 * A Target represents a location in 2D space (a ProductShelf, the Checkout, or the Storeroom)
 * which a Person (a Shopper or a Restocker) is trying to get to.
 */
export default class Target {

  //-----------------------------  Fields  -----------------------------//

  /** @see photonstorm.github.io/phaser3-docs/Phaser.Math.Vector2.html */
  public readonly position: Phaser.Math.Vector2;


  //--------------------------  Constructor  ---------------------------//

  public constructor(x: number, y: number) {

    /** @see photonstorm.github.io/phaser3-docs/Phaser.Math.Vector2.html#Vector2 */
    this.position = new Phaser.Math.Vector2(x, y);

  }

}
