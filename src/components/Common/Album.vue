<template>
	<div class="Album">
		<img :src="Album.images" alt />
		<h1>{{ Album.album_name }}</h1>
		<span>{{ Album.date }}</span>
		<p @click="getArtist(Album.artist_id)">{{ Album.artist }}</p>
		<el-divider>曲目</el-divider>
		<ul v-for="item in Tracks" :key="item.id">
			<li>{{ item.track_number + '.' }}</li>
			<li>{{ item.name }}</li>
			<li>{{ TimeChange(item.duration) }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/common';
import * as EventBus from '@/utilities/event-bus';
import * as Status from '@/models/status/type';

@Component
export default class Album extends Vue {
	@Prop(String) readonly AlbumID!: string;
	@Prop(Object) readonly PageType!: any;
	// 專輯資料
	Album: object = {};
	Tracks: object = {};

	getArtist(id: string) {
		switch (this.PageType.type) {
			case Status.PlaylistType.Popular:
				EventBus.getInfo(id, Status.PopularType.Artist);
				break;
			case Status.PlaylistType.MainList:
				EventBus.getMain(id, Status.MainType.Artist);
				break;
			default:
				break;
		}
	}

	// 時間長度轉換為歌曲長度
	TimeChange(time: number) {
		const min = Math.floor(time / 1000 / 60);
		let sec = Math.floor((time / 1000) % 60).toString();
		sec = sec.length === 1 ? '0' + sec : sec;
		return '0' + min + ':' + sec;
	}

	created() {
		Api.getAlbum(this.AlbumID).then(res => {
			const { name, release_date, images, artist } = res;
			this.Album = { album_name: name, date: release_date, images: images[1].url, artist: artist.name, artist_id: artist.id };
		});
		Api.getTracks(this.AlbumID).then(res => {
			this.Tracks = res.data;
		});
	}
}
</script>
