const router = require('koa-router')();

const path = require('path');

router.prefix('/');

router.get('/admin/*', function(ctx, next) {
  console.log('...get /admin/* ...');
  ctx.render('admin/index.ejs')
});

router.get('/admin', function(ctx, next) {
  console.log('...get /admin ...');
  ctx.render('admin/index.ejs')
});


//
// router.get('/', function(req, res, next) {
//   console.log('...get / ...');
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// router.get('/admin/*', function(req, res, next) {
//   console.log('...get /admin/* ...');
//   res.sendFile(path.join(__dirname, '../build', 'home.html'));
// });
//
// router.get('/admin', function(req, res, next) {
//   console.log('...get /admin ...');
//   res.sendFile(path.join(__dirname, '../build', 'home.html'));
// });

module.exports = router;
