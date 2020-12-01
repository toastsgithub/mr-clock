<template>
  <div class="plain-clock">
    <div class="wrapper">
      <FlipDisplayer class="time" :value="formatedTime" />
      <pre class="date-stripe" v-if="$parent?.globalParams?.showDate">{{formatedDateOfNow}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlainClock',
  data () {
    return {
      timestamp: null
    }
  },
  created () {
    console.log(this.$parent.globalParams.showDate)
    this.timestamp = (new Date()).getTime()
    setInterval(() => {
      this.timestamp = (new Date()).getTime()
    }, 1000);
  },
  computed: {
    formatedTime () {
      if (!this.timestamp) return ''
      return this.$dayjs(this.timestamp).format('HH:mm:ss')
    },
    formatedDateOfNow () {
      const date = new Date()
      return this.$dayjs(date).format('YYYY - MM - DD')
    }
  }
}
</script>

<style scoped>
.plain-clock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
}
.time {
  font-size: 8vw;
}
.date-stripe {
  padding-top: 10px;
  font-size: 2vw;
  text-align: start;
}
</style>