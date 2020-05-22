
async function checkHasAccountId(ctx, next) {
    let userId, account_id = ctx.query.account_id;
    if(account_id) {
        userId = account_id;
    } else {
        userId = ctx.request.body.account_id;
    }
    if(userId || (ctx.request.url === ("/user/login"))) {
        await next()
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
    }
}

module.exports = checkHasAccountId;