<template>
  <div>
    <Badge :count="1" theme="primary">
      <Button>评论</Button>
    </Badge>
    <Badge :count="80" theme="blue">
      <Button>评论</Button>
    </Badge>
    <Badge :count="199" :max="99">
      <Button size="small">评论</Button>
    </Badge>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Badge from "../../lib/badge/Badge.vue";
import Button from "../../lib/button/Button.vue";

export default defineComponent({
  name: 'BadgeDemo',
  components: {Badge, Button}
});
</script>
