<template>
  <h1>湖人总冠军</h1>
  <Vino/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Vino from "./components/Vino.vue";

export default defineComponent({
  name: "App",
  components: {Vino}
});
</script>
