/*
 * @Author: derek.chia
 * @Date: 2022-05-07 19:33:16
 * @LastEditTime: 2022-05-07 19:33:16
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/common/appContext.ts
 */

import { injectable } from 'inversify';

@injectable()
export default class AppContext {
  tenantId?: number;
  authorization?: string;
}
