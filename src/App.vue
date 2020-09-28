<template>
	<div id="app">
		<el-container class="project_container">
			<header class="header_button">
				<el-menu>
					<router-link to="/PopularList">
						<el-menu-item>熱門歌單</el-menu-item>
					</router-link>
					<router-link to="/MainList">
						<el-menu-item>主題歌單</el-menu-item>
					</router-link>
				</el-menu>
			</header>
			<el-main>
				<div class="container" ref="childDiv">
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
import Api from '@/api/common';
import * as Model from '@/models/interfaces/common';
import EventBus, { SystemAlert } from '@/utilities/event-bus';
import * as Status from '@/models/status/type';

// 取得 Token 命名空間
const tokenModule = namespace('Token');

// 將物件與URL互相轉換格式的方法
const qs = require('qs');

@Component
export default class App extends Vue {
	// 映射 state 到變數 Token
	@tokenModule.State('publicToken') Token!: string;
	GetTokenRequest = {} as Model.IgetTokenRequest;

	// private表示為私人的
	@Action('Token/setPublicToken') private setPublicToken!: any;

	created() {
		this.GetTokenRequest.grant_type = 'client_credentials';
		this.GetTokenRequest.client_id = '56becb08dfb467fb1d42b8d499b03012';
		this.GetTokenRequest.client_secret = '05cd3ab201d7ca9ccad105e099a668e7';
		Api.getToken(qs.stringify(this.GetTokenRequest)).then((res) => {
			this.setPublicToken(res.access_token);
			localStorage.setItem('accessToken', res.access_token);
		});
	}

	beforeMount() {
		EventBus.$on('api-error', (err: any) => {
			this.$message({
				showClose: true,
				message: err.message,
				type: 'error',
			});
		});

		EventBus.$on('to-scroll', (now: number, next: number) => {
			(this.$refs.childDiv as any).scrollTop = 0;
		});
	}
}
</script>
