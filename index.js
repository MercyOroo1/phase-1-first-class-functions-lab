// Code your solution in this file!
// const returnFirstTwoDrivers = function(array){
//    newArray=[...array]
//    result = newArray.slice(0,2)
//    return result
// }
// array = ["a","b","c","d"]
// function returnFirstTwoDrivers(array){
//     result=array.slice(0,2)
//     return result
//  }
 
 const returnFirstTwoDrivers = (drivers)=> {
   return drivers.slice(0,2)
 }
 const  returnLastTwoDrivers= (drivers)=> {
   return drivers.slice(-2)
 }

 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
 
 function createFareMultiplier(fare) {
   return function innerFunction (value) {
      return value*fare
   }
 }

function fareDoubler (fare) {
   return fare*2
}

function fareTripler (fare){
   return fare*3
}

function selectDifferentDrivers (drivers,operation) {
   return operation(drivers)
}