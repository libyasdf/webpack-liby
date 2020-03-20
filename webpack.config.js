const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'liby.bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },{
        test: /\.jsx$/,
        exclude: /^node_modules$/,
        use: [{
          loader: "babel-loader"
        }],
        include: [APP_PATH]
      },  {
        test:/\.css$/,
        use:["style-loader","css-loader"]//注意：loader是从又往左开始加载处理的，所以先执行css-loader
      },{
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'], //后缀名自动补全
    alias: { // 缩短地址 使用别名
      RefDom: path.resolve(APP_PATH,'routes/RefDom'),
      Things: path.resolve(APP_PATH,'js/components/presentational'),
      StateThings: path.resolve(APP_PATH,'js/components/IncludeState'),
      HookPath: path.resolve(APP_PATH,'js/components/hook'),
      NestingRoute: path.resolve(APP_PATH,'routes/NestingRoute'),
      ContextPath: path.resolve(APP_PATH,'routes/ContextPage'),
      RefsMySon:path.resolve(APP_PATH,'routes/RefsMySon'),
      PlayJquery:path.resolve(APP_PATH,'routes/PlayJquery'),
      PortalFile:path.resolve(APP_PATH,'routes/PortalFile'),
      CssFile: APP_PATH,
      SourceFile: path.resolve(ROOT_PATH, 'source')
    }
  }
};
