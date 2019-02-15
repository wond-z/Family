const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpeg|png|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-wond.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve('src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            // contentBase: path.join(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            inline: true,
            port: 9000,
            // overlay: true,  // 显示网页错误
            open: true,     // 启动服务后自动在浏览器中打开
            // hot: true       // 模块热更新
        };
        config.plugins.push(
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'Hot Module Replacement',
                filename: 'index.html',
                template: path.resolve(__dirname, './index.html'),
            }),
            new webpack.HotModuleReplacementPlugin()
        );
    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};
