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
			{ path: 'Playlist', name: 'Playlist' },
			{ path: 'Album', name: 'Album' },
			{ path: 'Artist', name: 'Artist' },
		],
	},
	{
		path: '/MainList',
		name: 'MainList',
		component: () => import('@/view/MainList.vue'),
		children: [
			{ path: 'MainType', name: 'MainType' },
			{ path: 'Playlist', name: 'MainPlaylist' },
			{ path: 'Album', name: 'MainAlbum' },
			{ path: 'Artist', name: 'MainArtist' },
		],
	},
	{
		path: '/Profile',
		name: 'Profile',
		component: () => import('@/view/User.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
