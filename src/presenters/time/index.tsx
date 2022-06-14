/*
 * @Author: derek.chia
 * @Date: 2022-05-07 18:37:04
 * @LastEditTime: 2022-06-14 10:18:19
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/presenters/time/index.tsx
 */

import { View } from "@tarojs/components";
import Clock from "../../common/components/clock/clock";
import "./style.less";

const Time = (): JSX.Element => {
  return (
    <View className="clockView">
      <Clock />
    </View>
  );
};
export default Time;
