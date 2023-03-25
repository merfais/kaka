import antv from 'ant-design-vue';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/zh-cn';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import 'ant-design-vue/dist/antd.css';
import '@/assets/antd-reset.css';

dayjs.locale(zhCN.locale);
dayjs.extend(updateLocale);
dayjs.updateLocale(zhCN.locale, {
  weekStart: 1,
});

export function add(app) {
  app.use(antv.install);
}
