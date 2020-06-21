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
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
    ]
    }
};