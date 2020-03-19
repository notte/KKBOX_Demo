<template>
	<div>
		<el-page-header title content="華語驚爆"></el-page-header>
		<ul v-for="item in Playlist" :key="item.id">
			<li>
				<img :src="item.album.images[1].url" />
			</li>
			<li>{{item.name}}</li>
			<li>{{item.album.release_date}}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/hits-playlists-api';
import * as Model from '@/models/interfaces/hitsPlaylists';

@Component
export default class Playlist extends Vue {
	@Prop(String) readonly PlaylistID!: string;
	Playlist: Model.IData[] = [];
	tableData: string[] = [];
	created() {
		Api.getPlaylist('DZrC8m29ciOFY2JAm3').then(res => {
			this.Playlist = res.tracks.data;
			console.log(this.Playlist);
		});
	}
	mounted() {}
}
</script>
