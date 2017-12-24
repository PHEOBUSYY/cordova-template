var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common');
module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('develop')
            },
        })
    ]
});
