<template>
	<div>
		<PopularListMain v-if="isShow('PopularList')" :isShow="isShow" />
		<Playlist v-if="isShow('Playlist')" />
		<!-- <Album /> -->
		<!-- <Artist /> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import PopularListMain from '@/components/PopularList/PopularListMain.vue';
import Playlist from '@/components/Common/Playlist.vue';
import Album from '@/components/Common/Album.vue';
import Artist from '@/components/Common/Artist.vue';
import { PopularType } from '@/models/status/type';
// import * as EventBus from '@/utilities/event-bus';
import EventBus from '@/utilities/event-bus';

@Component({
	components: {
		PopularListMain,
		Playlist,
		Album,
		Artist,
	},
})
export default class PopularList extends Vue {
	currentTab: string = PopularType.PopularList;
	PopularList: PopularType = PopularType.PopularList;
	Playlist: PopularType = PopularType.Playlist;
	Album: PopularType = PopularType.Album;
	Artist: PopularType = PopularType.Artist;

	created() {}

	// 判斷當前要顯示哪個組件
	isShow(tab: PopularType): boolean {
		// this.$router.push({ name: tab }).catch(err => {});
		// if (tab === '/' + location.pathname) {

		// } else {
		// }
		// this.currentTab = tab;
		// return true;
		// this.$router.push({ name: this.currentTab }).catch(err => {});
		return this.currentTab === tab ? true : false;
	}

	@Watch('$route')
	checkCurrentTab() {
		EventBus.$on('get-playlist', (id: string, tab: string) => {
			console.log(id);
		});
	}

	mounted() {
		EventBus.$on('get-playlist', (content: any) => {
			// this.$router.push({ name: content.tab }).catch(err => {});
			// this.currentTab = content.tab;
		});
	}
}
</script>
<style lang="scss" scoped></style>
