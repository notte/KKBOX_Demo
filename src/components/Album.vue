<template>
	<div style="text-align:center">
		<el-page-header title content="專輯"></el-page-header>
		<img :src="data.tableData[0].url" alt style="width: 300px;height: 300px" />
		<h1>時間的輪 I will Be Your Memory</h1>
		<span>2020-01-20</span>
		<p>陳忻玥 (Vicky Chen)</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Album extends Vue {
	tableData: string[] = [];
	data = {
		tableData: [
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/500x500.jpg',
				date: '時間的輪 I will Be Your Memory',
				name: '陳忻玥 (Vicky Chen)',
			},
		],
	};
	created() {
		console.log(this.data.tableData);
	}
}
</script>
<style lang="scss">
img {
	// margin: 0 auto;
	margin: 30px 30px 15px 30px;
	// text-align: center;
}

span {
	color: #595959;
	font-size: 14px;
}

p {
	color: #333;
	font-size: 14px;
	font-weight: 900;
}

.el-divider--horizontal {
	width: 50% !important;
	margin: 0 auto !important;
	text-align: center;
}
</style>
