import { defineConfig } from 'dumi';

export default defineConfig({
    title: '资源导航',
    favicon: 'navigation.png',
    logo: 'navigation.png',
    outputPath: 'docs-dist',
    locales: [['zh-CN', '中文'], ['en-US', 'English']],
    alias: {
        components: '../../components',
    },
    links: [{ rel: 'stylesheet', href: '/global.css' }],
    // more config: https://d.umijs.org/config
});
