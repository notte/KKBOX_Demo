import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import Token from '@/store/token';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Token,
	},
});

export interface IActionContextBasic {
	commit: Commit;
	dispatch: Dispatch;
}
