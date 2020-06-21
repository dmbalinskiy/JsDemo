//only node-js-based module
//will not work directly in browser

//built-in node module
const path = require('path');

//2 properties:
//entry - path to initial input file
//output - location of result bundle file
module.exports = {
    entry: './src/index.js',
    //output 
    output:{
        //output - path to the folder
        //node absolute path to current folder -  __dirname 
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    devServer: {
        //root of the production placement
        contentBase: path.resolve(__dirname, 'dist'),

        //path to js files inside upper path
        publicPath: '/assets/',

        //open browser on load
        open: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};

//config from package.json
// "scripts": {
//     "babel": "node_modules/.bin/babel src/index.js --watch -o dist/assets/bundle.js"
//   },