<template>
	<div style="text-align:center">
		<el-page-header title content="User Name"></el-page-header>
		<img
			src="https://i.kfs.io/artist/global/10012811,0v1/fit/300x300.jpg"
			alt
			style="width: 300px;height: 300px;"
		/>
		<h1 class="artist-name">id：</h1>
		<el-divider>每日推薦</el-divider>
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

@Component({
	components: {},
})
export default class Profile extends Vue {
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
}
</script>
<style lang="scss" scoped>
</style>
