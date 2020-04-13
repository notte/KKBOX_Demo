<template>
	<!-- 熱門歌單類別列表 -->
	<div>
		<ul v-for="item in HitsPlaylists" :key="item.id" class="PopularList">
			<li>
				<div class="Playlist_images">
					<img :src="item.images[2].url" alt />
					<div class="images"></div>
				</div>
				<div class="Playlist_text">
					<h3>{{ item.title.substr(0, 6) }}</h3>
					<p>{{ item.description }}</p>
					<a @click="getPlaylist(item.id)">進入歌單</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Api from '@/api/hits-playlists-api';
// import EventBus from '@/utilities/event-bus';
import EventBus, { SystemAlert, getInfo } from '@/utilities/event-bus';
import * as Model from '@/models/interfaces/hitsPlaylists';
import * as Status from '@/models/status/type';

// 錯誤訊息：Type 'X' is missing the following properties from type 'X': length, pop, push, concat, and 28 more.
// 解決方法為改宣告方式，錯誤為 -> hitsPlaylists:Model.IGetNewHitsPlaylistsReponse[] = [];
// hitsPlaylists = {} as Model.IGetNewHitsPlaylistsReponse;

@Component
export default class PopularListMain extends Vue {
	// hitsPlaylists = {} as Model.IGetNewHitsPlaylistsReponse;
	HitsPlaylists: Model.IData[] = [];

	created() {
		Api.getNewHitsPlaylists()
			.then(res => {
				this.HitsPlaylists = res.data;
			})
			.catch(err => {
				SystemAlert(Status.SysMessageType.Error, Status.ErrorPopupContent.InternalServer);
			});
	}
	// beforeMount() {
	// 	EventBus.$on('api-error', (err: any) => {
	// 		// console.log(err);
	// 		this.$message({
	// 			showClose: true,
	// 			message: err.error.message,
	// 			type: 'error',
	// 		});
	// 	});
	// 	EventBus.$on('system-alert', (err: any) => {
	// 		// console.log(err);
	// 		this.$message({
	// 			showClose: true,
	// 			message: err.error.message,
	// 			type: 'error',
	// 		});
	// 	});
	// }
	getPlaylist(id: string): void {
		// 發送事件，帶入對應的id以及開啟類型
		getInfo(id, Status.PopularType.Playlist);
	}
}
</script>
