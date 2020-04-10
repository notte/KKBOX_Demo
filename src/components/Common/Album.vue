<template>
	<div class="Album">
		<img :src="Album.images" alt />
		<h1>{{Album.album_name}}</h1>
		<span>{{Album.date}}</span>
		<p>{{Album.artist}}</p>
		<el-divider>曲目</el-divider>
		<ul v-for="item in Tracks" :key="item.id">
			<li>{{item.track_number+'.'}}</li>
			<li>{{item.name}}</li>
			<li>{{ TimeChange(item.duration)}}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/common';
import * as Model from '@/models/interfaces/common';

@Component
export default class Album extends Vue {
	@Prop(String) readonly AlbumID!: string;
	@Prop(Object) readonly PageType!: any;
	// 專輯資料
	Album: object = {};
	Tracks: object = {};

	created() {
		Api.getAlbum(this.AlbumID).then(res => {
			const { name, release_date, images, artist } = res;
			this.Album = { album_name: name, date: release_date, images: images[1].url, artist: artist.name };
		});
		Api.getTracks(this.AlbumID).then(res => {
			this.Tracks = res.data;
			// console.log(this.Tracks);
		});
	}
	TimeChange(time: number) {
		const min = Math.floor(time / 1000 / 60);
		let sec = Math.floor((time / 1000) % 60).toString();
		sec = sec.length === 1 ? '0' + sec : sec;
		return '0' + min + ':' + sec;
	}
}
</script>