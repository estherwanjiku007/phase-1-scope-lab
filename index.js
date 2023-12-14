// Write your solution in this file!
var customerName="bob";
var bestCustomer;
//const leastFavouriteCustomer="jean";
function upperCaseCustomerName(){
customerName=customerName.toUpperCase();
}

function setBestCustomer (){
      bestCustomer="not bob";
     
}


function overwriteBestCustomer(){
    bestCustomer="maybe bob";
}
const leastFavoriteCustomer="jean";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="Assignment to constant variable";
}
changeLeastFavoriteCustomer();