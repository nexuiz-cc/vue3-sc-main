/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081,
    hmr:{overlay: false}
  },
  css: {
    postcss: [
      postCssPxToRem({
        rootValue({ file }) {
          return file.indexOf('vant') !== -1 ? 58.5938 : 100;
        },
        propList: ['*'],
      }),
    ],
  },
});
