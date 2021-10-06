"use strict";
// node 는 ts -> js 변환해서 실행함 (ts 자체로는 실행 불가)
// node modules 에서 export default 하면 export as 필요 없음 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import * as express from 'express'; // typescript 에서는 import 가능
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3065, function () {
    console.log("Server is running on " + process.env.PORT);
});
// ts-node 는 ts 파일을 js 파일로 변환해서 실행함
// npx ts-node index.ts
