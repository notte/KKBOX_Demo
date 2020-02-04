const path = require('path');

module.exports = {
    devServer: {
        // headers: {
        //     'Access-Control-Allow-Origin': '*'
        // },
        // disableHostCheck: true,
        proxy: {
            'https://api.kkbox.com/v1.1/': {
                target: process.env.VUE_APP_DEV_PROXY_TARGET,
                changeOrigin: true,
                pathRewrite: {
                    '^/backoffice': ''
                }
            },
            // '/authclient': {
            //     target: 'https://client.devel.starlordtech.com/',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/authclient': ''
            //     }
            // }
        },
        progress: true
    },
    // pluginOptions: {
    //     'style-resources-loader': {
    //         preProcessor: 'scss',
    //         patterns: []
    //     }
    // }
}