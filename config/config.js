require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "qwerty",
    "database": "nventory_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "shxnldajrvyjqa",
    "password": "a829584420159a678b2b6643d7e3fdec91c9dd8977f7da106eae97d9373f326e",
    "database": "dd38ps6lb3l8q8",
    "host": "ec2-52-205-61-230.compute-1.amazonaws.com",
    "dialect": "postgres"
  },
  "development2": {
    "username": "shxnldajrvyjqa",
    "password": "a829584420159a678b2b6643d7e3fdec91c9dd8977f7da106eae97d9373f326e",
    "database": "dd38ps6lb3l8q8",
    "host": "ec2-52-205-61-230.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions":{   
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions":{   
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  }
}
