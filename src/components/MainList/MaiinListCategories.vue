<template>
	<div>
		<el-row>
			<el-col :span="7">
				<el-card
					shadow="hover"
					style="background: url('https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png');background-size: cover;"
				>
					<div class="el-card-text">
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
