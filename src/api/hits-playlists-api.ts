import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/hitsPlaylists';

const URL = process.env.VUE_APP_URL;
// 熱門歌單API

export default {
	async getNewHitsPlaylists(): Promise<Model.IGetNewHitsPlaylistsReponse> {
		const config = {
			method: 'get',
			url: URL + `new-hits-playlists?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IGetNewHitsPlaylistsReponse>result.data;
	},
};
