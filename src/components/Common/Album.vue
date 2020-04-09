<template>
	<div>
		<img :src="Album.images" alt />
		<h1>{{Album.album_name}}</h1>
		<span>{{Album.date}}</span>
		<p>{{Album.artist}}</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/common';

@Component
export default class Album extends Vue {
	@Prop(String) readonly AlbumID!: string;
	@Prop(Object) readonly PageType!: any;
	// 專輯資料
	Album: object = {};

	created() {
		Api.getAlbum(this.AlbumID).then(res => {
			const { name, release_date, images, artist } = res;
			this.Album = { album_name: name, date: release_date, images: images[1].url, artist: artist.name };
		});
	}
}
</script>