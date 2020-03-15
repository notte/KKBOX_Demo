<template>
	<div>
		<el-page-header title content="華語驚爆"></el-page-header>
		<el-table :data="data.tableData" style="width: 70%">
			<el-table-column width="200">
				<template slot-scope="scope">
					<img :src="scope.row.url" alt style="width: 160px;height: 160px" />
				</template>
			</el-table-column>
			<el-table-column prop="date" width="250"></el-table-column>
			<el-table-column prop="name"></el-table-column>
		</el-table>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Playlist extends Vue {
	tableData: string[] = [];
	data = {
		tableData: [
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '時間的輪 I will Be Your Memory',
				name: '陳忻玥 (Vicky Chen)',
			},
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '2016-05-04',
				name: '王小虎',
			},
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '2016-05-01',
				name: '王小虎',
			},
			{
				url: 'https://i.kfs.io/album/global/67948281,0v1/fit/160x160.jpg',
				date: '2016-05-03',
				name: '王小虎',
			},
		],
	};
	created() {
		// console.log(this.data.tableData);
	}
}
</script>
