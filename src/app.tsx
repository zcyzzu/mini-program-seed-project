/*
 * @Author: derek.chia
 * @Date: 2022-05-05 15:00:30
 * @LastEditTime: 2022-06-14 10:17:23
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/app.tsx
 */

import "./app.less";
import initTaroInterceptor from "./common/interceptor";

const App = (props: { children: JSX.Element; }) => {
  initTaroInterceptor();
  return props.children;
};

export default App;
