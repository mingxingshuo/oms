const jwt = require("./jsonwebtoken");

async function checkHasAccountId(ctx, next) {
    let {token} = ctx.request.header;
    if(ctx.request.url === ("/user/login") || ctx.request.url === "/pay/upload") {
        await next()
    } else if (token) {
        await jwt.checkToken(token)
            .then(async () => {
                console.log("token验证通过");
                await next()
            })
            .catch(err => {
                console.log(err);
                ctx.response.status = 401;
                ctx.body = {code: -1, msg: "登录信息失效，token无效"}
            })
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "token缺失"}
    }
}

module.exports = checkHasAccountId;