const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './../../config.env' });


mongoose
  .connect(process.env.DATABASE_LOCAL, {})
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const importData = async() => {
    try{
        await Tour.create(tours)
        console.log('Data Added Successfuly');
    }
    catch(err){
        console.log(err);
    }
    process.exit();
}

const deleteData = async() => {
    try{
        await Tour.deleteMany()
        console.log('Data Deleted Successfuly');
    }
    catch(err){
        console.log(err);
    }
    process.exit();
}
if(process.argv[2]==='--import'){
  importData()
}
else if(process.argv[2]==='--delete'){
  deleteData()
}
console.log(process.argv);