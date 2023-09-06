<template>
	<view class="index">
		<Counter />
		<view>
			{{ msg }}
			<img src="" alt="" />
		</view>
		<Dongdong />
		<view class="btn">
			<nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
		</view>
		<nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover" />
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
	</view>
</template>

<script>
	import "./index.scss";
	import { reactive, toRefs } from "vue";
	import Counter from "@/components/Counter.vue";
	import { Dongdong } from "@nutui/icons-vue-taro";

	export default {
		name: "Index",
		components: {
			Counter,
			Dongdong,
		},
		setup() {
			const state = reactive({
				msg: "欢迎使用 NutUI4.0 开发小程序",
				msg2: "你成功了～",
				type: "text",
				show: false,
				cover: false,
			});

			const handleClick = (type, msg, cover = false) => {
				state.show = true;
				state.msg2 = msg;
				state.type = type;
				state.cover = cover;
			};

			return {
				...toRefs(state),
				handleClick,
			};
		},
	};
</script>
