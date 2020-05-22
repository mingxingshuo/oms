const UserModel = require('../model/User.js');

function checkUserRole(id) {
    return new Promise(async (resolve, reject) => {
        let user = await UserModel.findById(id);
        if (user) {
            let {role} = user;
            resolve(role);
        } else {
            reject({errcode: 404, msg: "没有查询到该账户的有关信息"})
        }
    })
}

module.exports = checkUserRole;