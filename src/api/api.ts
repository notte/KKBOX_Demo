import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/common';

export default {
	async getToken(payload: Model.IgetTokenRequest): Promise<Model.IgetTokenReponse> {
		const config = {
			method: 'post',
			url: `/token`,
			data: payload,
		};
		const result = await Handler.request(config);
		return <Model.IgetTokenReponse>result.data;
	},
	async Search(payload: Model.ISearchRequest): Promise<Model.ISearchReponse> {
		const config = {
			method: 'get',
			url: `/api/search?q=${payload.q}&territory=${payload.territory}&limit=${payload.limit}&type=${payload.type}`,
			data: payload,
		};
		const result = await Handler.request(config);
		return <Model.ISearchReponse>result.data;
	},
};
