const router = require('koa-router')();
const DepartmentModel = require('../model/Department.js');
const checkHasAccountId = require("../util/checkHasAccountId");
const jwt = require("../util/jsonwebtoken");

router.prefix('/department');

router.all("*", async (ctx, next) => {
    await checkHasAccountId(ctx, next);
});

router.get('/', async (ctx, next) => {
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role, _id}) => {
            if (role === 0) {
                let result = await DepartmentModel.find({parentId: _id, isDelete: 0});
                ctx.body = {code: 1, msg: "查询成功", data: result};
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"};
            }
        })
});

router.post('/', async (ctx, next) => {
    let {body: {name}, header: {token}} = ctx.request;
    await jwt.checkToken(token)
        .then(async ({role, _id}) => {
            let result = await DepartmentModel.find({name, parentId: _id});
            if (result.length > 0) {
                ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
            } else {
                if (role === 0) {
                    let data = await DepartmentModel.create({name, parentId: _id});
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
            }
        })
});

router.put('/', async (ctx, next) => {
    let {body: {id, name}, header: {token}} = ctx.request;
    await jwt.checkToken(token)
        .then(async ({role, _id}) => {
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
    let {body: {id, manageId}, header: {token}} = ctx.request;
    await jwt.checkToken(token)
        .then(async ({role, _id}) => {
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
    let {token} = ctx.request.header;
    let {_id} = ctx.query;
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