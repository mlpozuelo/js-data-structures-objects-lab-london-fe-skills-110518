// Write your solution in this file!
//First function updateDriver//

//Define Driver Object/
const driver = {
  driverName: 'John',
  driverCar: 'Ford'
}

//updateDriverWithKeyAndValue//

function updateDriverWithKeyAndValue (driver,key,value) {
  const newObj = {...driver};
  
  newObj[key] = value;
  
  return newObj
}

//destructivelyUpdateDriverWithKeyAndValue//

function destructivelyUpdateDriverWithKeyAndValue (driver,key,value){

driver [key] = value;
 
return driver
}



