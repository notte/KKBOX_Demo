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
	{
		path: '*',
		name: 'Error404',
		component: () => import('@/components/Common/Error404.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

router.beforeEach((to, from, next) => {
	// console.log(to);
	// console.log(from);
	next();
});

export default router;
