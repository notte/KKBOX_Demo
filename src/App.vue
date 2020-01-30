<template>
	<div id="app">
		<el-container>
			<el-aside width="250px" style="background-color: rgb(238, 241, 246)">
				<el-menu default-active="1">
					<el-menu-item index="1">
						<template slot="title">
							<i class="el-icon-message"></i>熱門歌單
						</template>
					</el-menu-item>
					<el-menu-item index="2">
						<template slot="title">
							<i class="el-icon-message"></i>主題歌單
						</template>
					</el-menu-item>
					<el-menu-item index="3">
						<template slot="title">
							<i class="el-icon-message"></i>個人歌單
						</template>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
<style lang="scss">
body {
	height: 100vh;
	width: 100vw;
	margin: 0;
}

.el-aside {
	padding: 20px;
}

.el-container {
	height: 100vh;
}
</style>
