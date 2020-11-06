'use strict';

import compose from 'koa-compose';
import postProcessing from './postProcessing';

export default () => {
  return compose(
    [
      postProcessing
    ]
  )
};