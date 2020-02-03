<template>
	<div>
		<MaiinListCategories />
		<MaiinCategoryList />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MaiinListCategories from '@/components/MaiinListCategories.vue';
import MaiinCategoryList from '@/components/MaiinCategoryList.vue';

@Component({
	components: {
		MaiinListCategories,
		MaiinCategoryList,
	},
})
export default class MainList extends Vue {}
</script>
<style lang="scss" scoped></style>
