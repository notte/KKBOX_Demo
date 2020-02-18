<template>
	<div>
		<h1 @click="currentTab='MainList'">467</h1>
		<h1 @click="currentTab='MainType'">1234</h1>
		<h1 @click="currentTab='MainPlaylist'">235</h1>
		<h1 @click="currentTab='MainAlbum'">23425</h1>
		<h1 @click="currentTab='MainArtist'">78</h1>
		<MaiinListCategories v-if="isShow('MainList')" />
		<MaiinCategoryList v-if="isShow('MainType')" />
		<Album v-if="isShow('MainPlaylist')" />
		<Artist v-if="isShow('MainAlbum')" />
		<Playlist v-if="isShow('MainArtist')" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MaiinListCategories from '@/components/MainList/MaiinListCategories.vue';
import MaiinCategoryList from '@/components/MainList/MaiinCategoryList.vue';
import Album from '@/components/Album.vue';
import Artist from '@/components/Artist.vue';
import Playlist from '@/components/Playlist.vue';
import { MainType } from '@/models/status/type';

@Component({
	components: {
		MaiinListCategories,
		MaiinCategoryList,
		Album,
		Artist,
		Playlist,
	},
})
export default class MainList extends Vue {
	currentTab: string = MainType.MainList!;
	MainType: MainType = MainType.MainType;
	Playlist: MainType = MainType.Playlist;
	Album: MainType = MainType.Album;
	Artist: MainType = MainType.Artist;

	isShow(tab: MainType): boolean {
		this.$router.push({ name: this.currentTab }).catch(err => {});
		return this.currentTab === tab ? true : false;
	}
}
</script>
<style lang="scss" scoped></style>
