<script setup>
import {
  SwapRightOutlined,
} from '@ant-design/icons-vue';

const demoLinks = [{
  name: 'SQL 编辑器，代码提示',
  link: '/',
}];
</script>
<template>
  <div class="home-wrapper">
    <div class='flex-center'>
      <LogoIcon class='logo mt-10 mr-10' />
      <label class='name'>vue-demo</label>
    </div>
    <div class='nav-wrapper'>
      <div v-for="item in demoLinks"
        :key="item.name"
        class="item-wrapper align-center"
      >
        <SwapRightOutlined class='pr-20' />
        <router-link :to="item.link">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logo {
  font-size: 70px;
}
.name {
  font-size: 80px;
  font-weight: 700;
  font-style: italic;
}
.nav-wrapper {
  padding: 30px;
  text-align: center;
  font-size: 20px;
  .item-wrapper {

    padding-left: 100px;
    &:hover {
      color: #1890ff;
    }
    a {
      font-weight: bold;
      color: #2c3e50;
    }
    a:hover {
      color: #1890ff;
      border-bottom: 1px solid #1890ff;
    }
    a.router-link-exact-active {
      color: #42b983;
    }
    .pre-icon {
      font-size: 40px;
      font-weight: 600;
    }
  }
}
</style>
