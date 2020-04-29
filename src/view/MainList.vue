<template>
	<div>
		<MainListCategories v-if="isShow('MainList')" />
		<MainCategoryList :CategoryID="Id" v-if="isShow('MainType')" />
		<Playlist :PlaylistID="Id" :PageType="Type" v-if="isShow('MainPlaylist')" />
		<Album v-if="isShow('MainAlbum')" :AlbumID="Id" :PageType="Type" />
		<Artist v-if="isShow('MainArtist')" :ArtistID="Id" :PageType="Type" />
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
	CurrentType: string = Status.MainType.MainList!;
	MainList: Status.MainType = Status.MainType.MainList;
	MainType: Status.MainType = Status.MainType.MainType;
	Playlist: Status.MainType = Status.MainType.Playlist;
	Album: Status.MainType = Status.MainType.Album;
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
		EventBus.$on('get-info', (param: any) => {
			this.Id = param.id;
			this.$router.push({ name: param.tab, params: { id: this.Id } }).catch(err => {});
			this.CurrentType = param.tab;
			this.Type = { id: param.id, type: Status.PlaylistType.MainList };
		});
	}
}
</script>
