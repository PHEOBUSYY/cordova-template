const webpack = require('webpack');
const library = '[name]_[hash]';
const path = require('path');

module.exports = {
    entry: {
        vendors: ['vue', 'framework7' ,'framework7-vue','vue-axios','axios','vue-toasted']
    },

    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, 'asserts'),
        library: library
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname,'./asserts/[name]-manifest.json'),
            // This must match the output.library option above
            name: library,
            context: __dirname,
        }),
    ],
};
