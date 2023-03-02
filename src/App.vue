<template>
  <div class="app-wrap">
    <RouterLink to="/EditIndex">EditIndex</RouterLink>
    <div class="route-wrap">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<style lang="scss">
.app-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .route-wrap {
    display: flex;
    flex: 1;
    height: 0;
    > div {
      flex: 1;
    }
  }
}
</style>
