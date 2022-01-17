const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCAL, {})
  .then(() => console.log('DB Connection Successful!'));

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {});


















// console.log(app.get('env'));
// console.log(process.env);

// useNewUrlParser: true,
// useCreateIndex: true,
// useFindAndModify: false

// eslint-disable-next-line prettier/prettier

// const DB = process.env.DATABASE_LOCAL;
// process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
