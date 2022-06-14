/*
 * @Author: derek.chia
 * @Date: 2022-05-07 14:34:14
 * @LastEditTime: 2022-05-09 15:25:26
 * @LastEditors: derek.chia
 * @Description: <description>
 * @FilePath: /miniAppSeed/src/inversify.config.ts
 */
import 'reflect-metadata';
import { Container, interfaces } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { COUNTER_IDENTIFIER, HELPER_IDENTIFIER, SIMPLE_REQUEST_IDENTIFIER } from './constants/identifiers';
import CounterViewModel from './presenters/counter/viewModel';
import AppConfig from './common/appConfig';
import AppContext from './common/appContext';
import SimpleRequestRepositoryImpl from './data/simpleRequestRepositoryImpl';
import SimpleRequestUseCase from './domain/useCases/simpleRequsetUseCase';
import SimpleRequestViewModel from './presenters/simpleRequest/viewModel';

export const DIContainer = new Container();

const decorators = getDecorators(DIContainer);

// export const { lazyInject } = decorators;

interface IBabelPropertyDescriptor extends TypedPropertyDescriptor<unknown> {
  initializer: () => void;
}

export const lazyInject = (
  serviceIdentifier: string | symbol | interfaces.Newable<unknown> | interfaces.Abstract<unknown>,
): ((this: unknown, proto: any, key: string, descriptor?: IBabelPropertyDescriptor) => void) => {
  const original = decorators.lazyInject(serviceIdentifier);
  // the 'descriptor' parameter is actually always defined for class fields for Babel, but is considered undefined for TSC
  // so we just hack it with ?/! combination to avoid "TS1240: Unable to resolve signature of property decorator when called as an expression"
  // eslint-disable-next-line func-names
  return function (this: unknown, proto: any, key: string, descriptor?: IBabelPropertyDescriptor): void {
    // make it work as usual
    original.call(this, proto, key);
    // return link to proto, so own value wont be 'undefined' after component's creation

    descriptor &&
      // eslint-disable-next-line no-param-reassign
      (descriptor.initializer = () => {
        return proto[key];
      });
  };
};

DIContainer.bind(HELPER_IDENTIFIER.APP_CONFIG).to(AppConfig).inSingletonScope();
DIContainer.bind(HELPER_IDENTIFIER.APP_CONTEXT).to(AppContext).inSingletonScope();

DIContainer.bind(COUNTER_IDENTIFIER.COUNTER_VIEW_MODEL).to(CounterViewModel);

DIContainer.bind(SIMPLE_REQUEST_IDENTIFIER.SIMPLE_REQUEST_REPOSITORY).to(SimpleRequestRepositoryImpl);
DIContainer.bind(SIMPLE_REQUEST_IDENTIFIER.SIMPLE_REQUEST_USE_CASE).to(SimpleRequestUseCase);
DIContainer.bind(SIMPLE_REQUEST_IDENTIFIER.SIMPLE_REQUEST_VIEW_MODEL).to(SimpleRequestViewModel);

