/*
 * @Author: derek.chia
 * @Date: 2022-05-07 16:36:21
 * @LastEditTime: 2022-05-09 15:22:31
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/common/appConfig.ts
 */
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export default class AppConfig {
  apiPublicUrl = 'https://httpbin.org'
}

