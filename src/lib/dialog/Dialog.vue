<script lang="tsx">
import {defineComponent} from "vue";
import Button from "../button/Button.vue";

export default defineComponent({
  name: 'Dialog',
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnOverlay: {
      type: Boolean,
      default: true
    },
    cancel: {
      type: Function
    },
    confirm: {
      type: Function
    }

  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit('update:visible', !props.visible);
    };
    const toggleOnOverlay = () => {
      if (props.closeOnOverlay) {
        closeDialog();
      }
    };
    const cancel = () => {
      if (props.cancel) {
        closeDialog();
      }
    };
    const confirm = () => {
      if (props.confirm) {
        closeDialog();
      }
    };
    return () => {
      return (
          <div class={{"vino-dialog-display": true, visible: props.visible}}>
            <div class="vino-dialog-overlay" onClick={toggleOnOverlay}></div>
            <div class="vino-dialog-wrapper">
              <div class="vino-dialog">
                <header>
                  <slot name="title"/>
                  <Button theme="error">x</Button>
                </header>
                <main>
                  <slot name="content"/>
                </main>
                <footer>
                  <Button>Cancel</Button>
                  <Button>confirm</Button>
                </footer>
              </div>
            </div>
          </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vino-dialog-display {
  display: none;


  .vino-dialog {
    background-color: white;
    min-width: 16em;
    max-width: 90%;
    //遮罩层
    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: fade-out(black, 0.4);
      z-index: 10;
    }

    &-wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
      transition: all 1s ease;
    }

    > header {
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
    }

    > main {
      padding: 12px 16px;
    }

    > footer {
      display: flex;
      justify-content: space-around;
      padding: 12px 16px;
      cursor: pointer;
    }
  }

  &.visible {
    display: block;
  }
}


</style>

