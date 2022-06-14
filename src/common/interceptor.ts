/*
 * @Author: derek.chia
 * @Date: 2022-05-09 17:28:01
 * @LastEditTime: 2022-06-14 10:26:21
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/common/interceptor.ts
 */
import Taro from "@tarojs/taro";

function authInterceptor(chain) {
  const requestParams = chain.requestParams;

  console.debug(`[onRequest]`, requestParams);
  return chain.proceed(requestParams).then((res) => {
    //TODO: token refresh and retry
    return res;
  });
}

export default function initTaroInterceptor() {
  Taro.addInterceptor(authInterceptor);
}
