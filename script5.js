//1.a.Print odd numbers in an array using anonymous function.
var odd=function(arr){
    var odd=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(odd([1,2,3,4,5,6]));

//Print odd numbers in an array using IIFE.
(function foo(num){
    for(var i=0;i<num.length;i++){
            if(num[i]%2!=0){
                console.log(num[i]);
            }
    }
  
})([1,2,3,4,5]);

//1.b.Convert all the strings to title caps in a string array by using anonymous function
var titlecaps=function(str){
    var str="guvi";
   var name=str.charAt(0).toUpperCase()+str.slice(1);
   return name;
}
console.log(titlecaps(["guvi"]));

// Convert all the strings to title caps in a string array by using IIFE
 (function titlecaps(str){
var str="guvi";
var res=str.charAt(0).toUpperCase()+str.slice(1);
console.log(res);
})(["guvi"]);

//1.c. Sum of all numbers in an array using anonymous
var add=function(num){
    var sum=0;
for(var i=0;i<num.length;i++){
    sum=sum+num[i];
  }
  return sum;
}
console.log(add([1,2,3,4,5]));

// Sum of all numbers in an array using IIFE
(function add(num){
    var sum=0;
for(var i=0;i<num.length;i++){
    sum=sum+num[i];
  }
 console.log(sum);   
})([1,2,3,4,5]);

//1.d. Return all the prime numbers in an array by using anonymous function
var prime=function(num){
    var prime=[];
for(var i=2;i<num.length;i++){
    var count=0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
        count++;
        }
    }
    if(count==2){
     prime.push(i);   
    }
}

    return prime;
}
console.log(prime([1,2,3,4,5]));

// Return all the prime numbers in an array by using IFFE

(function prime(num){
    var prime=[];
for(var i=2;i<num.length;i++){
    var count=0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
        count++;
        }
    }
    if(count==2){
        prime.push(i)
       
    }
}
console.log(prime);
})([1,2,3,4,5]);

//1.e.Return all the palindromes in an array by using anonymous
var polin=function(num){
    var res=num.reverse();
    if(num===res){
    
    }
    return(num);
}
console.log(polin([1,2,2,1]));


//Return all the palindromes in an array by using IIFE
(function polin(num){
    var res=num.reverse();
    if(num===res){
    
    }
    console.log(num);

})([1,2,2,1]);

//1.f. Return median of two sorted arrays of the same size by using anonymous
var arr1=[1,12,15,26,38];
var arr2=[2,13,17,30,45];
var median=function(a,b){
    var c=[...a,...b].sort((a,b)=>a-b);
    var half=c.length/2;
    if(c.length%2){
        return c[half];
    }
    return(c[half]+c[half-1])/2;
}
console.log(median(arr1, arr2));

// Return median of two sorted arrays of the same size by using IIFE
(function median(a,b){
    var c=[...a,...b].sort((a,b)=>a-b);
    var half=c.length/2;
    if(c.length%2){
        console.log(c[half]);
    }
    else{
    console.log((c[half]+c[half-1])/2);
    }
     
})([1,12,15,26,38],[2,13,17,30,45]);

//3.a.Print odd numbers in an array by using arrow function

var odd=(num)=>{
    var odd=[];
    for(var i=0;i<num.length;i++){
            if(num[i]%2!=0){
                odd.push(num[i]);
            
            }
            
    }
return odd;
}
console.log(odd([1,2,3,4,5]));


// 3.b.Convert all the strings to title caps in a string array by using arrow function
var titlecaps=(str)=>{
var str="guvi";
var res=str.charAt(0).toUpperCase()+str.slice(1);
  return res;
}
console.log(titlecaps(["guvi"]));

//3.c.sum of all numbers in array
var sum=(a,b)=>(a+b);
console.log(sum(1,2));
    
//3.d.Return all the prime numbers in an array by using arrow function

var prime=(num)=>{
    var prime=[];
for(var i=2;i<num.length;i++){
    var count=0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
        count++;
        }
    }
    if(count==2){
     prime.push(i);   
    }
}

    return prime;
}
console.log(prime([1,2,3,4,5]));

//3.e Return all the palindromes in an array

var polin=(num)=>{
    var res=num.reverse();
    if(num===res){
    
    }
    return(num);
}
console.log(polin([1,2,2,1]));

