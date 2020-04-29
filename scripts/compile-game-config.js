/**
 * @license MIT
 * @see github.com/michaelhogg/sdsim
 */

//----------------------------------------------------------------------//
//                       Imported Node.js modules                       //
//----------------------------------------------------------------------//

const fs   = require('fs');    // @see nodejs.org/api/fs.html
const path = require('path');  // @see nodejs.org/api/path.html


//----------------------------------------------------------------------//
//                         Imported NPM modules                         //
//----------------------------------------------------------------------//

const stripJsonComments = require('strip-json-comments');  // @see www.npmjs.com/package/strip-json-comments


//----------------------------------------------------------------------//
//                              Constants                               //
//----------------------------------------------------------------------//

const INPUT_FILEPATH  = path.resolve(__dirname, '..', 'src', 'game-config.src.json');
const OUTPUT_FILEPATH = path.resolve(__dirname, '..', 'src', 'game-config.json');

const ROOT_KEY = 'GAME';  // A reference to the root of the Game Configuration object.


//----------------------------------------------------------------------//
//                       Compile the game config                        //
//----------------------------------------------------------------------//

function recursivelyEvaluateConfig(fullConfig, subConfig) {

  for (const key of Object.keys(subConfig)) {

    if (typeof subConfig[key] === 'object') {
      recursivelyEvaluateConfig(fullConfig, subConfig[key]);
    }

    if (typeof subConfig[key] === 'string') {
      const evaluator = new Function(ROOT_KEY, 'return ' + subConfig[key]);
      subConfig[key] = evaluator(fullConfig);
    }

  }

}

console.log('Reading ' + INPUT_FILEPATH);

const GAME_CONFIG = JSON.parse(
  stripJsonComments(
    fs.readFileSync(INPUT_FILEPATH, 'utf8')
  )
);

recursivelyEvaluateConfig(GAME_CONFIG, GAME_CONFIG);

console.log('Writing ' + OUTPUT_FILEPATH);

fs.writeFileSync(
  OUTPUT_FILEPATH,
  JSON.stringify(GAME_CONFIG, null, 2) + '\n'
);
