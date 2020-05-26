const jwt = require("jsonwebtoken");

const secret = "abcdef";

function createToken(payload) {
    return jwt.sign(payload, secret, {expiresIn: '2h'})
}

function checkToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, res) => {
            if (!err) {
                resolve(res)
            } else {
                reject("token验证失败");
            }
        })
    })
}
module.exports = {
    createToken, checkToken
}