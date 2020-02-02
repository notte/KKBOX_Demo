<template>
	<div>
		<MaiinListCategories/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MaiinListCategories from '@/components/MaiinListCategories.vue';

@Component({
	components: {
		MaiinListCategories
	},
})
export default class MainList extends Vue {}
</script>
<style lang="scss" scoped>
</style>
