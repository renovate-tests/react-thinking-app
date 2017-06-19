# Thinking in React

## 開発環境構築

### 初期設定
package.jsonを生成。初期設定をスキップするため`-y`オプションを付けている。

```node
$ npm init -y 
```

### babelとwebpackをインストール
`-D` は `--save-dev` と同義でpackage.json の devDependencies に自動的に記録するためのオプション。

```
$ npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
```

babelの設定ファイルを作成。

```
$ touch .babelrc
```

`.babelrc`にはES6を利用するために以下のように記述する。

```json
{
  "presets": [
    "es2015", "react"
  ]
}
```

次にwebpackをインストール。

```
$ npm i -D webpack
```

webpackのコンフィグファイルを作成。

```
$ touch webpack.config.js
```

```javascript
module.exports = {
    entry: {
        index: 'src/js/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
```

## Reactパッケージのインストール
Reactのパッケージをインストール。
`-S` を付けておくとpackage.jsonのでdependenciesに反映する。

```
$ npm i -S react react-dom
```

## webpack-dev-serverのインストール
webpackにはwebpack-dev-serverというモジュールが用意されていて、これを使うとwebサーバーを通して動作確認しながら開発することができる。
また、ソースコードの変更を検知して自動ビルドしてくれる。
html-webpack-plugin はビルドしたJSファイルを読み込むようになっているindex.htmlを生成してくれるプラグイン。

```
$ npm i -D webpack-dev-server
```