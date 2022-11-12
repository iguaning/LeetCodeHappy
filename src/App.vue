<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <the-header></the-header>
      </el-header>
      <el-main>
        <the-main></the-main>
      </el-main>
    </el-container>
    <div>
      <el-footer>
        <the-footer></the-footer>
      </el-footer>
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/header/TheHeader.vue'
import TheMain from './components/main/TheMain.vue'
import TheFooter from './components/footer/TheFooter.vue'
</script>

<style scoped>
.common-layout {
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.el-header {
  padding: 0;
}

.el-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>