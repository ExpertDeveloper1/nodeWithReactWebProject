/**
 * Created by qiaoheng on 3/29/16.
 */

import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

import autoprefixer from 'autoprefixer';
import grid from 'postcss-grid';

export default (DEBUG, PATH, PORT=3000) => ({
    entry: (DEBUG ? [
        `webpack-dev-server/client?http://localhost:${PORT}`,   // WebpackDevServer host and port
        `webpack/hot/only-dev-server`, // "only" prevents reload on syntax errors
    ] : []).concat([
        //'./public/main.less',
        'babel-polyfill',
        './public/index',
    ]),

    output: {
        path: path.resolve(__dirname, PATH, "generated"),
        filename: DEBUG ? "main.js" : "main-[hash].js",
        publicPath: "/generated/"
    },

    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'eslint',
        }],

        loaders: [

            // Load ES6/JSX
            { test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "public"),
                ],
                loaders: (DEBUG ? ['react-hot'] : []).concat(["babel-loader"]),
                /*query: {
                 plugins: ['transform-runtime'],
                 presets: ['es2015', 'stage-0', 'react'],
                 }*/
            },

            // Load styles
            {
                test: /\.css$/,
                loader: DEBUG
                    ? "style!css!postcss"
                    : ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues!postcss')
            },

            {
                test: /\.less$/,
                loader: DEBUG
                    ? "style!css!autoprefixer!less"
                    : ExtractTextPlugin.extract("style-loader", "css-loader?-convertValues!postcss!less-loader")
            },

            {
                test: /\.scss$/,
                loader: DEBUG
                    ? "style!css!autoprefixer!sass"
                    : ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues!postcss!sass-loader')
            },

            { test: /\.json$/, loader: 'json',},

            // Load images
            { test: /\.jpe?g/,       loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.gif/,         loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.png/,         loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg(\?.+)?$/, loader: 'url-loader?limit=10000&minetype=image/svg+xml', },

            // Load fonts
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/octet-stream" },
        ]
    },

    plugins: DEBUG ? [
        new webpack.HotModuleReplacementPlugin(),
    ] : [
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new ExtractTextPlugin("style.css", {allChunks: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
            /*output: {comments: false},
             compress: {warnings: false},*/
            mangle: {screw_ie8: true, keep_fnames: true}
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),

    ],

    resolveLoader: {
        root: path.join(__dirname, "node_modules"),
    },

    resolve: {
        root: path.join(__dirname, "node_modules"),

        modulesDirectories: ['node_modules'],

        alias: {
            environment: DEBUG
                ? path.resolve(__dirname, 'config', 'environments', 'development.js')
                : path.resolve(__dirname, 'config', 'environments', 'production.js')
        },

        // Allow to omit extensions when requiring these files
        extensions: ["", ".js", ".jsx"],
    },

    postcss: function () {
        return [
            grid({gutter: 10}),
            autoprefixer,
        ];
    },

    cache: DEBUG,

    debug: DEBUG,

    // For options, see http://webpack.github.io/docs/configuration.html#devtool
    devtool: DEBUG && "inline-source-map",

    eslint: {
        configFile: path.join(__dirname, '.eslintrc'),
    },
});
