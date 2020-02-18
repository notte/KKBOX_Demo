import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import Token from '@/store/token';

// 資料狀態管理中心
Vue.use(Vuex);

// 引入各功能切分的module
export default new Vuex.Store({
	modules: {
		Token,
	},
});

// 從vuex導入的commit及dispatch，導出interface給各module
export interface IActionContextBasic {
	commit: Commit;
	dispatch: Dispatch;
}
