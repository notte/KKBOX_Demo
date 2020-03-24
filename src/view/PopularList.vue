<template>
	<div>
		<PopularListMain v-if="isShow('PopularList')" />
		<Playlist v-if="isShow('Playlist')" :PlaylistID="PlaylistID" />
		<!-- <Album v-if="isShow('Album')" /> -->
		<!-- <Artist v-if="isShow('Artist')" /> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import PopularListMain from '@/components/PopularList/PopularListMain.vue';
import Playlist from '@/components/Common/Playlist.vue';
import Album from '@/components/Common/Album.vue';
import Artist from '@/components/Common/Artist.vue';
import { PopularType } from '@/models/status/type';
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
	currentType: string = PopularType.PopularList;
	PopularList: PopularType = PopularType.PopularList;
	Playlist: PopularType = PopularType.Playlist;
	Album: PopularType = PopularType.Album;
	Artist: PopularType = PopularType.Artist;
	PlaylistID: string = '';

	// 判斷當前要顯示哪個組件
	isShow(tab: PopularType): boolean {
		return this.currentType === tab ? true : false;
	}

	mounted() {
		// 接收 get-playlist 事件，點擊歌單
		EventBus.$on('get-playlist', (param: any) => {
			this.PlaylistID = param.id;
			// router跳轉
			this.$router.push({ name: 'Playlist' }).catch(err => {});
			// 切換顯示 component
			this.currentType = param.tab;
		});
	}
}
</script>
<style lang="scss" scoped></style>
