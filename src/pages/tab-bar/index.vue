<template>
	<view class="index">
		<Counter />
		<button @tap="toPage()">to page user</button>
	</view>
</template>

<script setup lang="ts">
	import "./index.scss";
	import Counter from "../../components/Counter.vue";
	import Taro from "@tarojs/taro";

	const routerParams = Taro.getCurrentInstance();
	console.log(routerParams);

	const toPage = () => {
		console.log("click");
		Taro.navigateTo({
			url: "/pages/user/list",
			success: (res) => {
				console.log("success", res);
			},
			fail: (err) => {
				console.log("fail", err);
			},
		});

		// Taro.switchTab({
		//   url: "/pages/tab-bar/me",
		// });
	};
</script>
