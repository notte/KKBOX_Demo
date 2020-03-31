<template>
	<div style="text-align:center">
		<!-- <el-page-header title :content="Artist.name"></el-page-header>
		<img :src="Artist.images[1].url" alt style="width: 300px;height: 300px;" />
		<h1 class="artist-name">{{Artist.name}}</h1>
		<el-divider>發行專輯</el-divider>
		<el-row>
			<el-col :span="4" v-for="item in ArtistTrack" :key="item.id">
				<el-card shadow="hover" :body-style="{ padding: '0px' }">
					<img :src="item.images[1].url" />
					<div class="el-card-text" style="padding: 14px;">
						<h1>{{item.name}}</h1>
						<span>{{item.release_date}}</span>
					</div>
				</el-card>
			</el-col>
		</el-row>-->
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
	Artist: any;
	// Artist: Model.IArtist[] = [];
	tableData: string[] = [];
	data = {
		tableData: [
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '時間的輪 I will Be Your Memory',
				name: '陳忻玥 (Vicky Chen)',
			},
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '2016-05-04',
				name: '王小虎',
			},
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '2016-05-01',
				name: '王小虎',
			},
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '2016-05-03',
				name: '王小虎',
			},
		],
	};
	created() {
		// console.log(this.ArtistID);
		Api.getArtist(this.ArtistID).then(res => {
			// const { id,name,images:images[1].url } = res.data[0].artist;
			this.ArtistTrack = res.data;
			this.Artist = this.ArtistTrack[0].artist;
			const { id, name, images } = this.Artist;
			this.Artist = {};
			this.Artist.push({ id, name, Image: images[1].url });
			console.log();
			// console.log(this.Artist);
			// console.log(this.ArtistTrack);
		});
	}
	mounted() {}
}
</script>
<style lang="scss" scoped>
span {
	color: #595959;
	font-size: 14px;
}

p {
	color: #333;
	font-size: 14px;
	font-weight: 900;
}

.artist-name {
	margin-bottom: 50px;
}
</style>
