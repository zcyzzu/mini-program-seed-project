/*
 * @Author: derek.chia
 * @Date: 2022-05-09 10:16:26
 * @LastEditTime: 2022-05-09 15:02:03
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/domain/repositories/simpleRequestRepository.ts
 */

import SimpleRequestResponseEntity from '../entities/simpleRequestEntity';

export default interface SimpleRequestRepository {
  simpleRequestGet(): Promise<SimpleRequestResponseEntity>;
}
