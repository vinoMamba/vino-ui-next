<template>
  <Button>牛逼</Button>

  <Button loading>loading</Button>
  <Button disabled>normal</Button>
  <Button theme="primary">normal</Button>
  <Button theme="success">success</Button>
  <Button theme="warning">warning</Button>
  <Button theme="error">error</Button>
  <Button theme="primary" circle>normal</Button>
  <Button theme="success" circle>success</Button>
  <Button theme="warning" circle>warning</Button>
  <Button theme="error" circle>error</Button>
  <Button size="small">small</Button>
  <Button size="normal">normal</Button>
  <Button size="large">large</Button>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Button from "../../lib/button/Button.vue";

export default defineComponent({
  name: 'ButtonDemo',
  components: {Button},
});
</script>
