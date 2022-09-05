<template>
  <header class="v-header header">
    <div class="container">
      <div class="row header__content">
        <div class="logo">
          <img
            :src="require('@/assets/images/helpscout-icon.svg')"
            alt="logo"
            class="logo__img"
            width="45"
            height="45"
          />
          <span class="logo__text">ERP</span>
        </div>

        <div class="data">{{ DateTime }}</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      DateTime: ""
    };
  },
  mounted() {
    this.DateTime = new Date().toISOString().slice(0, 10);
    this.DateTime = this.DateTime.replace(/-/g, ".");
  }
};
</script>

<style lang="less">
.header {
  &__content {
    align-items: center;
    justify-content: space-between;
    background: rgb(211, 214, 216);
    padding: 15px;
  }
}
</style>
