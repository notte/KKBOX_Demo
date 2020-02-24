<template>
	<!-- 熱門歌單類別列表 -->
	<div>
		<el-page-header title content="熱門歌單"></el-page-header>
		<el-row>
			<el-col :span="12" v-for="item in hitsPlaylists" :key="item.id">
				<el-card shadow="hover" :body-style="{ padding: '0px' }">
					<img :src="item.images[2].url" />
					<div class="el-card-text">
						<h1>{{item.title}}</h1>
						<h5>{{item.updated_at.substr(0,10)}}</h5>
						<span>{{item.description}}</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Api from '@/api/hits-playlists-api';
import * as EventBus from '@/utilities/event-bus';
import * as Model from '@/models/interfaces/hitsPlaylists';
// import * as Status from '@/models/status/type';

import { ErrorPopupContent, SysMessageType } from '@/models/status/type';

// 錯誤訊息：Type 'X' is missing the following properties from type 'X': length, pop, push, concat, and 28 more.
// 解決方法為改宣告方式，錯誤為 -> hitsPlaylists:Model.IGetNewHitsPlaylistsReponse[] = [];
// hitsPlaylists = {} as Model.IGetNewHitsPlaylistsReponse;

@Component
export default class PopularListMain extends Vue {
	// hitsPlaylists = {} as Model.IGetNewHitsPlaylistsReponse;
	hitsPlaylists: Model.IData[] = [];

	created() {
		Api.getNewHitsPlaylists()
			.then(res => {
				this.hitsPlaylists = res.data;
				// console.log(this.hitsPlaylists);
			})
			.catch(err => {
				EventBus.SystemAlert(SysMessageType.Error, ErrorPopupContent.InternalServer);
			});
	}
}
</script>
<style lang="scss" scoped>
.el-card__body {
	.el-card-text {
		height: 165px !important;
		padding: 15px;
	}
}
</style>
