var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/app/static',
        filename: "index_bundle.js"
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
}
        ],
        
        
    },
    
    plugins: [HTMLWebpackPluginConfig]
};