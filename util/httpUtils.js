const http = require('http');
const https = require('https');
const querystring=require('querystring');

var checkword = ""
//发送HTTP请求获取数据方法
module.exports.doHttp_withdata = (http_options, data) => {
    var message = new Promise(function(resolve, reject) {
        var postData = JSON.stringify(data);
        http_options.headers = {
            "Content-Type": 'application/json, charset=UTF-8',
            "Content-Length": new Buffer(postData).length
        };
        var req = http.request(http_options, function(res) {
            var data = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(data);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.write(postData + "\n");
        req.end();
    }).then(function (data) {
        return data;
    });

    return message;
};

//发送HTTP请求获取数据方法
module.exports.doHttp = http_options => {
    var message = new Promise(function(resolve, reject) {
        var req = http.request(http_options, function(res) {
            var data = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(data);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.end();
    }).then(function (data) {
        return data;
    });

    return message;
};

//发送HTTPS请求获取数据方法
module.exports.doHttps_withdata = (https_options, data) => {
    var message = new Promise(function(resolve, reject) {
        var postData = JSON.stringify(data);
        https_options.headers = {
            "Content-Type": 'application/json, charset=UTF-8',
            "Content-Length": new Buffer(postData).length
        };
        var req = https.request(https_options, function(res) {
            var data = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(data);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.write(postData + "\n");
        req.end();
    }).then(function (data) {
        return data;
    });

    return message;
};

//发送HTTPS请求获取数据方法
module.exports.doHttps = https_options => {
    var message = new Promise(function(resolve, reject) {
        var req = https.request(https_options, function(res) {
            var data = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(data);
            });
        });

        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });

        req.end();
    }).then(function (data) {
        return data;
    });

    return message;
};
