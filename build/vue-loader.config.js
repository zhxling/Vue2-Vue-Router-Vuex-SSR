module.exports = (isDev) => {
    return {
        preserveWhitepace: true, // vue模板中去除内容的空格
        extractCSS: !isDev,        // 提取vue文件中的css出来单独打包到CSS文件
        // cssModules: {
        //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 
        //     camelCase: true,                // 转换类名
        // },
        // hotReload: false,
        // loaders: {     // 自定义loader
        //     'docs': ~,
        //     js: 'coffe-loader',
        //     html,style
        // }
        preLoader: {

        },
        postLoader: {

        }
    }
}