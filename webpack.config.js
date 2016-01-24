module.exports = {
    entry: [
        './src/main.ts',
        './test/foo.spec.ts'
    ],

    output: {
        filename: 'bundle.js'
    },

    // Currently we need to add '.ts' to resolve.extensions array.
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    // Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',

    // Add loader for .ts files.
    module: {
        loaders: [
          {
              test: /\.ts$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel?presets[]=es2015!ts-loader'
          }
        ]
    }
};
