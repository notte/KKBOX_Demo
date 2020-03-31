<template>
	<div>
		<Profile />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Profile from '@/components/User/Profile.vue';

@Component({
	components: {
		Profile,
	},
})
export default class Me extends Vue {}
</script>