import {Model, DataTypes} from 'sequelize';
import {dbType} from './index';
import {sequelize} from './sequelize';

class User extends Model {
    public readonly id!: number; // 느낌표 붙이면 반드시 존재한다는 뜻
    public nickname!: string;
    public userId!: string;
    public password!: string;
    public readonly createdAt!: Date; // readonly 붙이면 사용자가 직접 변경하지 않는다는 뜻
    public readonly updatedAt!: Date;
}

User.init({
    nickname: {
        type: DataTypes.STRING(20),
    },
    userId: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
});

export const associate = (db: dbType) => {

};

export default User;