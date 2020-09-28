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
				target: `https://account.kkbox.com/oauth2/token`,
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/token': '',
				},
			},
		},
	},
};