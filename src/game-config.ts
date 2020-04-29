/**
 * @license MIT
 * @see github.com/michaelhogg/sdsim
 */

//----------------------------------------------------------------------//
//                          Game configuration                          //
//----------------------------------------------------------------------//

interface GameConfig {
  AVERAGE_FPS: number,
  SPAWN_INTERVAL_FRAMES: {
    SHOPPER:   number,
    RESTOCKER: number
  },
  WORLD: {
    WIDTH:  number,
    HEIGHT: number,
    BOUNDS: {
      MARGIN: number,
      LEFT:   number,
      TOP:    number,
      WIDTH:  number,
      HEIGHT: number
    }
  },
  SHELVES: {
    X: {
      LEFT:   number,
      MIDDLE: number,
      RIGHT:  number
    },
    Y: {
      UPPER: number,
      LOWER: number
    }
  },
  SHELF: {
    WIDTH:        number,
    HEIGHT:       number,
    LABEL_MARGIN: number,
    SLOTS: {
      TOTAL:         number,
      PER_ROW:       number,
      WIDTH_HEIGHT:  number,
      GRID_INTERVAL: number,
      MARGIN: {
        LEFT: number,
        TOP:  number
      }
    }
  },
  PERSON: {
    RADIUS:          number,
    MAX_VELOCITY:    number,
    WARNING_OUTLINE: number,
    NAME_POSITION:   {
      LEFT: number,
      TOP:  number
    },
    BASKET_SLOTS: {
      LEFT:          number,
      TOP:           number,
      WIDTH_HEIGHT:  number,
      GRID_INTERVAL: number,
      OUTLINE:       number
    },
    TARGET_PROXIMITY: number
  },
  SHOPPER: {
    INITIAL_VELOCITY: [number, number]
  },
  RESTOCKER: {
    INITIAL_VELOCITY:   [number, number],
    TOTAL_BASKET_SLOTS: number
  },
  PPL: {  // PersonPairLine
    ALPHA_DISTANCE: {
      MIN: number,
      MAX: number
    },
    THICKNESS_DISTANCE: {
      MIN: number,
      MAX: number
    },
    THICKNESS_MULTIPLIER: number,
    THICKNESS_EXPONENT:   number,
    WARNING_DISTANCE:     number
  },
  FORCES: {
    TARGET_MULTIPLIER:       number,
    OTHER_PERSON_MULTIPLIER: number,
    OTHER_PERSON_EXPONENT:   number
  },
  LOCATIONS: {
    ENTRANCE: {
      LABEL: [number, number],
      SPAWN: [number, number]
    },
    CHECKOUT: {
      LABEL:  [number, number],
      TARGET: [number, number]
    },
    STOREROOM: {
      LABEL:  [number, number],
      TARGET: [number, number]
    }
  },
  TEXT_SIZES: {
    LOCATION: number,
    PERSON:   number,
    SHELF:    number
  }
}

const GAME_CONFIG: GameConfig = require('./game-config.json');

export default GAME_CONFIG;
