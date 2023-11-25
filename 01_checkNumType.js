const intNumber= -2;

console.log(checkNumberType(intNumber));

function checkNumberType(intNumber){
    if(intNumber>0){
            return "Given number is greater than Zero";
    }else if(intNumber<0){
            return "Given number is less than Zero";
    }else{
            return "Given number is Zero";
    }

}