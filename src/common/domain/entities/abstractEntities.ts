/*
 * @Author: derek.chia
 * @Date: 2022-05-09 14:49:26
 * @LastEditTime: 2022-05-09 14:49:26
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/common/domain/entities/abstractEntities.ts
 */

export default abstract class AbstractDTO {
  sortname?: string;
  sortorder?: string;
  objectVersionNumber?: number;
  createdBy?: number;
  creationDate?: Date | string;
  lastUpdatedBy?: number;
  lastUpdateDate?: Date | string;

  // eslint-disable-next-line no-underscore-dangle
  private set _token(_token: string) {
    // do nothing, useless _token
  }

  // eslint-disable-next-line no-underscore-dangle
  private set __id(__id: string) {
    // do nothing
  }

  // eslint-disable-next-line no-underscore-dangle
  private set __tls(__tls: string) {
    // do nothing
  }

  // eslint-disable-next-line no-underscore-dangle
  private set __status(__status: string) {
    // do nothing
  }

  // eslint-disable-next-line no-underscore-dangle
  private set _innerMap(_innerMap: string) {
    // do nothing
  }
}
