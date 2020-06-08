import Vue from 'vue';
import VueRouter from 'vue-router';
import * as EventBus from '@/utilities/event-bus';
import * as Status from '@/models/status/type';

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
	base: '/',
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.path.match('Playlist')) {
	} else if (to.path.match('Album')) {
		EventBus.getInfo(to.params.id, Status.PopularType.Album);
	} else if (to.path.match('Artist')) {
	} else if (to.path.match('MainType')) {
	}

	next();
});

export default router;
