/**
 * @license MIT
 * @see github.com/michaelhogg/sdsim
 */

//----------------------------------------------------------------------//
//                       Imported Node.js modules                       //
//----------------------------------------------------------------------//

/** @see nodejs.org/api/path.html */
const path = require('path');


//----------------------------------------------------------------------//
//                       Exported Webpack config                        //
//----------------------------------------------------------------------//

/**
 * @see webpack.js.org/configuration/
 * @see webpack.js.org/configuration/configuration-types/
 */
module.exports = function (env, argv) {

  /** @see webpack.js.org/configuration/mode/ */
  const isProduction = (argv.mode === 'production');

  return {

    /** @see webpack.js.org/configuration/entry-context/#entry */
    entry: './src/sdsim.ts',

    /** @see webpack.js.org/configuration/output/ */
    output: {

      /** @see webpack.js.org/configuration/output/#outputpath */
      path: path.resolve(__dirname, 'dist'),

      /** @see webpack.js.org/configuration/output/#outputfilename */
      filename: 'bundle.js'

    },

    /** @see webpack.js.org/configuration/module/ */
    module: {

      /** @see webpack.js.org/configuration/module/#modulerules */
      rules: [

        /**
         * @see webpack.js.org/guides/typescript/
         * @see www.npmjs.com/package/ts-loader
         */
        {

          /** @see webpack.js.org/configuration/module/#ruletest */
          test: /\.ts$/,

          /** @see webpack.js.org/configuration/module/#ruleloader */
          loader: 'ts-loader'

        }

      ]

    },

    /** @see webpack.js.org/configuration/resolve/ */
    resolve: {

      /** @see webpack.js.org/configuration/resolve/#resolveextensions */
      extensions: ['.ts', '.js'],

      /** @see webpack.js.org/configuration/resolve/#resolvealias */
      alias: {

        /**
         * @see www.npmjs.com/package/phaser
         * @see unpkg.com/phaser@3.22.0/dist/phaser.min.js
         * @see unpkg.com/phaser@3.22.0/dist/phaser.js
         */
        phaser: (isProduction ? 'phaser/dist/phaser.min.js' : 'phaser/dist/phaser.js')

      }

    },

    /**
     * @see webpack.js.org/configuration/dev-server/
     * @see www.npmjs.com/package/webpack-dev-server
     */
    devServer: {

      /** @see webpack.js.org/configuration/dev-server/#devservercontentbase */
      contentBase: path.resolve(__dirname, './'),

      /** @see webpack.js.org/configuration/dev-server/#devserverpublicpath- */
      publicPath: '/dist/',

      /** @see webpack.js.org/configuration/dev-server/#devserverhost */
      host: '0.0.0.0',

      /** @see webpack.js.org/configuration/dev-server/#devserverport */
      port: 8080

    }

  };

};
