<template>
	<view id="target" />
</template>

<script setup>
	import Taro, { useReady } from "@tarojs/taro";

	useReady(() => {
		// 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
		// Vue3 需要使用 Taro.nextTick 确保已经渲染完成
		Taro.nextTick(() => {
			Taro.createSelectorQuery()
				.select("#target")
				.boundingClientRect()
				.exec((res) => console.log(res));
		});
	});
</script>
