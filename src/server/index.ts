import localCache from '../util/cache';

import { baseURL, TIME_OUT } from './request/config';
import HYRequest from './request/request';

const TOKEN_NAME = 'quasar-ts-app';

export const client = new HYRequest({
  baseURL: baseURL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache(TOKEN_NAME) ?? '';
      const urlArray = config.url.split('/');
      if (urlArray[urlArray.length - 1] !== 'get-code')
        if (token) {
          config.headers.token = token;
        }

      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res.data;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});
