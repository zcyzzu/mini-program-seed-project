/*
 * @Author: derek.chia
 * @Date: 2022-05-07 19:47:48
 * @LastEditTime: 2022-06-14 10:24:51
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/presenters/simpleRequest/viewModel.ts
 */

import { inject, injectable } from 'inversify';
import { makeObservable, observable, runInAction, action } from 'mobx';
import AppConfig from '../../common/appConfig';
import { HELPER_IDENTIFIER, SIMPLE_REQUEST_IDENTIFIER } from '../../constants/identifiers';
import SimpleRequestUseCase from '../../domain/useCases/simpleRequsetUseCase';

@injectable()
export default class SimpleRequestViewModel {
  @inject(HELPER_IDENTIFIER.APP_CONFIG)
  public appConfig!: AppConfig;
  @inject(SIMPLE_REQUEST_IDENTIFIER.SIMPLE_REQUEST_USE_CASE)
  public simpleRequestUseCase!: SimpleRequestUseCase;

  @observable
  public responses: string[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  public doRequest = async () => {
    try {
      const data = await this.simpleRequestUseCase.get();
      runInAction(() => {
        this.responses.push(JSON.stringify(data));
      });
    } catch (e: any) {
      runInAction(() => {
        this.responses.push(e.message);
      });
    }
  }
}
