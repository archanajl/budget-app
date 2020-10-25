const path = require('path');
console.log("config")

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node-modules/
            },
            {
                use:['style-loader','css-loader','sass-loader'],
                test :/\.s?css$/
            }
        ]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback : true
    }
}