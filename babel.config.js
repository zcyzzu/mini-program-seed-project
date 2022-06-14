/*
 * @Author: derek.chia
 * @Date: 2022-05-05 15:00:30
 * @LastEditTime: 2022-05-09 18:29:56
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/babel.config.js
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const { includes } = require("lodash");
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    // reference: https://juejin.cn/post/7046782284107612174
    ["import", {
      libraryName: "taro-ui",
      customName: (name, file) => {
        const nameSection = name.split('-')
        if (nameSection.length === 4) {
          // 子组件的路径跟主组件一样
          nameSection.pop()
        }
        // 指定组件做路径映射
        const pathMap = {
          'tabs/pane': 'tabs-pane',
          'modal-action': 'modal/action',
          'modal-content': 'modal/content',
          'modal-header': 'modal/header'
        }
        const path = nameSection.slice(1).join('-');
        return `taro-ui/lib/components/${pathMap[path] || path}`;
      },
      style: (name) => {
        // 这里的 name 是 customName 方法返回的，即经过上一步处理后的

        // 1、如果是 modal 相关的组件，则统一返回 modal.scss
        if (includes(name, '/modal')) {
          return 'taro-ui/dist/style/components/modal.scss'
        }

        const wholePath = name.split('/')
        const compName = wholePath[wholePath.length - 1]
        const fix = {
          'tabs-pane': 'tabs',
          // 2、或者在这里写映射，这里正好跟上面的映射相反
          // 'modal/action': 'modal',
          // 'modal/header': 'modal',
          // 'modal/content': 'modal',
        }[compName]
        return `taro-ui/dist/style/components/${fix || compName}.scss`
      }
    }]
  ]
}
