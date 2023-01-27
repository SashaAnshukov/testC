const path = require('path');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
    },
    module: {
        rules: [ 
            {
            // регулярное выражение, которое ищет все js файлы
            test: /\.js$/,
            // при обработке этих файлов нужно использовать babel-loader
            use: 'babel-loader',
            // исключает папку node_modules, файлы в ней обрабатывать не нужно
            exclude: '/node_modules/'
            }
        ]
    }
};