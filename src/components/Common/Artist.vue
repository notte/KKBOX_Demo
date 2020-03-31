<template>
	<div>
		<el-page-header title content="歌手"></el-page-header>
		<img :src="Artist.images" />
		<h1 class="artist-name">{{Artist.name}}</h1>
		<el-divider>發行專輯</el-divider>
		<el-row>
			<el-col :span="4" v-for="item in ArtistTrack" :key="item.id">
				<el-card shadow="hover">
					<img :src="item.images[1].url" />
					<div class="el-card-text">
						<h1>{{item.name}}</h1>
						<span>{{item.release_date}}</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/common';
import * as Model from '@/models/interfaces/common';

@Component
export default class Artist extends Vue {
	@Prop(String) readonly ArtistID!: string;
	// 帶入ID的歌手所有專輯
	ArtistTrack: Model.ITrackData[] = [];
	// 藝人
	Artist: any = '';

	created() {
		Api.getArtist(this.ArtistID).then(res => {
			this.ArtistTrack = res.data;
			this.Artist = this.ArtistTrack[0].artist;
			const { id, name, images } = this.Artist;
			this.Artist = {};
			Object.assign(this.Artist, { id, name, images: images[1].url });
		});
	}
}
</script>