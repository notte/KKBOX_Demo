import { IActionContextBasic } from '@/store/index';
// 引入 commit 及 dispatch

// State 的 interface
export interface IState {
	publicToken: string;
	userToken: string;
}

// 宣告 State
const initState: IState = {
	publicToken: '',
	userToken: '',
};

// 常數宣告 mutations 事件名稱
const PUBLIC_TOKEN = 'PUBLIC_TOKEN';

const getters = {
	// 映射 state
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
