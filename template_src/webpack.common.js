var path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: {
        index: path.resolve(APP_PATH, 'main.js'),
    },
    output: {
        filename:'[name]-[hash:5].js',
        path: path.resolve(__dirname, 'www')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['www']),
        new HtmlWebpackPlugin({
            title: 'ARCI',
            filename: 'index.html',
            template: 'index.html',
            chunks: ['index']
        }),
        new ExtractTextPlugin("./static/css/[name].css"),
        //这个组件是用来复制静态文件的assert目录
        new CopyWebpackPlugin([
            {from: './asserts', to: 'static/asserts'}
        ]),
        new webpack.DefinePlugin({
            //定义公用版本号
            APPVERSION: JSON.stringify("v1.0.0"),
            APPNAME:JSON.stringify("cordova template")
        })
    ],       module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            ,
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.jsx$/, exclude: /node_modules/, loaders: [
                'babel-loader?presets[]=es2015&presets[]=react', 'eslint-loader'
            ], include: APP_PATH
            },
            // {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
            {
              test: /\.sass$/,
              loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
};
