<script lang="tsx">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: 'Badge',
  props: {
    count: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 99
    },
    theme: {
      type: String,
      default: 'primary'
    }
  },
  setup(props, {slots}) {
    const displayCount = () => {
      if (props.count <= props.max) {
        return props.count;
      } else {
        return props.max + '+';
      }
    };
    const classes = computed(() => {
      const {theme} = props;
      return {
        [`vino-badge`]: true,
        [`vino-badge-theme-${theme}`]: theme,
      };
    });
    return () => {
      return (
          <div class={classes.value}>
            {props.count >= 0 ?
                <span>{displayCount()}</span> :
                ''
            }
            {slots.default()}
          </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vino-badge {
  margin: 4px;
  position: relative;
  display: inline-block;

  > span {
    padding: 0 6px;
    position: absolute;
    left: calc(100% + (-10px));
    top: -8px;
    height: 18px;
    line-height: 18px;
    border-radius: 9px;
    background-color: #f56c6c;
    font-size: 12px;
    color: white;
    cursor: pointer;
  }

  &-theme-blue > span {
    background-color: #409eff;
  }
}

</style>
