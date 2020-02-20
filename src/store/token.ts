import { IActionContextBasic } from '@/store/index';
// 引入commit及dispatch

export interface IState {
	publicToken: string;
	userToken: string;
}

const PUBLIC_TOKEN = 'PUBLIC_TOKEN';

const initState: IState = {
	publicToken: '',
	userToken: '',
};

const getters = {
	// 映射state
	publicToken: (state: IState) => state.publicToken,
	userToken: (state: IState) => state.userToken,
};

const actions = {
	setPublicToken(context: IActionContextBasic, payload: string) {
		context.commit(PUBLIC_TOKEN, payload);
	},
};

const mutations = {
	[PUBLIC_TOKEN](state: IState, payload: string) {
		state.publicToken = payload;
	},
};

export default {
	namespaced: true,
	state: initState,
	getters,
	actions,
	mutations,
};
