<template>
	<div>
		<el-page-header title content="熱門歌單"></el-page-header>
		<el-row>
			<el-col :span="5">
				<el-card shadow="hover" :body-style="{ padding: '0px' }">
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					/>
					<div class="el-card-text" style="padding: 14px;">
						<h1>好吃的汉堡</h1>
						<span>【封面人物：婁峻碩】懂玩懂創作的婁峻碩 Shou，在 2020 過年之際，發行最新的拜年單曲〈恭嘻發彩〉！利用嘻哈元素替過年增添色彩，讓拜年不再一成不變。</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class PopularListMain extends Vue {}
</script>
<style lang="scss" scoped>
</style>
