<template>
  <div class="container">
    <div class="switch">
      <button class="main-btn" @click="current = 'tomato'">Tomato</button>
      <button class="main-btn" @click="current = 'plain'">Plain</button>
      <button class="main-btn" @click="current = 'info'">Info</button>
    </div>
    <div class="app-space">
    <!-- <FlipDisplayer style="font-size: 42px" v-if="dispValue" class="holder" :value="dispValue" /> -->
      <PlainClock v-show="current === 'plain'" />
      <TomatoClock v-show="current === 'tomato'" />
      <Info v-show="current === 'info'" />
    </div>
  </div>
</template>

<script>
import TomatoClock from './views/TomatoClock'
import PlainClock from './views/PlainClock'
import Info from './views/Info'
export default {
  name: 'App',
  components: {
    TomatoClock,
    PlainClock,
    Info
  },
  data() {
    return {
      current: "plain",
      globalParams: {
        showDate: true
      }
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html, body, #app, .container {
  border: solid 1px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 100%;
  background: black;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.app-space {
  flex: 1;
  /* border: solid 1px peru; */
  width: 100%;
}
.switch > * + * {
  margin-left: 5px;
}
</style>
