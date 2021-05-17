var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            
                { test: /\.css$/, use: [ 'css-loader' ] }
            
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        port:5000,
        host:'0.0.0.0',
        disableHostCheck: true

    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8087'
        })
    }
}