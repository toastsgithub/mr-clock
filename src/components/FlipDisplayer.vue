<template>
  <div class="flip-displayer">
    <div class="clock tick" ref="tick">
      <div data-repeat="true" aria-hidden="true">
        <span data-view="flip"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
export default {
  name: 'FlipDisplayer',
  props: {
    value: {}
  },
  mounted() {
    this.tick = Tick.DOM.create(this.$refs.tick, {
      value: this.value
    });
  },
  data() {
    return {
      tick: null
    };
  },
  watch: {
    value (val) {
      this.tick.value = val
    }
  }
};
</script>

<style scoped>
.flip-displayer {
  width: auto;
  /* border: solid 1px #e3e3e3; */
}
/* .clock {
  border: solid 1px #e3e3e3;
}
.tick {
  font-size: 3em;
} */
</style>