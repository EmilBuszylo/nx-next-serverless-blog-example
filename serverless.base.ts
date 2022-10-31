import type { Serverless } from 'serverless/aws';

export const baseServerlessConfigProvider: Serverless['provider'] = {
  name: 'aws',
  runtime: 'nodejs16.x',
  memorySize: 128,
  stage: '${opt:stage, self:provider.stage}',
  environment: {
    STAGE: process.env.NODE_ENV,
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
  },
  region: 'eu-west-1',
};

export const baseServerlessConfig: Partial<Serverless> = {
  frameworkVersion: '3',
  service: 'base',
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: ['serverless-esbuild', 'serverless-offline'],
  custom: {
    stage: '${opt:stage, self:provider.stage}',
    esbuild: {
      bundle: true,
      minify: false,
      target: ['es2020'],
      sourcemap: true,
      sourcesContent: false,
      define: { 'require.resolve': undefined },
    },
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    region: 'eu-central-1',
    stage: "${opt:stage, 'dev'}",
    logRetentionInDays: 7,
    environment: {
      STAGE: '${self:custom.stage}',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
};
