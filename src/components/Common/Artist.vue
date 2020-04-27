<template>
	<div class="Artist">
		<img :src="Artist.images" />
		<h1 class="Artist_name">{{ Artist.name }}</h1>
		<el-divider>發行專輯</el-divider>
		<el-row>
			<el-col :span="4" v-for="item in ArtistTrack" :key="item.id">
				<el-card shadow="hover">
					<img :src="item.images[1].url" @click="getAlbum(item.id)" />
					<div class="el-card-text">
						<h1>{{ item.name }}</h1>
						<span>{{ item.release_date }}</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import Api from '@/api/common';
import * as Model from '@/models/interfaces/common';
import * as EventBus from '@/utilities/event-bus';
import * as Status from '@/models/status/type';

@Component
export default class Artist extends Vue {
	@Prop(String) readonly ArtistID!: string;
	@Prop(Object) readonly PageType!: any;
	// 帶入ID的歌手所有專輯
	ArtistTrack: Model.ITrackData[] = [];
	// 藝人
	Artist: any = '';

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

	created() {
		Api.getArtist(this.ArtistID).then(res => {
			this.ArtistTrack = res.data;
			this.ArtistTrack.reverse();
			this.Artist = this.ArtistTrack[0].artist;
			const { id, name, images } = this.Artist;
			this.Artist = {};
			Object.assign(this.Artist, { id, name, images: images[1].url });
		});
	}
}
</script>
