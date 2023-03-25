<script setup>
import {
  computed,
  unref,
} from 'vue';
import {
  get,
} from 'lodash-es';
import {
  HomeOutlined,
  GithubOutlined,
} from '@ant-design/icons-vue';
import router from '@/router';

const repo = 'https://github.com/merfais/kaka/packages/demo';

const filePath = computed(() => {
  const path = get(unref(router.currentRoute), 'meta.filePath');
  if (path === '@FILE_PATH@') {
    return repo;
  }

  const prefix = 'https://github.com/merfais/kaka/blob/main/packages/demo/src';
  return `${prefix}/${path}`;
});

</script>
<template>
  <section class='banner-section'>
    <div class='home'
      @click="onClickHome"
      >
      <HomeOutlined />
    </div>
    <div class='source-code'>
      <span>源码地址:</span>
      <a class='code-link'
        :href='filePath'
        target="_blank"
        rel="noopener noreferrer"
        >
        {{filePath}}
      </a>
    </div>
    <div class='space' />
    <a class='link'
      :href='repo'
      target="_blank"
      rel="noopener noreferrer"
      >
      <GithubOutlined class='github-icon' />
      欢迎 star，watch，follow 一键三连
    </a>
  </section>
</template>
<style scoped>
.banner-section {
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, .1);
  background: rgba(200, 200, 200, 0.3);
  padding: 10px 20px;
  margin-bottom: 9px;
  .home {
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: #1890ff;
    }
  }
  .space {
    flex-grow: 1;
  }
  .source-code {
    padding-left: 20px;
    font-size: 14px;
    .code-link {
      border-bottom: 1px solid #1890ff;
    }
  }
  .link {
    font-size: 18px;
    font-style: italic;
    border-bottom: 1px solid #1890ff;
    text-shadow: -1px -1px #ccc, 0.1em 0.1em 0.5em #aaa;
  }
  .github-icon {
    font-size: 30px;
    color: #555;
  }
}
</style>
