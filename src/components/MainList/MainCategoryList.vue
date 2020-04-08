<template>
	<div>
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

	MainCategoryList: Model.IMainCateforyListData[] = [];
	// MainCategoryList = {} as Model.IPlaylist;
	created() {
		Api.getMainCategory(this.CategoryID).then(res => {
			this.MainCategoryList = res.playlists.data;
			console.log(this.MainCategoryList);
		});
		// .catch(err => {
		// 	EventBus.SystemAlert(Status.SysMessageType.Error, Status.ErrorPopupContent.InternalServer);
		// });
	}
}
</script>