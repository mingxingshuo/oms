const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const userAgent = require('koa2-useragent');

const index = require('./routes/index');
const user = require('./routes/user');
const order = require('./routes/order');
const customer = require('./routes/customer');
const wechat = require('./routes/wechat');
const department = require('./routes/department');
const pay = require('./routes/pay');
const setting = require('./routes/setting');

// error handler
onerror(app);

// middlewares
app.use(bodyparser());
app.use(json());
app.use(require('koa-static')(__dirname + '/public'), {maxAge: 1000 * 60 * 60});
app.use(require('koa-static')(__dirname + '/build'), {maxAge: 1000 * 60 * 60});

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}));
//app.set('view cache', true);

app.use(userAgent());

app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', 'content-type,xfilecategory,xfilename,xfilesize,u_id,device_id,uid,deviceid,X-Requested-With');
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');
    if (ctx.request.method === "OPTIONS") {
        ctx.response.status = 200
    }
    await next();
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());
app.use(order.routes(), order.allowedMethods());
app.use(customer.routes(), customer.allowedMethods());
app.use(wechat.routes(), wechat.allowedMethods());
app.use(department.routes(), department.allowedMethods());
app.use(pay.routes(), pay.allowedMethods());
app.use(setting.routes(), setting.allowedMethods());


// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});


module.exports = app;
