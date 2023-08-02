<template>
	<view class="index">
		<Counter />
		<button @click="toPage">click to me</button>
	</view>
</template>

<script setup lang="ts">
	import "./index.scss";
	import Counter from "../../components/Counter.vue";
	import Taro from "@tarojs/taro";

	const routerParams = Taro.getCurrentInstance();
	console.log(routerParams);

	function toPage() {
		Taro.navigateTo({
			url: "/pages/tab-bar/me",
		});

		// Taro.switchTab({
		//   url: "/pages/tab-bar/me",
		// });
	}
</script>
