<template>
	<div id="app">
		<el-container>
			<el-aside>
				<el-menu default-active="1">
					<router-link to="/PopularList">
						<el-menu-item index="1">
							<template slot="title">
								<i class="el-icon-message"></i>熱門歌單
							</template>
						</el-menu-item>
					</router-link>
					<router-link to="/MainList">
						<el-menu-item index="2">
							<template slot="title">
								<i class="el-icon-message"></i>主題歌單
							</template>
						</el-menu-item>
					</router-link>
					<router-link to="/Profile">
						<el-menu-item index="3">
							<template slot="title">
								<i class="el-icon-message"></i>個人歌單
							</template>
						</el-menu-item>
					</router-link>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter, namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import PopularList from '@/view/PopularList.vue';
import MainList from '@/view/MainList.vue';
import Me from '@/view/Me.vue';
import Request from '@/utilities/api-handle';
import Api from '@/api/api';
import * as Model from '@/models/interfaces/common';
const tokenModule = namespace('Token');
const qs = require('qs');

@Component({
	components: {
		PopularList,
		MainList,
		Me,
	},
})
export default class App extends Vue {
	@tokenModule.State('publicToken') Token!: string;
	getTokenrequest = {} as Model.IgetTokenRequest;
	getSearch = {} as Model.ISearchRequest;
	@Action('Token/setPublicToken') private setPublicToken!: any;
	created() {
		this.getTokenrequest.grant_type = 'client_credentials';
		this.getTokenrequest.client_id = '56becb08dfb467fb1d42b8d499b03012';
		this.getTokenrequest.client_secret = '05cd3ab201d7ca9ccad105e099a668e7';
		Api.getToken(qs.stringify(this.getTokenrequest)).then(res => {
			this.setPublicToken(res.access_token);
			localStorage.setItem('accessToken', res.access_token);
		});
		this.getSearch.q = '周杰倫';
		this.getSearch.territory = 'TW';
		this.getSearch.limit = 50;
		this.getSearch.type = 'track';
	}
	mounted() {
		Api.Search(qs.stringify(this.getSearch)).then(res => {
			// console.log(res);
		});
	}
}
</script>
<style lang="scss" scoped></style>
