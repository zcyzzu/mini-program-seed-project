/*
 * @Author: derek.chia
 * @Date: 2022-05-07 19:47:33
 * @LastEditTime: 2022-06-14 10:24:26
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/presenters/simpleRequest/index.tsx
 */
import { View, Text, ScrollView } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { observer } from "mobx-react";
import SimpleRequestViewModel from "./viewModel";
import { SIMPLE_REQUEST_IDENTIFIER } from "../../constants/identifiers";
import { DIContainer } from "../../inversify.config";
import "./style.less";
import "./taroUIComponents.scss";

const viewModel = DIContainer.get<SimpleRequestViewModel>(
  SIMPLE_REQUEST_IDENTIFIER.SIMPLE_REQUEST_VIEW_MODEL
);

export default observer(() => {
  const { doRequest, responses } = viewModel;
  return (
    <View className="index">
      <AtButton onClick={doRequest}>doRequest</AtButton>
      <ScrollView>
        {responses.map((item, index) => {
          return <Text>{`${index}. ${item}\n`}</Text>;
        })}
      </ScrollView>
    </View>
  );
});
