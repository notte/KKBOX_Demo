import Handler from '@/utilities/api-handle';
import * as Model from '@/models/interfaces/common';

export default {
	async getToken(payload: Model.IgetTokenRequest): Promise<Model.IgetTokenReponse> {
		const config = {
			method: 'post',
			url: `/token`,
			data: payload,
		};
		// console.log(config);
		const result = await Handler.request(config);
		return <Model.IgetTokenReponse>result.data;
	},
};
