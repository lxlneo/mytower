/*
    导出的配置文件
 */
module.exports = {
    //默认使用80端口，*nix下需要sudo
    port: 14422,
    //代理配置相关，兼容json-proxy的代理配置
    proxy: {
        forward: {
            //定义代理转发
            "/api": "http://127.0.0.1:8001/"
        }
    },
    //替换掉文件名中的source
    "replaceSource": true,
    //build的配置
    build: {
        //要忽略的文件
        ignore: [/\.DS_Store$/i],
        //构建的目标目录，命令行指定的优先
        output: "./build",
        //是否压缩
        compress: {
            //压缩js，包括coffee
            js: false,
            //压缩css，包括less
            css: false,
            //压缩html
            html: false,
            //是否压缩internal的js
            internal: false
        },
        //将要复制的文件目录，直接复制到目标
        copy: ["images", "fonts"],
        //重命名
        rename: [
            {
                source: /source\.(js)$/i, target: '$1'
            }
        ],
        //将要编译处理的目录，如果存在less/coffee，则会直接编译
        compile: {
            //将template直接输出到目标目录下
            "template":{
                //保存到目标
                target: './',
                //要忽略的路径
                ignore: /module$/i
            },
            //编译js目录
            "js": {
                //不编译直接复制的文件
                copy: [/\.min\.js$/i, /angular\.source\.js/, /bootstrap\.source\.js/, /datetimepicker\.source\.js/, /messenger\-min\.source\.js/, /moment\.js/]
            },
            //编译css目录
            "css": {
                //忽略目标目录
                ignore: /(module)$/i
            }
        }
    },
    //将要监控哪些文件目录，当监控中的内容被更改后，会触发客户端的自动更新事件
    watch: {
        //监控js目录，以js和coffee结尾的，将被监控
        "js": /(js|coffee)$/i,
        //监控less和css
        "css": /(css|less)$/i,
        //监控handlebars
        "template": /(html|hbs)$/ig
    }
}