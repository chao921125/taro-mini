<script setup lang="ts" name="">
	import "./index.scss";
	const props = defineProps({
		name: {
			required: false,
			type: String,
			default: "",
		},
	});
	const emits = defineEmits(["change"]);
	const changeClick = () => {
		emits("change", true);
	};
	defineExpose({
		changeClick,
	});
</script>

<template>
  <view @click="changeClick">template {{ props.name }}</view>
</template>
