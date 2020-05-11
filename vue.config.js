module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ?
		'/KKBOX_Demo/' : '/',
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: {
			'/token': {
				target: 'https://account.kkbox.com/oauth2/token',
				changeOrigin: true,
				ws: true,
			},
			'/api': {
				target: 'https://api.kkbox.com/v1.1/',
				ws: true,
				host: 'api.kkbox.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	configureWebpack: {
		output: {
			publicPath: '/'
		},
	}
};