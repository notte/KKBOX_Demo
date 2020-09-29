module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ?
	// 	'/KKBOX_Demo' : '/',
	publicPath: './',
	devServer: {
		open: true,
		host: 'localhost',
		port: 8081,
		https: false,
		hotOnly: false,
		proxy: {
			[process.env.VUE_APP_BASE_TOKEN_URL]: {
				target: process.env.VUE_APP_TOKEN_URL,
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					["^" + process.env.VUE_APP_BASE_TOKEN_URL]: ""
				}
			},
		},
	},
};