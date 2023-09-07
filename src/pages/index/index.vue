<template>
	<image :src="logo" class="test-img"></image>
	<view class="test-font">文字<nut-button>按钮</nut-button></view>
	<nut-grid>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
		<nut-grid-item text="文字"><Dongdong /></nut-grid-item>
	</nut-grid>
</template>

<script setup lang="ts" name="">
	import "./index.scss";
	import logo from "@/assets/logo.png";
	import { Dongdong } from "@nutui/icons-vue-taro";
</script>
