<template>
	<div>
		<el-page-header title :content="PlaylistTitle"></el-page-header>
		<div style="padding:50px 0">
			<ul v-for="item in Playlist" :key="item.AlbumId">
				<li>
					<img :src="item.Image" />
				</li>
				<li>{{ item.name }}</li>
				<li>{{ item.date }}</li>
				<li>{{ item.artist }}</li>
			</ul>
			<div class="block">
				<el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/common';
import * as Model from '@/models/interfaces/common';

@Component
export default class Playlist extends Vue {
	@Prop(String) readonly PlaylistID!: string;
	PlaylistTitle: string = '';
	Playlist: object[] = [];
	created() {
		Api.getPlaylist(this.PlaylistID).then(res => {
			this.PlaylistTitle = res.title;

			for (const item of res.tracks.data) {
				const album = item.album;
				const { id, name, release_date, artist } = album;
				this.Playlist.push({ id, Image: album.images[1].url, name, date: release_date, artist: artist.name, artistID: artist.id });
			}

			this.Playlist.forEach(item => {});
		});
	}
	mounted() {}
}
</script>
