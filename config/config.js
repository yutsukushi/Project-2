module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_KEY,
    database: "globalFP_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "",
    database: "globalFP_db",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
