<template>
	<div>
		<ul v-for="item in Playlist[CurrentPage]" :key="item.AlbumId" class="Playlist">
			<li class="Playlist_images">
				<img @click="getAlbum(item.id)" :src="item.Image" />
			</li>
			<li>{{ item.name }}</li>
			<li>{{ item.date }}</li>
			<li @click="getArtist(item.artistID)">{{ item.artist }}</li>
		</ul>
		<div class="block">
			<el-pagination
				layout="prev, pager, next"
				@current-change="handleCurrentChange"
				:page-count="TotalPage"
			></el-pagination>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import Api from '@/api/common';
import * as EventBus from '@/utilities/event-bus';
import * as Status from '@/models/status/type';

@Component
export default class Playlist extends Vue {
	@Prop(String) readonly PlaylistID!: string;
	@Prop(Object) readonly PageType!: any;
	// 所有歌單資料
	Playlist: object[] = [];
	// 總頁數，重新整理後的陣列長度
	TotalPage: number = 0;
	// 目前選中的頁碼
	CurrentPage: number = 0;
	// API URL
	ApiUrl: string = '';

	// 取得當前頁碼
	handleCurrentChange(val: number) {
		// 實際選中陣列 = 當前頁碼 - 1
		this.CurrentPage = val - 1;
		EventBus.getScrollEvent(0, 0);
	}

	// 取得專輯
	getAlbum(id: string) {
		switch (this.PageType.type) {
			case Status.PlaylistType.Popular:
				EventBus.getInfo(id, Status.PopularType.Album);
				break;
			case Status.PlaylistType.MainList:
				EventBus.getMain(id, Status.MainType.Album);
				break;
			default:
				break;
		}
	}
	// 取得歌手
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

	created() {
		switch (this.PageType.type) {
			case Status.PlaylistType.Popular:
				this.ApiUrl = 'new-hits-playlists/' + this.PageType.id;
				break;
			case Status.PlaylistType.MainList:
				this.ApiUrl = 'featured-playlists/' + this.PageType.id;
				break;
			default:
				break;
		}

		// const routerID = this.$router.app.$route.params.id;
		// const routerURL = this.$router.app.$route.path;

		// if (routerURL.indexOf('PopularList') !== -1) {
		// 	this.ApiUrl = 'new-hits-playlists/' + routerID;
		// } else if (routerURL.indexOf('MainList') !== -1) {
		// 	this.ApiUrl = 'featured-playlists/' + routerID;
		// }

		Api.getPlaylist(this.ApiUrl).then(res => {
			for (const item of res.tracks.data) {
				const { name } = item;
				const { id, release_date, artist } = item.album;
				this.Playlist.push({ id, Image: item.album.images[1].url, name, date: release_date, artist: artist.name, artistID: artist.id });
			}

			this.TotalPage = this.Playlist.length;

			const newData: any = [];

			// item 為陣列物件的每一個物件，i 為物件索引
			this.Playlist.forEach((item, i) => {
				// 每十筆資料就新增一個空陣列
				if (i % 10 === 0) {
					newData.push([]);
				}

				// 將當前的 i/10 取整數，表示每十筆換一頁，因此為 0/10/20/30...
				const page = Math.floor(i / 10);
				newData[page].push(item);
				this.Playlist = newData;
			});

			this.TotalPage = this.Playlist.length;
		});
	}
}
</script>
