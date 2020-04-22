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
			{ path: 'Playlist/:id', name: 'Playlist' },
			{ path: 'Album/:id', name: 'Album' },
			{ path: 'Artist/:id', name: 'Artist' },
		],
	},
	{
		path: '/MainList',
		name: 'MainList',
		component: () => import('@/view/MainList.vue'),
		children: [
			{ path: 'MainType/:id', name: 'MainType' },
			{ path: 'Playlist/:id', name: 'MainPlaylist' },
			{ path: 'Album/:id', name: 'MainAlbum' },
			{ path: 'Artist/:id', name: 'MainArtist' },
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location: any) {
// 	return originalPush.call(this, location).catch(err => err);
// };

export default router;
