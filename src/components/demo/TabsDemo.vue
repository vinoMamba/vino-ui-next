<template>
  <Tabs v-model:selected="selected">
    <Tab title="标题一">内容一</Tab>
    <Tab title="标题二">内容二</Tab>
    <Tab title="标题三">内容三</Tab>
  </Tabs>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Tab from "../../lib/tabs/Tab.vue";
import Tabs from "../../lib/tabs/Tabs.vue";


export default defineComponent({
  name: 'TabsDemo',
  components: {Tab, Tabs},
  setup() {
    const selected = ref('标题一');
    return {
      selected
    };
  }
});
</script>
