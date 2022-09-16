<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {
  },
});
</script>

<template>
  <div :class="$style.mod">
    Hello World
  </div>
</template>


<style module>
.mod {
  color: blue;
}
</style>
