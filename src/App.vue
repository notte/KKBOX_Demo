<template>
	<div id="app">
		<el-container>
			<el-aside>
				<el-menu default-active="1">
					<router-link to="/PopularList">
						<el-menu-item index="1">
							<template slot="title"> <i class="el-icon-message"></i>熱門歌單 </template>
						</el-menu-item>
					</router-link>
					<router-link to="/MainList">
						<el-menu-item index="2">
							<template slot="title"> <i class="el-icon-message"></i>主題歌單 </template>
						</el-menu-item>
					</router-link>
					<router-link to="/Profile">
						<el-menu-item index="3">
							<template slot="title"> <i class="el-icon-message"></i>個人歌單 </template>
						</el-menu-item>
					</router-link>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PopularList from '@/view/PopularList.vue';
import MainList from '@/view/MainList.vue';
import Me from '@/view/Me.vue';
import Request from '@/utilities/api-handle';
// import axios from 'axios';

@Component({
	components: {
		PopularList,
		MainList,
		Me,
	},
})
export default class App extends Vue {
	created() {
		// console.log(Request.request());
	}
}
</script>
<style lang="scss" scoped></style>
