<template>
	<div>
		<MainListCategories v-if="isShow('MainList')" />
		<MainCategoryList :CategoryID="Id" v-if="isShow('MainType')" />
		<Playlist :PlaylistID="Id" :PageType="Type" v-if="isShow('MainPlaylist')" />
		<Album v-if="isShow('MainAlbum')" :AlbumID="Id" />
		<Artist v-if="isShow('MainArtist')" :ArtistID="Id" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import MainListCategories from '@/components/MainList/MainListCategories.vue';
import MainCategoryList from '@/components/MainList/MainCategoryList.vue';
import Album from '@/components/Common/Album.vue';
import Artist from '@/components/Common/Artist.vue';
import Playlist from '@/components/Common/Playlist.vue';
import * as Status from '@/models/status/type';
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
	CurrentType: string = Status.MainType.MainList!;
	// 主題類別
	MainList: Status.MainType = Status.MainType.MainList;
	// 類別下所有歌單列表
	MainType: Status.MainType = Status.MainType.MainType;
	// 歌單
	Playlist: Status.MainType = Status.MainType.Playlist;
	// 專輯
	Album: Status.MainType = Status.MainType.Album;
	// 歌手
	Artist: Status.MainType = Status.MainType.Artist;
	Id: string = '';
	Type: object = {};

	isShow(tab: Status.MainType): boolean {
		return this.CurrentType === tab ? true : false;
	}

	@Watch('$route', { deep: true })
	onRouteChange(to: any, from: any) {
		this.CurrentType = to.name;
	}

	mounted() {
		// 接收事件
		EventBus.$on('get-info', (param: any) => {
			this.Id = param.id;
			// router跳轉
			this.$router.push({ name: param.tab, params: { id: this.Id } }).catch(err => {});
			// 切換顯示 component
			this.CurrentType = param.tab;
			this.Type = { id: param.id, type: Status.PlaylistType.MainList };
		});
	}
}
</script>
