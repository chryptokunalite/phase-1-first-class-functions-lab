// Code your solution in this file!
let name1 = 'Antonia' 
let name2 = 'Nuru'
let name3 = 'Amari'
let name4 = 'Mo'
const drivers = [name1, name2, name3, name4]
const returnFirstTwoDrivers = function(){
    return (drivers).slice(0,2)
};


const returnLastTwoDrivers = function(){
    return ([name1, name2, name3, name4]).slice(2,4)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(num1){
    return function(num2){
        return num1 * num2 
    }
}


const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversArray, whichTwo){
    return whichTwo(driversArray) 

}



