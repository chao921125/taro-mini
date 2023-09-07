<template>
	<image :src="logo" class="test-img"></image>
	<view class="test-font">文字<nut-button>按钮</nut-button></view>
</template>

<script setup lang="ts" name="">
	import "./index.scss";
	import logo from "@/assets/logo.png";
</script>
