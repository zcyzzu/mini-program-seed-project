/*
 * @Author: derek.chia
 * @Date: 2022-05-07 14:32:33
 * @LastEditTime: 2022-05-09 10:15:39
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/constants/identifiers.ts
 */
export const HELPER_IDENTIFIER = {
  APP_CONFIG: Symbol.for('common/appConfig'),
  APP_CONTEXT: Symbol.for('common/appContext'),
};

export const COUNTER_IDENTIFIER = {
  COUNTER_VIEW_MODEL: Symbol.for('presenters/counter/viewModel'),
};

export const SIMPLE_REQUEST_IDENTIFIER = {
  SIMPLE_REQUEST_VIEW_MODEL: Symbol.for('presenters/simpleRequest/viewModel'),
  SIMPLE_REQUEST_USE_CASE: Symbol.for('domain/useCases/simpleRequestUseCase'),
  SIMPLE_REQUEST_REPOSITORY: Symbol.for('domain/repositories/simpleRequestRepository'),
}
