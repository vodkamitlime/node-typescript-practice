// node 는 ts -> js 변환해서 실행함 (ts 자체로는 실행 불가)
// node modules 에서 export default 하면 export as 필요 없음 

// import * as express from 'express'; // typescript 에서는 import 가능
// esModuleInterop true 로 설정해야 바로 import 가능
import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => { // req, res 타입은 생략 가능 
    res.send('Hello World!');
});

app.listen(3065, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});

// ts-node 는 ts 파일을 js 파일로 변환해서 실행함
// npx ts-node index.ts --> 개발. 배포하지는 x 
// npx tsc --> ts 파일을 다 js 로 컴파일한 후, js 파일만 배포 
// npx tsc --traceResolution --> 개발할 때 테스트용으로 붙여주면 타이핑 하는 과정을 볼 수 있음 (모듈을 하나씩 찾아감) 공식문서에서 확인 가능 