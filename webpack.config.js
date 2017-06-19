module.exports = {
    //ビルドの対象となるディレクトリを定義
    context: __dirname + '/src',
    //ビルドの起点となるファイルのパス
    entry: {
        index: './js/index.js'
    },
    output: {
        //出力先
        path: __dirname + '/dist',
        //出力ファイル名
        filename: './js/[name].min.js'
    },
    // Configuration for dev server
    devServer: {
        contentBase: 'dist',
        port: 3000
    },
    //ビルドに必要なモジュール（loader）を指定
    module: {
        loaders: [
            {
                //ビルドの対象ファイルを記述。正規表現を使い全てのjsファイルを対象。
                test: /\.js$/,
                //ビルドから除外するディレクトリを指定。/node_modules/を除外しないと処理が重くなる。
                exclude: /node_modules/,
                //ビルドで使用するloaderを指定
                loader: 'babel-loader',
                //パラメータの指定
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}