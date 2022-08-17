/**
 * Created by Liu.Jun on 2020/6/2 16:00.
 */

const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const packageData = require('../package.json');

// eslint-disable-next-line max-len
const banner = `/** @license ${packageData.name} (c) 2020-${new Date().getFullYear()} ${packageData.author} License: ${packageData.license} */`;

module.exports = {
    entry: resolve('src/index.js'),
    banner,
    external: ['vue', 'vue-color', 'monaco-editor'],
    globals: {
        vue: 'Vue',
        'vue-color': 'VueColor',
        'monaco-editor': 'monaco'
    },
    extractcss: false,
    output: {
        path: resolve('dist/'),
        file: 'vue2-form-gsui', // 导出文件名，自动拼接 format
        name: 'vue2FormGsui', // umd 注册的全局变量名称
        format: ['esm', 'umd']
    }
};
