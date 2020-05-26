const jwt = require("./jsonwebtoken");

async function checkHasAccountId(ctx, next) {
    let {token} = ctx.request.header;
    if(ctx.request.url === ("/user/login")) {
        await next()
    } else if (token) {
        await jwt.checkToken(token)
            .then(async () => {
                await next()
            })
            .catch(() => {
                ctx.response.status = 401;
                ctx.body = {code: -1, msg: "登录信息失效，token无效或缺失"}
            })
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "登录信息失效，token无效或缺失"}
    }
}

module.exports = checkHasAccountId;