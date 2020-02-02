<template>
	<div>
		<!-- <PopularListMain /> -->
		<!-- <PopularPlaylist /> -->
		<!-- <Album /> -->
		<Artist />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PopularListMain from '@/components/PopularListMain.vue';
import PopularPlaylist from '@/components/PopularPlaylist.vue';
import Album from '@/components/Album.vue';
import Artist from '@/components/Artist.vue';

@Component({
	components: {
		PopularListMain,
		PopularPlaylist,
		Album,
		Artist,
	},
})
export default class PopularList extends Vue {}
</script>
<style lang="scss" scoped>
</style>
