<script setup>
import antZhCN from 'ant-design-vue/es/locale/zh_CN';
import elZhCn from 'element-plus/es/locale/lang/zh-cn';
import Banner from '@/components/banner';
</script>

<template>
  <Banner />
  <AConfigProvider :locale="antZhCN">
    <ElConfigProvider :locale="elZhCn">
      <RouterView />
    </ElConfigProvider>
  </AConfigProvider>
</template>

<style scoped>
</style>
