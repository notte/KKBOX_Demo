<template>
	<!-- 熱門歌單類別列表 -->
	<div>
		<!-- <el-row>
			<el-col
				:span="6"
				v-for="item in hitsPlaylists"
				:key="item.id"
				@click.native="getPlaylist(item.id)"
			>
				<el-card shadow="hover">
					<img :src="item.images[2].url" />
					<div class="el-card-text">
						<h3>{{ item.title.substr(0, 6) }}</h3>
						<h5>{{ item.updated_at.substr(0, 10) }}</h5>
						<p>{{ item.description }}</p>
					</div>
				</el-card>
			</el-col>
		</el-row>-->
		<ul v-for="item in hitsPlaylists" :key="item.id">
			<li>
				<div class="Playlist_images">
					<img :src="item.images[2].url" alt />
					<div class="images"></div>
				</div>
				<div>
					<h3>{{ item.title.substr(0, 6) }}</h3>
					<p>{{ item.description }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/hits-playlists-api';
import * as EventBus from '@/utilities/event-bus';
import * as Model from '@/models/interfaces/hitsPlaylists';
import * as Status from '@/models/status/type';

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
			})
			.catch(err => {
				EventBus.SystemAlert(Status.SysMessageType.Error, Status.ErrorPopupContent.InternalServer);
			});
	}
	getPlaylist(id: string): void {
		// 發送事件，帶入對應的id以及開啟類型
		EventBus.getInfo(id, Status.PopularType.Playlist);
	}
}
</script>
