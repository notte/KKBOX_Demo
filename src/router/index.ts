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
			{ path: 'Playlist', name: 'Playlist', component: () => import('@/components/Playlist.vue') },
			{ path: 'Album', name: 'Album', component: () => import('@/components/Album.vue') },
			{ path: 'Artist', name: 'Artist', component: () => import('@/components/Artist.vue') },
		],
	},
	{
		path: '/MainList',
		name: 'MainList',
		component: () => import('@/view/MainList.vue'),
		children: [
			{ path: 'MainType', name: 'MainType', component: () => import('@/components/Playlist.vue') },
			{ path: 'Playlist', name: 'MainPlaylist', component: () => import('@/components/Playlist.vue') },
			{ path: 'Album', name: 'MainAlbum', component: () => import('@/components/Album.vue') },
			{ path: 'Artist', name: 'MainArtist', component: () => import('@/components/Artist.vue') },
		],
	},
	{
		path: '/Profile',
		name: 'Profile',
		component: () => import('@/view/Me.vue'),
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
