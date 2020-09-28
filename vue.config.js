module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ?
		'/KKBOX_Demo' : '/',
	devServer: {
		open: true,
		host: 'localhost',
		port: 8081,
		https: false,
		hotOnly: false,
		proxy: {
			'/token': {
				target: process.env.VUE_APP_TOKEN_URL,
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/token': '',
				},
			},
		},
	},
};