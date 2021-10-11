// node 는 ts -> js 변환해서 실행함 (ts 자체로는 실행 불가)
// node modules 에서 export default 하면 export as 필요 없음 

// import * as express from 'express'; // typescript 에서는 import 가능
// esModuleInterop true 로 설정해야 바로 import 가능
import express, {Request, Response} from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import * as helmet from 'helmet';

dotenv.config();
const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3065);
if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
        origin: /nodebird\.com$/,
        credentials: true,
    }))
} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }))
}
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: prod ? '.nodebird.com' : undefined,
    },
    name: 'rnbck'
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req: Request, res: Response) => { // req, res 타입은 생략 가능 
    res.send('Hello World!');
});
)
app.listen(app.get('port'), () => {
    console.log(`Server is running on ${app.get('port')}`);
});

// ts-node 는 ts 파일을 js 파일로 변환해서 실행함
// npx ts-node index.ts --> 개발. 배포하지는 x 
// npx tsc --> ts 파일을 다 js 로 컴파일한 후, js 파일만 배포 
// npx tsc --traceResolution --> 개발할 때 테스트용으로 붙여주면 타이핑 하는 과정을 볼 수 있음 (모듈을 하나씩 찾아감) 공식문서에서 확인 가능 

// npm i 모듈 할 때마다 @types 도 설치해야함
// 버전이 일치하는지도 확인해야 함. @types 와 모듈이 같은 버전인가? 다른 버전이면 문제 생길 수 있음 
// 다운그레이드해서 쓰거나, 직접 타이핑 해서 쓰거나 