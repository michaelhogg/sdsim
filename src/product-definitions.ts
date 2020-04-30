/**
 * @license MIT
 * @see github.com/michaelhogg/sdsim
 */

//----------------------------------------------------------------------//
//                        Imported local modules                        //
//----------------------------------------------------------------------//

import GAME from './game-config';
import { hslColor } from './utils';


//----------------------------------------------------------------------//
//                         Exported interfaces                          //
//----------------------------------------------------------------------//

export interface ProductDefinition {
  name:   string;
  color:  number;
  shelfX: number;
  shelfY: number;
}


//----------------------------------------------------------------------//
//                          Exported constants                          //
//----------------------------------------------------------------------//

export const PRODUCT_DEFINITIONS: ProductDefinition[] = [
  { name: 'Fruit',        color: hslColor( 60, 100, 50), shelfX: GAME.SHELVES.X.LEFT,   shelfY: GAME.SHELVES.Y.UPPER },
  { name: 'Veg',          color: hslColor(120, 100, 30), shelfX: GAME.SHELVES.X.LEFT,   shelfY: GAME.SHELVES.Y.LOWER },
  { name: 'Meat',         color: hslColor( 30, 100, 50), shelfX: GAME.SHELVES.X.MIDDLE, shelfY: GAME.SHELVES.Y.UPPER },
  { name: 'Dairy',        color: hslColor(180, 100, 50), shelfX: GAME.SHELVES.X.MIDDLE, shelfY: GAME.SHELVES.Y.LOWER },
  { name: 'Handwash',     color: hslColor(220, 100, 60), shelfX: GAME.SHELVES.X.RIGHT,  shelfY: GAME.SHELVES.Y.UPPER },
  { name: 'Toilet rolls', color: hslColor(270, 100, 50), shelfX: GAME.SHELVES.X.RIGHT,  shelfY: GAME.SHELVES.Y.LOWER }
];
