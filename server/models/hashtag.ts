import { Model, DataTypes } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class Hashtag extends Model {
    public readonly id!: number; // 느낌표 붙이면 반드시 존재한다는 뜻
    public name!: string;
    public readonly createdAt!: Date; // readonly 붙이면 사용자가 직접 변경하지 않는다는 뜻
    public readonly updatedAt!: Date;
}

Hashtag.init({
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Hashtag',
    tableName: 'hashtag',
    charset: 'utf8mb4', // 기본 utf8에 이모티콘 추가 
    collate: 'utf8_general_ci',
});

export const associate = (db: dbType) => { // 모델간의 관계 생성됨

};

export default Hashtag;