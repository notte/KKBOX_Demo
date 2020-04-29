<template>
	<div>
		<ul v-for="item in HitsPlaylists" :key="item.id" class="PopularList">
			<li>
				<div class="Playlist_images">
					<img :src="item.images[2].url" alt />
					<div class="images"></div>
				</div>
				<div class="Playlist_text">
					<h3>{{ item.title.substr(0, 6) }}</h3>
					<p>{{ item.description }}</p>
					<a @click="getPlaylist(item.id)">進入歌單</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Api from '@/api/hits-playlists-api';
import EventBus, { SystemAlert, getInfo } from '@/utilities/event-bus';
import * as Model from '@/models/interfaces/hitsPlaylists';
import * as Status from '@/models/status/type';

@Component
export default class PopularListMain extends Vue {
	HitsPlaylists: Model.IData[] = [];

	created() {
		Api.getNewHitsPlaylists().then(res => {
			this.HitsPlaylists = res.data;
		});
	}

	getPlaylist(id: string): void {
		getInfo(id, Status.PopularType.Playlist);
	}
}
</script>
