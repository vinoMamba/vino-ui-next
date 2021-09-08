<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useProvider} from "./hooks";

export default defineComponent({
  name: "App",
  setup() {
    useProvider();
  }
});
</script>
