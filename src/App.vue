<template>
  <v-header></v-header>
  <v-main></v-main>
</template>

<script>
import VHeader from "@/views/HeaderView";
import VMain from "@/views/MainView";

export default {
  name: "App",
  components: {
    VHeader,
    VMain
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.row {
  display: flex;
}

.btn {
  padding: 6px 15px;
  background: rgba(157, 199, 223, 0.61);
  border-radius: 4px;
  border: 1px solid #7d91bd;
}
</style>
