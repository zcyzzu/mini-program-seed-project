
/*
 * @Author: derek.chia
 * @Date: 2022-05-09 10:16:41
 * @LastEditTime: 2022-06-14 10:32:20
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/domain/entities/simpleRequestEntity.ts
 */
import AbstractDTO from '../../common/domain/entities/abstractEntities';

interface ArgsConfig {}

type HeadersConfigKeys =
  | 'Accept'
  | 'Accept-Encoding'
  | 'Host'
  | 'Postman-Token'
  | 'User-Agent'
  | 'X-Amzn-Trace-Id';

type HeadersConfig = { [key in HeadersConfigKeys]: string };

export default class SimpleRequestResponseEntity extends AbstractDTO {
  args?: ArgsConfig;
  headers?: HeadersConfig;
  origin?: string;
  url?: string;
}

