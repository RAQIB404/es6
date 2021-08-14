//let
function vartest(){
    let x=2;
    if(true)  {
    let x=3;
    console.log(x)
}
console.log(x)
}
vartest()

function es6test(){
    let x=1;
    if(true){
        let x=2;
        console.log(x);
    }
    console.log(x);
}
es6test()

//functions
function add(a,b){
    return a+b;
}
add(1,2);

//fe
var add1=function(a,b){
    return a+b;
}
add(1,2);

//es6 arrow functions
const add2 =(a,b)=>{
    return a+b;
}

//one statement
const add3 = (a,b)=>a+b;
const nul =(a,b)=>a*b;

var res =nul(3,3);
console.log(res);

//default parameter values
//loops- for,while dowhile
//conditional- if,ifelse,switch
function demo(x,y,z){
    if(y===undefined){
        y=0;
    }
    if (z===undefined){
        z=0;
    }
    return x+y+z;
};
let res1= demo(10,20);
const demo2 =(a,b=20,c=30)=>{
    return a+b+c;
}
const result =demo2(10);
console.log(result);

//string concatination
var name='taj';
var greeting='happy birthday';
var message =greeting+name+'have a great year ahead';
console.log(message);

//templates litterals
const mes=`${name} ${greeting} have a great year ahead`
console.log(res);

//arrays

const arr =[3,5,6,1];
const arry2 =[];
for(let i=0; i<=arr.length-1;i++){
    arry2.push(arr[i]*2)
}
console.log(arry2);

//array helper method

const muly2=arr.map(function(e){
    console.log(e)
})

const muly3 =arr.map((item)=>{
    return item *2
})

console.log(arr)
console.log(muly2)