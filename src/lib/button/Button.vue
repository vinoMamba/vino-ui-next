<script lang="tsx">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "primary"
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  setup(props, {slots}) {
    const classes = computed(() => {
      const {theme, circle, disabled, size, loading} = props;
      return {
        ["vino-button"]: true,
        [`vino-button-theme-${theme}`]: theme,
        [`vino-button-circle`]: circle,
        [`vino-button-disabled`]: disabled,
        [`vino-button-size-${size}`]: size,
        [`vino-button-loading`]: loading,
      };
    });
    return () => {
      return (
          <button class={classes.value} disabled={props.disabled}>
            {props.loading ?
                <span class="vino-button-loading-span"/> :
                ""
            }
            {slots.default && slots.default()}
          </button>
      );
    };
  }
});
</script>

<style lang="scss">
.vino-button {
  padding: 8px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  cursor: pointer;


  &-theme-primary {
    background-color: #409eff;

    &:hover {
      background-color: lighten(#409eff, 10%);
    }

    &:active {
      background-color: lighten(#409eff, 10%);
    }
  }

  &-theme-success {
    background-color: #67c23a;


    &:hover {
      background-color: lighten(#67c23a, 10%);
    }

    &:active {
      background-color: lighten(#67c23a, 10%);
    }
  }

  &-theme-warning {
    background-color: #e6a23c;

    &:hover {
      background-color: lighten(#e6a23c, 10%);
    }

    &:active {
      background-color: lighten(#e6a23c, 10%);
    }
  }

  &-theme-error {
    background-color: #d2322d;

    &:hover {
      background-color: lighten(#d2322d, 10%);
    }

    &:active {
      background-color: lighten(#d2322d, 10%);
    }
  }

  &-circle {
    border-radius: 20px;
  }

  &-disabled {
    background-color: #eeeeee;
    cursor: not-allowed;

    &:hover {
      background-color: #eeeeee;
    }

    &:active {
      background-color: #eeeeee;
    }
  }

  &-size-large {
    padding: 14px 24px;
    font-size: 18px;
  }

  &-size-small {
    padding: 10px 18px;
    font-size: 12px;
  }

  &-loading {
    background-color: lighten(#409eff, 10%);

    &-span {
      display: inline-block;
      border: 2px solid red;
      border-bottom: white;
      margin: 0 4px;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      animation: vino-loading 1s infinite linear;
    }
  }
}

@keyframes vino-loading {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
