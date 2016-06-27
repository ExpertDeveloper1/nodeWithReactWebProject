/**
 * Created by qiaoheng on 3/29/16.
 */

import koa from 'koa';

import * as middlewares from './middlewares';
import controllers from './controllers/base';

const app = koa();

// setup middlewares
middlewares.loggingLayer(app);
middlewares.initialLayer(app);
middlewares.errorLayer(app);
middlewares.apiLayer(app, apis);
middlewares.securityLayer(app);
middlewares.renderLayer(app, controllers);

// error logs
app.on('error', (error) => {
  debug('error')(error);
});


app.listen(process.env.PORT);
console.log(`Server listening on port ${process.env.PORT}`); // eslint-disable-line no-console