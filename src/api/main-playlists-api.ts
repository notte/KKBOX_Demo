import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/mainPlaylists';

// 熱門歌單API

export default {
	async getMainListCategories(): Promise<Model.IGetMainListCategories> {
		const config = {
			method: 'get',
			url: `/api/featured-playlist-categories?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IGetMainListCategories>result.data;
	},
	async getMainCategory(id: string): Promise<Model.IGetMainCategory> {
		const config = {
			method: 'get',
			url: `/api/featured-playlist-categories/${id}?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IGetMainCategory>result.data;
	},
};
