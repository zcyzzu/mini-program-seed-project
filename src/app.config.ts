/*
 * @Author: derek.chia
 * @Date: 2022-05-05 15:00:30
 * @LastEditTime: 2022-05-07 19:50:41
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/app.config.ts
 */
export default defineAppConfig({
  pages: [
    'presenters/home/index',
    'presenters/time/index',
    'presenters/counter/index',
    'presenters/simpleRequest/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
