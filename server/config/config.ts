type Config = {
  username: string,
  password: string,
  database: string,
  host: string,
  [key: string]: string
}
interface IConfigGroup {
  development: Config,
  production: Config,
  test: Config
}

const config: IConfigGroup = {
  "development": {
    "username": "root",
    "password": "",
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": '',
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": '',
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

export default config;

// sequelize 초기 설정 시 js 로 만들고, 그 후에는 ts 로 변경하기