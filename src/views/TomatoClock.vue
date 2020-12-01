<template>
  <div class="tomato-clock">
    <FlipDisplayer :value="formatedTime" />
    <div class="actions">
      <button class="main-btn" @click="start">Start</button>
      <button class="main-btn" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TomatoClock',
  data () {
    return {
      tomatoTimeUnit: 25 * 60 * 1000,
      time: 0,
      intervalHandler: null
    }
  },
  created () {
  },
  methods: {
    start () {
      if (this.intervalHandler) return
      this.time = this.tomatoTimeUnit
      this.intervalHandler = setInterval(() => {
        this.time -= 1000
        if (this.time <= 0) {
          clearInterval(this.intervalHandler)
          this.intervalHandler = null
        }
      }, 1000);
    },
    reset () {
      this.time = 0
      if (this.intervalHandler) {
        clearInterval(this.intervalHandler)
        this.intervalHandler = null
      }
    },
    _padLeft(num) {
      return num.toString().padStart(2, 0)
    }
  },
  computed: {
    formatedTime () {
      if (!Number.isNaN(Number.parseInt(this.time))) {
        const { hour, minute, second } = this.$duration(this.time)
        return `${this._padLeft(hour)}:${this._padLeft(minute)}:${this._padLeft(second)}`
      }
      return 'UNKNOWN'
    }
  }
}
</script>

<style scoped>
.tomato-clock {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8vw;
  height: 100%;
}
.actions {
  font-size: initial;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  transition: .3s linear;
}
.actions > * + * {
  margin-left: 10px;
}
</style>