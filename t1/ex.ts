
//1
const topNumber=(num1:number,num2:number):number=>{
    if(num1>num2){
        return num1;
    }
        return num2;
}
//2
function printBigger (num1:number,num2:number):void{
    num1 > num2 ?console.log (num1) : console.log(num2);
}



//console.log(topNumber(2,4))
//printBigger(2,4)
//console.log(typeNumber(5))
