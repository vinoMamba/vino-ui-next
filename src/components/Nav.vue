<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </router-link>
    </div>
    <ol class="menu">
      <li>
        <router-link to="/doc/button">组件</router-link>
      </li>
      <li>
        <a href="https://gitee.com/vino-wang/vino-ui" target="_blank">码云</a>
      </li>
    </ol>
    <div class="toggle-icon" @click="toggleAside" v-if="showMenuButton">
      <svg class="icon">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
  </nav>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "Nav",
  props: {
    showMenuButton: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideToggle = inject<Ref<Boolean>>("asideToggle");
    const toggleAside = () => {
      asideToggle.value = !asideToggle.value;
    };
    return {toggleAside};
  }
};

</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lighten(#7ed5f5, 10%);
  z-index: 20;

  > .logo {
    margin-right: auto;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;

    > li {
      padding: 0 8px;
      margin: 4px;
    }
  }

  > .toggle-icon {
    display: none;
  }

  @media (max-width: 500px) {
    > .logo {
      margin: auto;
    }
    > .menu {
      display: none;
    }
    > .toggle-icon {
      display: block;
      position: fixed;
      top: 16px;
      left: 16px;
    }
  }

}

</style>