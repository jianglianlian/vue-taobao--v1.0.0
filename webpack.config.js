let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    //入口函数
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),//输出在那个文件夹
        filename:'bundle.js'//导出的包名
    },
    devServer:{//配置dev-server的另外一种形式
        open:true,
        port:3000,
        contentBase:'src',
        hot:true,
        // host:'192.168.31.252'
        host:'192.168.137.1'
    },
    plugins:[//配置插件的节点
        //配置hot的插件，但是一般不推荐使用
            new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'//指定生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{//这个节点用于配置所有第三方模块的加载器
        rules:[//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','less-loader','sass-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader'},
            //url-loader?limit = 处理图片大小的值，当值小于等于图片本身大小时
            //显示图片路径，大于时显示的是base64字符串（显示为这种字符串就不用二次请求图片）
            //url-loader?limit =''&name = [hash:8]-[name].[ext]
            //指定名字，并用哈希值区分相同名字的图片
            //配置字体图标的插件
            {test:/\.(eot|svg|ttf|woff|woff2)$/,use:'url-loader'},

            //因为是测试.js结尾的文件，所以要把node_modules排除（它里面有很多js文件）
            //如果不排除，会打包node_modules中所有的js文件，会损耗cpu
            /*
            * 配好这个模块插件后，还需要另外在一个根目录配置.babelrc文件，
            * .babelrc文件有两个配置参数
            * {
            *   presets:[]
            *   plugins:[]
            * }
            * */
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            //设置vue导入包时的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}