/*
 * @Author: derek.chia
 * @Date: 2022-05-05 15:00:30
 * @LastEditTime: 2022-06-14 10:22:56
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/presenters/counter/index.tsx
 */
import { View, Button, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import CounterViewModel from "./viewModel";
import { DIContainer } from "../../inversify.config";
import { COUNTER_IDENTIFIER } from "../../constants/identifiers";
import "./style.less";


const viewModel = DIContainer.get<CounterViewModel>(
  COUNTER_IDENTIFIER.COUNTER_VIEW_MODEL
);

export default observer(() => {
  const { counter, increment, decrement, incrementAsync } = viewModel;
  return (
    <View className="index">
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  );
});
