var x = 10; //variable x ตั้งซ้ำได้
var y = "10"; // ตั้งซ้ำไม่ได้
var a = [10,20,30]; // การสร้าง array 

console.log(x === y);

function sum(num1 , num2){
    return num1+num2;
}

var z = {
    num3 : 12345,
    num4 : 54321 
}
console.log("z.num3 = "+z.num3);
console.log("z[\"num3\"] = " + z["num3"])

for(  y of a){ // for-of get value from a
    console.log(y);
}

for(  y in a){ // for-in get index from a
    console.log(y);
}
var h1str = 0;
document.getElementById("h1str").innerHTML = 5+6 ,"<br>" ,7+8;