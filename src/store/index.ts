import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import Token from '@/store/token';

Vue.use(Vuex);

// 引入各功能切分的 module
export default new Vuex.Store({
	modules: {
		Token,
	},
});

// 從 vuex 導入的 commit 及 dispatch，導出 interface 給各 module
export interface IActionContextBasic {
	commit: Commit;
	dispatch: Dispatch;
}
