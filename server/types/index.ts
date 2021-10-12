import User from '../models/user';

declare global { // 글로벌 할 때는 반드시 외부 모듈에서 import 해줘야 함
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}