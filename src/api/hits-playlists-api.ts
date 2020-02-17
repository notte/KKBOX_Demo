import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/hitsPlaylists';

export default {
	async getNewHitsPlaylists(): Promise<Model.IgetNewHitsPlaylistsReponse> {
		const config = {
			method: 'get',
			url: `/new-hits-playlists`,
		};
		const result = await Handler.request(config);
		return <Model.IgetNewHitsPlaylistsReponse>result.data;
	},
};
