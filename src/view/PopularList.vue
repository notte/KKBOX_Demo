<template>
	<div>
		<!-- <h1 @click="currentTab='PopularList'">234</h1>
		<h1 @click="currentTab='Playlist'">53</h1>
		<h1 @click="currentTab='Album'">235</h1>
		<h1 @click="currentTab='Artist'">123</h1>-->
		<PopularListMain v-if="isShow('PopularList')" />
		<Playlist v-if="isShow('Playlist')" />
		<Album v-if="isShow('Album')" />
		<Artist v-if="isShow('Artist')" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PopularListMain from '@/components/PopularListMain.vue';
import Playlist from '@/components/Playlist.vue';
import Album from '@/components/Album.vue';
import Artist from '@/components/Artist.vue';
import { PopularType } from '@/models/status/type';

@Component({
	components: {
		PopularListMain,
		Playlist,
		Album,
		Artist,
	},
})
export default class PopularList extends Vue {
	currentTab: string = PopularType.PopularList!;
	PopularList: PopularType = PopularType.PopularList;
	Playlist: PopularType = PopularType.Playlist;
	Album: PopularType = PopularType.Album;
	Artist: PopularType = PopularType.Artist;

	created() {
		// console.log(this.currentTab);
	}

	isShow(tab: PopularType): boolean {
		this.$router.push({ name: this.currentTab }).catch(err => {});
		return this.currentTab === tab ? true : false;
	}
}
</script>
<style lang="scss" scoped></style>
