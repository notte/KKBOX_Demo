<template>
	<div>
		<el-page-header title content="主題歌單"></el-page-header>
		<el-row>
			<el-col :span="7">
				<el-card shadow="hover" :body-style="{ padding: '0px'}" style="background: url('https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png');background-size: cover;">
				
					<div class="el-card-text" style="padding: 14px;">
						<h1>好吃的汉堡</h1>
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
export default class MaiinListCategories extends Vue {}
</script>
<style lang="scss" scoped>
.el-container{
.el-card {
	position: relative;
	height: 300px;
	
	.el-card__body{
		position: absolute;
		left:50%;
		top: 50%;
		transform: translate(-50%,-50%);
		h1{
			font-size: 36px;
		}
	}
}
}
</style>
