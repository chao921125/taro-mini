<template>
	<view class="index">
		<Counter />
	</view>
</template>

<script>
	import { ref, onMounted } from "vue";
	import "./index.scss";
	import Counter from "../../components/Counter.vue";

	export default {
    name: "Index",
    components: {
      Counter,
    },
    setup() {
    }
	};
</script>
