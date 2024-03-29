const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssExtract = new MiniCssExtractPlugin({
    filename: 'styles.css'
});

module.exports = (env) => {
    const isProduction = env === 'production';
    return{
    entry : './src/app.js',
    output : {
        path : path.join(__dirname, 'public','dist'),
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
                test :/\.s?css$/,
                use:[MiniCssExtractPlugin.loader,
                    {
                       loader:'css-loader', 
                       options:{
                           sourceMap: true
                       } 
                   },
                   {
                       loader:'sass-loader', 
                       options:{
                           sourceMap: true
                       }    
                   } 
               ] 
           }
        ]
    },
    plugins : [cssExtract],
    devtool : isProduction ? 'source-map' :'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback : true,
        publicPath : '/dist/'
    }
}
}