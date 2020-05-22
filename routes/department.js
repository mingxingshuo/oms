const router = require('koa-router')();
const DepartmentModel = require('../model/Department.js');
const checkUserRole = require("../util/checkUserRole");
router.prefix('/department');

router.get('/', async (ctx, next) => {
    console.log("我是router.get")
    let {account_id, page = 1} = ctx.query, result, total;
    if (account_id) {
        checkUserRole(account_id)
            .then(async role => {
                console.log(role, "role")
                if (role === 0) {
                    result = await DepartmentModel.find({parentId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await DepartmentModel.count({parentId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else {
                    ctx.response.status = 403;
                    ctx.body = {code: -1, msg: "该账户无操作权限"};
                }
            })
            .catch(err => {
                ctx.response.status = err.status;
                ctx.body = err;
            });
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
    }
});

router.post('/', async (ctx, next) => {
    let {account_id, name, remarks} = ctx.request.body;
    console.log(account_id, name, remarks)
    let result = await DepartmentModel.find({name, parentId: account_id});
    if (result.length > 0) {
        ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
    } else {
        if(account_id) {
            checkUserRole(account_id)
                .then(async role => {
                    if (role === 0) {
                        let data = await DepartmentModel.create({name, remarks, parentId: account_id});
                        if (data) {
                            ctx.body = {code: 1, msg: '部门添加成功', data}
                        } else {
                            ctx.response.status = 400;
                            ctx.body = {code: -1, msg: '部门添加失败，请检查输入是否有误'}
                        }
                    } else {
                        ctx.response.status = 403;
                        ctx.body = {code: -1, msg: "该账户无操作权限"};
                    }
                })
                .catch(err => {
                    ctx.response.status = err.status;
                    ctx.body = err;
                });
        } else {
            ctx.response.status = 401;
            ctx.body = {code: -1, msg: '登录信息失效，请重新登录'}
        }
    }
});

router.put('/', async (ctx, next) => {
    let {id, name, remarks} = ctx.request.body;
    let updateAt = Date.now();
    let data = await DepartmentModel.findByIdAndUpdate(id, {name, remarks, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '部门信息修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '部门信息修改失败，请检查输入是否有误'}
    }
});

router.put('/setManage', async (ctx, next) => {
    let {id, manageId} = ctx.request.body;
    let updateAt = Date.now();
    let data = await DepartmentModel.findByIdAndUpdate(id, {manageId, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '管理员设置成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '管理员设置失败，请重试'}
    }
});

router.delete('/', async (ctx, next) => {
    let {_id} = ctx.query;
    let updateAt = Date.now();
    let result = await DepartmentModel.findByIdAndUpdate(_id, {isDelete: 1, updateAt});
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;