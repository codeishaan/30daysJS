//task9
function  order (i,cb){
for(let j=1;j<=i;j++)
   { cb();
}}
function cb (){
console.log("hello");
}

order(2,cb)

