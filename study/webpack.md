## webpack
在前端工程化以来诞生了很多优秀的便于前端开发者的工程化工具，比如我们以前用的grunt,gulp。尤其是jq时代gulp可以说是最火的构建工具了，核心就是task的概念，比如压缩代码，babel代码，压缩图片等等功能一个一个的都是task。

而webpack，诞生之初只是一个模块化打包工具，核心就是bundle的概念，强调的是包。起初大家都是gulp结合webpack使用，webpack对于gulp来说就是一个task而已，比如gulp-webpack插件，后来webpack的plugins也有人提供了minify,uglify，hash等等插件，于是通常情况下一个webpack其实已经有了一个完善的功能了，也就不再需要gulp了，它正在向一个全能型的构建工具发展。

webpack的发展也是如火如荼，webpack2,3,4,5。其实本来webpack也就只是一个工具而已，但随着它的发展，版本迭代，概念越来越多，api也越来越多，插件也越来越多，复杂度也在提升，通常情况下，除了基本的配置外，只是业务驱动我去了解某些配置，毕竟它只是一个工具而已，指不定什么时候又会诞生更好的工具。
## 核心配置项

### entry
入口配置文件
```
单入口
module.exports = {
   entry: {
    main: './main.js'
  }
};
or
module.exports = {
    entry: './main.js'
};



多入口
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  },
};
 or
 module.exports = {
  entry: ['./src/pageOne/index.js','./src/pageTwo/index.js','./src/pageThree/index.js',]
};
 
推荐对象语法，这是应用程序中定义入口的最可扩展的方式。
```
### output输出
输出结果，在Webpack经过一系列处理并得出最终想要的代码后输出结果，配置项用于指定输出文件夹，默认是./dist
```
module.exports = {
  output: {
    filename: 'bundle.js', 
  }
};
//默认输出到 dist/bundle.js
————————————————————————————————————————————————————————————————————————————————————————
多入口输出(使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件)
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',  //输出文件的目标路径
    publicPath:''   //用于给生成的静态资源路径添加前缀,表示在浏览器中用此路径可以访问到打包的资源
  }
};
// 写入到硬盘：./dist/app.js, ./dist/search.js
————————————————————————————————————————————————————————————————————————————————————————
输出添加hsah的示例
module.exports = {
  //...
  output: {
    filename: '[name].[hash].js',
    path: '/home/proj/cdn/assets/[hash]',
    publicPath: 'http://cdn.example.com/assets/[hash]/'
  }
};

```
### Module
webpack里面一切皆是模块，从entry开始webpack就会递归找出所有依赖的module，每一个module都会根据rules的配置项去接受所配置的loader的处理，简单的说rules配置项的作用就是配置相应的文件，然后把匹配的文件通过loader进行一些转换等等功能。
```
   module: {
        rules:[
             {
                test: /\.vue$/, // vue 要在babel之前
                loader: 'vue-loader', //vue转普通的html
                options: vueLoaderConfig
      },
            {
                test: /\.js$/, // babel
                loader: 'babel-loader', //es6转es5loader
                include: [resolve('src'), resolve('test')]
      },
            { // url-loader 文件大小低于指定的限制时，可返回 DataURL，即base64
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, // url-loader 图片
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]') // hash:7 代表 7 位数的 hash
                }
      },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // url-loader 字体
                loader: 'url-loader',
      }
        ]
    },
```
### loader
简单的说就是对module的代码通过loader进行转换，loader就是专门去处理你的模块的，类似与gulp中的task，常见的loader功能比如css/sass/less,ts/js,babel代码，图片转base64等等，你只需要安装对应的loader就行了
```
//示例
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};

// 一种类型文件也可配置指定多个 loader，从右到左执行，即闲执行sass-loader 再执行css-loader,再执行style-loader
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};

```
还有一些内联等使用方式，推荐还是配置使用
### Plugins
扩展的插件，用于loader没法解决的事情，比如使用的比较多的多页的插件HtmlWebpackPlugin，取第三方库和公共模块的CommonsChunkPlugin,清除console的插件WebpackParallelUglifyPlugin等等
```
//具体的插件的使用方法可以去各个插件的github看
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  plugins: [
     new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
### DevServer
用于配置开发过程时的本机服务器配置,本质上是webpack-dev-server插件的配置项
```
module.exports = {
  devServer: {
    open:true,
    port:8000, 
    proxy: {
        '/proxy': {
            target: 'http://your_api_server.com',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': ''
            }
            }
          }
};
```
### mode
提供 mode 配置选项，告知 webpack 使用相应环境
```
module.exports = {
  mode: 'production'
};
//默认的值有：none, development 或 production（默认）
```

## 打包流程
+ 根据传入的参数模式(development | production)来加载对应的默认配置
+ 从entry开始递归解析所依赖的所有module(Commonjs、amd或者es6的import，webpack都会对其进行分析)
+ 每一个module都会根据rules的配置项去寻找用到的loader,接受所配置的loader的处理
+ 以entry中的配置对象为分组，每一个配置入口和其对应的依赖文件最后组成一个代码块文件(chunk)并输出
+ webpack通常情况下会在loader结束后，执行plugin的逻辑

