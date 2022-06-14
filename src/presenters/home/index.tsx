/*
 * @Author: derek.chia
 * @Date: 2022-05-07 19:35:15
 * @LastEditTime: 2022-06-14 10:18:57
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/presenters/home/index.tsx
 */
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default () => {
  return (
    <View className="index">
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/presenters/time/index",
          });
        }}
      >
        时钟
      </Button>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/presenters/counter/index",
          });
        }}
      >
        计数器
      </Button>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/presenters/simpleRequest/index",
          });
        }}
      >
        简单请求
      </Button>
    </View>
  );
};
