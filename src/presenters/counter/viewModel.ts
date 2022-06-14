/*
 * @Author: derek.chia
 * @Date: 2022-05-07 15:46:29
 * @LastEditTime: 2022-06-14 10:25:01
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/presenters/counter/viewModel.ts
 */

import { inject, injectable } from 'inversify';
import { action, makeObservable, observable, runInAction } from 'mobx';
import AppConfig from '../../common/appConfig';
import { HELPER_IDENTIFIER } from '../../constants/identifiers';

@injectable()
export default class CounterViewModel {
  @inject(HELPER_IDENTIFIER.APP_CONFIG)
  public appConfig!: AppConfig;

  constructor() {
    makeObservable(this);
  }

  @observable
  public counter: number = 0;

  @action
  public counterStore() {
    this.counter++;
  }

  @action
  public increment = () => {
    console.log('increment');
    this.counter++;
  };

  @action
  public decrement = () => {
    this.counter--;
  };

  @action
  public incrementAsync = () => {
    setTimeout(() => {
      runInAction(() => {
        this.counter++;
      })
    }, 1000);
  };
}
