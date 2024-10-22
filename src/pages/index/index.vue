<script setup>
	import "./index.scss";
	import Counter from "@/components/Counter.vue";
  import "./index.scss";
  import logo from "@/assets/logo.png";
  import { Dongdong } from "@nutui/icons-vue-taro";
</script>

<template>
	<view class="index">
		<image
			:src="logo"
			class="test-img"></image>
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
		<Counter />
	</view>
</template>
