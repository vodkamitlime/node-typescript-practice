import { AsyncLocalStorage } from 'async_hooks';
import * as passport from 'passport';
import User from '../models/user';

export default () => {
    passport.serializeUser((user: User, done) => { //로그인할 때 한 번 실행
        done(null, user.id)
    });
    passport.deserializeUser(async(id:number, done) => { //모든 라우터에서 실행 
        try {
            const user = await User.findOne({
                where: {id}
            })
            return done(null, user);
        } catch (err) {
            console.error(err);
            return done(err);
        }
    });
    local();
    
}