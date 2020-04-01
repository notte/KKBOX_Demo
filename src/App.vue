<template>
	<div id="app">
		<el-container class="project_container">
			<header class="header_button">
				<el-menu default-active="1">
					<router-link to="/PopularList">
						<el-menu-item index="1">熱門歌單</el-menu-item>
					</router-link>
					<router-link to="/MainList">
						<el-menu-item index="2">主題歌單</el-menu-item>
					</router-link>
					<router-link to="/Profile">
						<el-menu-item index="3">個人歌單</el-menu-item>
					</router-link>
				</el-menu>
			</header>
			<el-main>
				<div class="container">
					<router-view />
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter, namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';
// import PopularList from '@/view/PopularList.vue';
// import MainList from '@/view/MainList.vue';
// import User from '@/view/User.vue';
import Api from '@/api/common';
import * as Model from '@/models/interfaces/common';
import EventBus from '@/utilities/event-bus';
import { ErrorPopupContent, SysMessageType } from '@/models/status/type';

// 取得 Token 命名空間
const tokenModule = namespace('Token');
// 將物件與URL互相轉換格式的方法
const qs = require('qs');

@Component({
	components: {
		// PopularList,
		// MainList,
		// User,
	},
})
export default class App extends Vue {
	// 映射 state 到變數 Token
	@tokenModule.State('publicToken') Token!: string;
	getTokenrequest = {} as Model.IgetTokenRequest;

	// private表示為私人的
	@Action('Token/setPublicToken') private setPublicToken!: any;
	created() {
		this.getTokenrequest.grant_type = 'client_credentials';
		this.getTokenrequest.client_id = '56becb08dfb467fb1d42b8d499b03012';
		this.getTokenrequest.client_secret = '05cd3ab201d7ca9ccad105e099a668e7';
		Api.getToken(qs.stringify(this.getTokenrequest)).then(res => {
			this.setPublicToken(res.access_token);
			localStorage.setItem('accessToken', res.access_token);
		});
	}
	mounted() {
		// 接收 api-error 事件
		EventBus.$on('api-error', (err: any) => {
			// console.log(err.error.message);
			this.$message({
				showClose: true,
				message: err.error.message,
				type: 'error',
			});
		});
		// this.getSearch.q = '周杰倫';
		// this.getSearch.territory = 'TW';
		// this.getSearch.type = 'track';
		// this.getSearch.limit = 50;
		// Api.Search(this.getSearch)
		// 	.then(res => {
		// 		EventBus.$on('api-success', () => {
		// 			this.$message({
		// 				showClose: true,
		// 				message: '123',
		// 			});
		// 		});
		// 	})
		// 	.catch(err => {});
	}
}
</script>