#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FbmcBackendStack } from '../lib/fbmc-backend-stack';

const app = new cdk.App();
new FbmcBackendStack(app, 'FbmcBackendStack', {
  env: {
    account: '412807799582',
    region: 'us-west-2',
  },
});