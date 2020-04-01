<template>
	<div>
		<el-row>
			<el-col :span="12">
				<el-card shadow="hover">
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					/>
					<div class="el-card-text">
						<h1>好吃的汉堡</h1>
						<span>有些歌曲總能唱起愛情的酸甜苦辣，特別是一些對唱歌曲，你一句我一句的猶如在對話一般，將心裡的深愛與難過都一併道盡。挑選一些對唱的西洋情歌，說出你心裡的話，若說不出口，就用歌曲來表示吧！</span>
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
export default class MaiinCategoryList extends Vue {}
</script>