

const path = require('path')

module.exports = {
    webpack:{
        alias:{
            //约定使用@表示src路径 
            '@':path.resolve(__dirname,'src')
        }
    }
}