<script lang="tsx">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Switch",
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    onText: {
      type: String,
      default: ""
    },
    offText: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggleStatus = () => {
      context.emit("update:selected", !props.selected);
    };
    return () => {
      return (
          <button
              onClick={toggleStatus}
              class={{"vino-switch": true, "selected": props.selected}}
              disabled={props.disabled}>
            {props.selected ?
                <span class={{"vino-switch-off": props.onText !== ""}}>{props.onText}</span> :
                <span class={{"vino-switch-on": props.offText !== ""}}>{props.offText}</span>
            }
          </button>
      );
    };
  }
});
</script>
<style lang="scss">

.vino-switch {
  position: relative;
  display: inline-block;
  height: 8px;
  width: 48px;
  border-radius: 8px;
  cursor: pointer;
  background: #c5c5c5;
  transition: all .2s ease;
  border: none;
  outline: none;

  &::after {
    position: absolute;
    top: -8px;
    left: 0;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #eeeeee;
    transition: all .2s ease;
  }

  &.selected {
    background-color: #409eff;

    &::after {
      left: calc(100% - 24px);
      background-color: lighten(#409eff, 10%);
    }
  }

  &-off, &-on {
    white-space: nowrap;
    position: absolute;
    left: 60px;
    top: -4px;
  }

  &-on {
    color: #c5c5c5;
  }

  &-off {
    color: #409eff;
  }

  &:disabled {
    cursor: not-allowed;
  }
}


</style>