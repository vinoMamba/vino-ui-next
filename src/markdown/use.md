## 开始使用

首先，请[安装](install.md)VinoDesign组件库。安装完成后，需要在main.js中引入样式文件：

```
import {Badge,Button,Tabs,Tab,Dialog,Switch} from "vino-design-1"
import "vino-design-1/dist/lib/vino.css";
```
引入之后就可以全局使用本组件库啦。

## Vue单文件中使用

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "vino-design-1"
import "vino-design-1/dist/lib/vino.css";
export default {
  components: {Button}
}
</script>
```

组件库提供了常用的基础组件，具体示例请看组件的基本示例

下一节：[Button组件](#/doc/button)