<template>
  <div>
    <Switch v-model:selected="on"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Switch from "/@/lib/switch/Switch.vue";

export default defineComponent({
  name: "SwitchDemo",
  components: {Switch},
  setup() {
    const on = ref(true);
    return {
      on
    };
  }
});
</script>
