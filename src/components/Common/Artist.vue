<template>
	<div style="text-align:center">
		<el-page-header title content="歌手"></el-page-header>
		<img
			src="https://i.kfs.io/artist/global/10012811,0v1/fit/300x300.jpg"
			alt
			style="width: 300px;height: 300px;"
		/>
		<h1 class="artist-name">陳忻玥 (Vicky Chen)</h1>
		<el-divider>專輯</el-divider>
		<el-row>
			<el-col :span="5">
				<el-card shadow="hover" :body-style="{ padding: '0px' }">
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					/>
					<div class="el-card-text" style="padding: 14px;">
						<h1>好吃的汉堡</h1>
						<span>2018-03-10</span>
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
	// Artist = {} as Model.IArtist;
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
			// console.log(res.data);
			this.ArtistTrack = res.data;
			// this.Artist = this.ArtistTrack.data[0].artist;
			console.log(this.ArtistTrack);
		});
		// console.log(1);
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
