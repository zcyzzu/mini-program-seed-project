/*
 * @Author: derek.chia
 * @Date: 2022-05-09 10:16:56
 * @LastEditTime: 2022-05-09 15:23:42
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/data/simpleRequestRepositoryImpl.ts
 */
import Taro from '@tarojs/taro';
import { injectable, inject } from 'inversify';
import AppConfig from '../common/appConfig';
import { HELPER_IDENTIFIER } from '../constants/identifiers';
import SimpleRequestResponseEntity from '../domain/entities/simpleRequestEntity';
import SimpleRequestRepository from '../domain/repositories/simpleRequestRepository';

@injectable()
export default class SimpleRequestRepositoryImpl implements SimpleRequestRepository {
  @inject(HELPER_IDENTIFIER.APP_CONFIG)
  private appConfig!: AppConfig;

  async simpleRequestGet(): Promise<SimpleRequestResponseEntity> {
    const { data } = await Taro.request({
      url: `${this.appConfig.apiPublicUrl}/get`,
      header: {
        accept: 'application/json',
      },
    });
    return data;
  }
}
