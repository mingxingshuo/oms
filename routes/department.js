const router = require('koa-router')();
const DepartmentModel = require('../model/Department.js');
const checkHasAccountId = require("../util/checkHasAccountId");
const jwt = require("../util/jsonwebtoken");

router.prefix('/department');

router.all("*", async (ctx, next) => {
    await checkHasAccountId(ctx, next);
});

router.get('/', async (ctx, next) => {
    let {account_id, page = 1} = ctx.query, result, total;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role}) => {
            if (role === 0) {
                result = await DepartmentModel.find({parentId: account_id, isDelete: 0}).skip((page - 1) * 10).limit(10);
                total = await DepartmentModel.estimatedDocumentCount({parentId: account_id, isDelete: 0});
                ctx.response.status = 200;
                ctx.body = {code: 1, msg: "查询成功", data: result, total};
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"};
            }
        })
});

router.post('/', async (ctx, next) => {
    let {account_id, name} = ctx.request.body;
    let result = await DepartmentModel.find({name, parentId: account_id});
    if (result.length > 0) {
        ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
    } else {
        let {token} = ctx.request.header;
        await jwt.checkToken(token)
            .then(async ({role}) => {
                if (role === 0) {
                    let data = await DepartmentModel.create({name, parentId: account_id});
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
    }
});

router.put('/', async (ctx, next) => {
    let {id, name} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role}) => {
            if (role === 0) {
                let updateAt = Date.now();
                let data = await DepartmentModel.findByIdAndUpdate(id, {name, updateAt}, {new: true});
                if (data) {
                    ctx.body = {code: 1, msg: '部门信息修改成功', data}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '部门信息修改失败，请检查输入是否有误'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"};
            }
        })
});

router.put('/setManage', async (ctx, next) => {
    let {id, manageId} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role}) => {
            if (role === 0) {
                let updateAt = Date.now();
                let data = await DepartmentModel.findByIdAndUpdate(id, {manageId, updateAt}, {new: true});
                if (data) {
                    ctx.body = {code: 1, msg: '管理员设置成功', data}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '管理员设置失败，请重试'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"};
            }
        })
});

router.delete('/', async (ctx, next) => {
    let {_id} = ctx.query;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role}) => {
            if (role === 0) {
                let updateAt = Date.now();
                let result = await DepartmentModel.findByIdAndUpdate(_id, {isDelete: 1, updateAt});
                if (result) {
                    ctx.body = {code: 1, msg: '删除成功'}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: "删除失败"}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"};
            }
        })
});

module.exports = router;