<template>
  <div class="vino-tabs">
    <ul class="vino-tabs-titles">
      <li v-for="(title,index) in titles" :key="index" @click="selectedTab(title)"
          :class="{selected: title===selected}">
        {{ title }}
      </li>
    </ul>
    <div class="vino-tabs-content">
      <component :is="currentTab" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Tab from './Tab.vue';

export default defineComponent({
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子组件必须是Tab');
      }
    });
    const titles = defaults.map(tag => tag.props.title);
    const selectedTab = (title) => {
      context.emit('update:selected', title);
    };
    const currentTab = () => defaults.find(tab => tab.props.title === props.selected);
    return {titles, selectedTab, currentTab};
  }
});
</script>

<style lang="scss">
.vino-tabs {

  &-titles {
    display: flex;

    > li {
      height: 32px;
      line-height: 32px;
      padding: 0 16px;
      cursor: pointer;
      transition: all .25s ease;
      background-color: #73b8ff;
      color: white;

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }

      &:hover {
        background-color: darken(#73b8ff, 20%);
      }

      &.selected {
        background-color: darken(#73b8ff, 20%);
      }
    }
  }

  &-content {
    padding: 16px;
    border: 1px solid #f0f0f0;
  }
}

</style>
