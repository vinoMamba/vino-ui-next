<template>
  <Button @click="toggleDialog">打开dialog</Button>
  <Dialog v-model:visible="visible" :cancel="cancel" :confirm="confirm">
    <template v-slot:title>
      标题
    </template>
    <template v-slot:content>
      这里是内容
    </template>
  </Dialog>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Button from "../../lib/button/Button.vue";
import Dialog from "../../lib/dialog/Dialog.vue";

export default defineComponent({
  name: 'DialogDemo',
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const toggleDialog = () => {
      visible.value = !visible.value;
    };
    const cancel = () => {
      return true;
    };
    const confirm = () => {
      return true;
    };
    return {visible, toggleDialog, cancel, confirm};
  }
});
</script>
