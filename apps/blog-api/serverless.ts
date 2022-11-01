import type {Serverless} from 'serverless/aws';
import {baseServerlessConfig} from '../../serverless.base';
import {categoriesGetter} from "./src/functions";

const serverlessConfig: Partial<Serverless> = {
  ...baseServerlessConfig,
  service: 'blog-api',
  provider: {
    ...baseServerlessConfig.provider,
  },
  custom: {
    ...baseServerlessConfig.custom,
    'serverless-offline': {
      lambdaPort: 3000,
      httpPort: 3001,
    },
  },
  functions: {
    categoriesGetter,
    // 'hello': {
    //   handler: 'src/functions/hello.main',
    //   events: [
    //     {
    //       http: {
    //         method: 'post',
    //         path: 'test/hello',
    //       },
    //     },
    //   ],
    // },
  },
};

module.exports = serverlessConfig;
