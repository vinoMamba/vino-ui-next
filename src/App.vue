<template>
  <h1>湖人总冠军 |
    <router-link to="/">vino</router-link>
    |
    <router-link to="/doc">vino2</router-link>
  </h1>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "App",
});
</script>
