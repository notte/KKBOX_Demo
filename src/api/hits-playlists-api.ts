import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/hitsPlaylists';

// 熱門歌單API

export default {
	async getNewHitsPlaylists(): Promise<Model.IGetNewHitsPlaylistsReponse> {
		const config = {
			method: 'get',
			url: `/api/new-hits-playlists?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IGetNewHitsPlaylistsReponse>result.data;
	},
	async getMaiinListCategories(): Promise<Model.IGetNewHitsPlaylistsReponse> {
		const config = {
			method: 'get',
			url: `/featured-playlist-categories?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IGetNewHitsPlaylistsReponse>result.data;
	},
};
