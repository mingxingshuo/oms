const crypto = require("crypto");

module.exports = function md5(str) {
    let md5 = crypto.createHash('md5');
    md5.update(str, "utf8");
    str = md5.digest('base64');
    return str
};