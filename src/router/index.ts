import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: { name: 'PopularList' },
	},
	{
		path: '/PopularList',
		name: 'PopularList',
		component: () => import('@/view/PopularList.vue'),
		children: [
			{ path: '/Playlist/:id', name: 'PopularPlaylist' },
			{ path: '/Album/:id', name: 'PopularAlbum' },
			{ path: '/Artist/:id', name: 'PopularArtist' },
		],
	},
	{
		path: '/MainList',
		name: 'MainList',
		component: () => import('@/view/MainList.vue'),
		children: [
			{ path: '/MainType/:id', name: 'MainType' },
			{ path: '/Playlist/:id', name: 'MainPlaylist' },
			{ path: '/Album/:id', name: 'MainAlbum' },
			{ path: '/Artist/:id', name: 'MainArtist' },
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
