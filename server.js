// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }

// var add = (a,b) => {return a+b;}

// var add = (a,b) => a+b;

// (function(){
//     console.log('hello there');
// })();

// var sum = add(10,3);
// console.log(sum);

        //callback function 

//1st tarika 
// function callback(){
//     console.log('hello there');
// }


const abc = function(a,b,callback){
    var sum = a+b;
    console.log(sum);
    callback();
}



//calling function inside argument
// abc(2,3,function(){
//     console.log('hello there');
// });

//otherway of calling function inside argument
abc(2,3,()=> console.log("hello"));

