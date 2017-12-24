var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            parallel: true,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: true,
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            },
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./asserts/vendors-manifest.json')
        })
    ]
});
