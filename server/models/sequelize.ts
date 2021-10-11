import {Sequelize} from 'sequelize';
// sequelize 는 내부적으로 type 지원
import config from '../config/config';

const env = process.env.NODE_ENV as ('production' | 'test'| 'development') || 'development';
const {database, username, password} = config[env];
const sequelize = new Sequelize(database, username, password, config[env]);

export {sequelize};
export default sequelize;