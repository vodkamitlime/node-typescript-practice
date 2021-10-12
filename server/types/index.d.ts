import User from '../models/user';

declare module "express-serve-static-core" { // 글로벌 할 때는 반드시 외부 모듈에서 import 해줘야 함
    interface Request {
        user?: User;
    }
}

// declare module 또는 declare global. global 로 먼저 해보고 충돌 일어나면 ambient module 로 바꾸면 됨 