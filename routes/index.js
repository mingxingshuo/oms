const router = require('koa-router')();

const path = require('path');
const fs = require('fs');

router.prefix('/');

// router.get('/', async function(ctx, next) {
//     const htmlFile = await readHtmlFile(path.join(__dirname, '../public', 'index.html'));
//     ctx.type = 'html';
//     ctx.body = htmlFile;
// });
//
// router.get('/admin/*', async function(ctx, next) {
//     const htmlFile = await readHtmlFile(path.join(__dirname, '../build', 'index.html'));
//     ctx.type = 'html';
//     ctx.body = htmlFile;
// });
//
// router.get('/admin', async function(ctx, next) {
//     const htmlFile = await readHtmlFile(path.join(__dirname, '../build', 'index.html'));
//     ctx.type = 'html';
//     ctx.body = htmlFile;
// });

function readHtmlFile(filePath) {
    return new Promise(function(resolve, reject){
        fs.readFile(path.join(filePath), (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}

module.exports = router;
