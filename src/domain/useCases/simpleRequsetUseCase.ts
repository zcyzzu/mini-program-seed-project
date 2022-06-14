/*
 * @Author: derek.chia
 * @Date: 2022-05-09 10:15:51
 * @LastEditTime: 2022-06-14 10:26:44
 * @LastEditors: zhangchenyang
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/domain/useCases/simpleRequsetUseCase.ts
 */
import { inject, injectable } from 'inversify';
import SimpleRequestRepository from '../repositories/simpleRequestRepository';
import { SIMPLE_REQUEST_IDENTIFIER } from '../../constants/identifiers';

@injectable()
export default class SimpleRequestUseCase {
  @inject(SIMPLE_REQUEST_IDENTIFIER.SIMPLE_REQUEST_REPOSITORY)
  private simpleRequestMethodRepository!: SimpleRequestRepository;

  public async get(): Promise<unknown> {
    try {
      const simpleRequestData = await this.simpleRequestMethodRepository.simpleRequestGet();
      return simpleRequestData;
      console.log(`simple request response: `, simpleRequestData);
    } catch (error) {
      console.error(`simple request error: `, error);
      throw error;
    }
  }
}

