import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/common';

export default {
	async getToken(payload: Model.IgetTokenRequest): Promise<Model.IgetTokenReponse> {
		const config = {
			url: `/token`,
			data: payload,
			// method: 'post',
		};
		const result = await Handler.request(config);
		return <Model.IgetTokenReponse>result.data;
	},
};
