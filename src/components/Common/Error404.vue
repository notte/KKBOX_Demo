<template>
	<div class="error">
		<h1>404 - Page not found</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Error404 extends Vue {}
</script>
