var path = require('path'),
    webpack = require('webpack'),
    extractTextPlugin = require("extract-text-webpack-plugin")/*,
    htmlWebpackPlugin = require('html-webpack-plugin')*/;

module.exports = {
    'debug'  : true,
    'devtool': 'source-map',

    'entry': {
        'app': 'app.ts',

        'styles': [],

        'vendor': []
    },

    'output': {
        'path': path.join(__dirname, 'build/webpack'),
        'filename': '[name].js'
    },

    'module': {
        'loaders': [
            {'test': /\.ts$/,   'loader': 'ts' },
            {'test': /\.css$/,  'loader': extractTextPlugin.extract('style', 'css')},
            {'test': /\.less$/, 'loader': extractTextPlugin.extract('style', 'css!less')},
            {'test': /\.png$/,  'loader': 'url', 'query': {'limit': 8192, 'mimetype': 'image/png'}},
            {'test': /\.jpg$/,  'loader': 'file'},
            {'test': /\.gif$/,  'loader': 'file'},
            {'test': /\.eot$/,  'loader': 'file'},
            {'test': /\.woff$/, 'loader': 'file'},
            {'test': /\.ttf$/,  'loader': 'file'},
            {'test': /\.svg$/,  'loader': 'file'}
        ]
    },

    'resolve': {
        'root': [
            path.join(__dirname, 'src/main/app'),
            path.join(__dirname, 'src/main/less'),
            path.join(__dirname, 'src/main/images'),
            path.join(__dirname, 'src/main/static'),
            path.join(__dirname, 'node_modules')
        ]
    },

    'resolveLoader': {
        'root': [
            path.join(__dirname, 'node_modules')
        ],
        'extensions': ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    'plugins': [
        new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
        new extractTextPlugin('[name].css')/*,
        new htmlWebpackPlugin({
            'filename': 'manager.html',
            'template': 'src/assets/static/manager.html',
            'inject': 'body'
        }),
        new htmlWebpackPlugin({
            'filename': 'backoffice.html',
            'template': 'src/assets/static/backoffice.html',
            'inject': 'body'
        }),
        new htmlWebpackPlugin({
            'filename': 'grid.html',
            'template': 'src/assets/static/grid.html',
            'inject': 'body'
        })*/
    ]
}
