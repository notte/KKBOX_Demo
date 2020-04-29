<template>
	<!-- 主題列表 -->
	<div>
		<div class="MainListCategories">
			<div v-for="item in MainList" :key="item.id">
				<img :src="item.images[1].url" @click="getCategory(item.id)" />
				<h1>{{ item.title }}</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as Model from '@/models/interfaces/mainPlaylists';
import Api from '@/api/main-playlists-api';
import * as EventBus from '@/utilities/event-bus';
import * as Status from '@/models/status/type';

@Component
export default class MaiinListCategories extends Vue {
	// 主題列表
	MainList: object[] = [];

	created() {
		Api.getMainListCategories().then(res => {
			this.MainList = res.data;
		});
	}
	getCategory(id: string) {
		EventBus.getMain(id, Status.MainType.MainType);
	}
}
</script>
