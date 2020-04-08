<template>
	<div>
		<!-- <h1 @click="currentTab='MainList'">467</h1>
		<h1 @click="currentTab='MainType'">1234</h1>
		<h1 @click="currentTab='MainPlaylist'">235</h1>
		<h1 @click="currentTab='MainAlbum'">23425</h1>
		<h1 @click="currentTab='MainArtist'">78</h1>-->
		<MainListCategories v-if="isShow('MainList')" />
		<MainCategoryList :CategoryID="Id" v-if="isShow('MainType')" />
		<!-- <Album v-if="isShow('MainPlaylist')" /> -->
		<!-- <Artist v-if="isShow('MainAlbum')" /> -->
		<!-- <Playlist v-if="isShow('MainArtist')" /> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MainListCategories from '@/components/MainList/MainListCategories.vue';
import MainCategoryList from '@/components/MainList/MainCategoryList.vue';
import Album from '@/components/Common/Album.vue';
import Artist from '@/components/Common/Artist.vue';
import Playlist from '@/components/Common/Playlist.vue';
import { MainType } from '@/models/status/type';
import EventBus from '@/utilities/event-bus';

@Component({
	components: {
		MainListCategories,
		MainCategoryList,
		Album,
		Artist,
		Playlist,
	},
})
export default class MainList extends Vue {
	// 當前開啟類別
	CurrentType: string = MainType.MainList!;
	// 主題類別
	MainList: MainType = MainType.MainList;
	// 類別下所有歌單列表
	MainType: MainType = MainType.MainType;
	// 歌單
	Playlist: MainType = MainType.Playlist;
	// 專輯
	Album: MainType = MainType.Album;
	// 歌手
	Artist: MainType = MainType.Artist;
	Id: string = '';

	isShow(tab: MainType): boolean {
		this.$router.push({ name: this.CurrentType }).catch(err => {});
		return this.CurrentType === tab ? true : false;
	}

	mounted() {
		// 接收事件
		EventBus.$on('get-info', (param: any) => {
			this.Id = param.id;
			// router跳轉
			this.$router.push({ name: param.tab }).catch(err => {});
			// 切換顯示 component
			this.CurrentType = param.tab;
		});
	}
}
</script>
