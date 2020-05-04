<template>
	<!-- 選中主題 -> 歌單 -->
	<div>
		<ul class="MainCategoryList">
			<li v-for="item in MainCategory[CurrentPage]" :key="item.id">
				<div class="Playlist_images">
					<div class="images">
						<img :src="item.Images" alt />
					</div>
					<a size="medium" @click="getPlaylist(item.id)">進入歌單</a>
				</div>
				<div class="Playlist_text">
					<h3>{{ item.title }}</h3>
					<p>{{ item.description.substr(0, 100) }}</p>
				</div>
			</li>
		</ul>
		<div class="block">
			<el-pagination
				layout="prev, pager, next"
				@current-change="handleCurrentChange"
				:page-count="TotalPage"
			></el-pagination>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Api from '@/api/main-playlists-api';
import * as EventBus from '@/utilities/event-bus';
import * as Status from '@/models/status/type';
import * as Model from '@/models/interfaces/mainPlaylists';

@Component
export default class MaiinCategoryList extends Vue {
	@Prop(String) readonly CategoryID!: string;
	// 目前選中的頁碼
	CurrentPage: number = 0;
	// 類別下所有歌單
	MainCategory: object[] = [];
	// 總頁數，重新整理後的陣列長度
	TotalPage: number = 0;
	MainCategoryList: Model.IMainCateforyListData[] = [];

	// MainCategoryList = {} as Model.IPlaylist;
	created() {
		Api.getMainCategory(this.CategoryID).then(res => {
			for (const item of res.playlists.data) {
				const { id, title, description, images } = item;
				this.MainCategory.push({ id, title, description, Images: images[2].url });
			}

			const newData: any = [];

			this.MainCategory.forEach((item, i) => {
				if (i % 9 === 0) {
					newData.push([]);
				}
				const page = Math.floor(i / 9);
				newData[page].push(item);
				this.MainCategory = newData;
			});
			this.TotalPage = this.MainCategory.length;
		});
	}
	handleCurrentChange(val: number) {
		this.CurrentPage = val - 1;
	}
	getPlaylist(id: string): void {
		EventBus.getMain(id, Status.MainType.Playlist);
	}
}
</script>
