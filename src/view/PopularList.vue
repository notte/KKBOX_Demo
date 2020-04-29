<template>
	<div class="PopularList">
		<PopularListMain v-if="isShow('PopularList')" />
		<Playlist v-if="isShow('PopularPlaylist')" :PlaylistID="Id" :PageType="Type" />
		<Album v-if="isShow('PopularAlbum')" :AlbumID="Id" :PageType="Type" />
		<Artist v-if="isShow('PopularArtist')" :ArtistID="Id" :PageType="Type" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import PopularListMain from '@/components/PopularList/PopularListMain.vue';
import Playlist from '@/components/Common/Playlist.vue';
import Album from '@/components/Common/Album.vue';
import Artist from '@/components/Common/Artist.vue';
import * as Status from '@/models/status/type';
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
	CurrentType: string = Status.PopularType.PopularList;
	PopularList: Status.PopularType = Status.PopularType.PopularList;
	Playlist: Status.PopularType = Status.PopularType.Playlist;
	Album: Status.PopularType = Status.PopularType.Album;
	Artist: Status.PopularType = Status.PopularType.Artist;
	Id: string = '';
	Type: object = {};

	created() {}

	// 判斷當前要顯示哪個組件
	isShow(tab: Status.PopularType): boolean {
		return this.CurrentType === tab ? true : false;
	}

	// deep：深度Watch
	// 監聽 router 變化
	@Watch('$route', { deep: true })
	onRouteChange(to: any, from: any) {
		this.CurrentType = to.name;
	}

	mounted() {
		// 接收 get-playlist 事件，切換對應組件
		// param 回傳點擊當前的 id 及開啟類型
		EventBus.$on('get-info', (param: any) => {
			this.Id = param.id;
			// router 跳轉，並帶入當前點擊的id
			this.$router.push({ name: param.tab, params: { id: this.Id } }).catch(err => {});
			// 切換顯示 component
			this.CurrentType = param.tab;
			// 傳值到組件
			this.Type = { id: param.id, type: Status.PlaylistType.Popular };
		});
	}
}
</script>
