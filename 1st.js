// alert(`enter the number`)
// var num1 =prompt(`enter the first number`)
// var num2 = prompt(`enter the second number`)

// if (num1>num2) {
//     alert(`larger num is ${num1}`)

// }else{alert(`larger num is ${num2}`)}
// alert(`enter the numbers`)
// var num1 = prompt(`enter the first number`)
// var num2 = prompt(`enter the second number`)
// var num3 = prompt(`enter the third number`)

// if (num1 > num2) {

//     if (num1 > num3) {
//         alert(`larger num is ${num1}`)
//     }
// } else if (num2 > num3) {
//     alert(`larger num is ${num2}`)
// } else {
//     alert(`larger num is ${num3}`)
// }
// var d=1000
// if (d>0 && d<=100) {
//     console.log(`cost 5`)
// }else if (d>100 && d<=500) {
//     console.log(`cost 8`)
// }else if(d>500 && d<=1000){
// console.log(`cost 10`)
// }else{
//     console.log(`cost 12`)
// }
// let day = `monday`
// switch (day) {
//     case `monday`:
//         console.log(`7am`)
//         break;
//     case `tuesday`:
//     case `wednesday`:
//     case `thursday`:
//         console.log(`4am`)
//         break;
//     case `friday`:
//         console.log(`9am`)
//         break
//     case `saturday`:
//     case `sunday`:
//         console.log(`8am`)
//         break
//     default:
//         console.log(`sorry`)
//         break;
// }
//         TERNARY OPERATOR 
//         ****************
// let mark=40
// let result =``
// result= mark>=40 ? `pass`:`fail`
// console.log(result)
// *********
// let largest=``
// let num1=10
// let num2=8
// largest=num1>num2 ? `${num1} is larger`:`${num2} is larger`
// console.log(largest)
// *******
// let day=8
// switch (day) {
//     case 1:
//         console.log(`monday`)
//         break;
//     case 2:
//         console.log(`tuesday`)
//         break;
//     case 3:
//         console.log(`wednesday`)
//         break;
//     case 4:
//         console.log(`thursday`)
//         break;
//     case 5:
//         console.log(`friday`)
//         break;
//     case 6:
//         console.log(`saturday`)
//         break;
//     case 7:
//         console.log(`sunday`)
//         break;

//     default:
//         console.log(`sorry enter the correct week`)
//         break;
// }
// **********
// let n=0
// while (n<100) {
//     n=n+2
//  console.log(n)   
// }
// 1 4 9 16 25 36 …. 100
// let n=1
// let series=0
// while (series<100) {

//     series=n*n

//     console.log(series)
//     n++
// }
// ******
// By using while loop and continue statement

// Print all number from 1 to 100 but then it should not be divisible by 5
// let n = 0
// while (n < 100) {

//     n++
//     if (n % 5 === 0) {

//         continue;
//     }
//     console.log(n)
// }
// *******
// Write a program to print the digits of a number .

// Example Number 153 .

// output:-

// 3

// 5

// 1
// let n=153
// while (n>0) {

//     console.log(n%10)
//     n=parseInt(n/10)

// }
// ********************************
// Write a program to print all the Armstrong number from 1 to 1000 .

// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number

// Example:-

// 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )
// let n=1
// let a=0
// let b=0
// let c=0
// while (n<1000) {



//     a=n%10
//     b=(parseInt(n/10))%10
//     c=(parseInt(n/100))
//     if(n==(a**3+b**3+c**3))
//     {
//         console.log(a**3+b**3+c**3)

//     }
//     n++
// }
// *******
// Write a program to print the reverse of a number

// example if n is assumed as 123 reverse of it is 321.

// let a =123
// let lastd=0
// let reversed=0
// while(a>0)
// {
// lastd=a%10
// reversed=(reversed*10)+ lastd
// a=parseInt(a/10)

// }
// console.log(reversed)
// ********
// print odd numbers
// let odd=0;
// for (let i = 1; i < 100; i+=2) {

//    console.log(i)
// }
// ********
// Print the following series using for loop:-

// 1,8,27,64,125,216,......1000

// let cube = 0;
// for (let i = 1; cube < 1000; i++) {
//     cube=i**3
//     console.log(cube)
// }
// *********
// Understand Continue from this video :- Link  and solve the question using continue jumping statement.

// Write a program to print numbers from 1 to 100 except numbers which are divisible by 4. 

// Use Continue statement to avoid printing.

// for (let i = 01; i <100 ; i++) {

//     if (i%4===0) {

//         continue
//     }
//     console.log(i)
// }
// Understand the use case of break by going through this video - Link 

// and solve the following question :-

// Assume any value of n.

// Write a program to print all the numbers from 1 to 100 .If n is present in between the sequence then stop printing any other number and break out of the loop.
// let n=30

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i===n) {

//         break
//     }

// }
// ********
// *11111111*
// **111111**
// ***1111***
// ****11****
// **********

// for(let i=0; i<5; i++) {
// for(let j=0;j<=i;j++){
//     document.write(`*`)

// }
// for (let k=0; k<4-i;k++){
//     document.write(`1`)

// }
// for (let k=0; k<4-i;k++){
//     document.write(`1`)

// }
// for(let j=0;j<=i;j++){
//     document.write(`*`)

// }
// document.write(`<br>`)
// }
// ************************
// * * * *
// *     *
// *     *
// * * * *
// for(let i=1; i<=4; i++)
// {
//     for (let j =1;j<=4;j++)
//     {
//         if (i===1||i===4||j===1||j===4) {
//             document.write(` *`)
//         }
//         else{
//             document.write(`&nbsp&nbsp&nbsp`)
//         }
//     }
//     document.write(`<br>`)
// }
// // *************
// 1   2   3   4   
// 2   3   4   1   
// 3   4   1   2   
// 4   1   2   3
// let k=0
// for(let i=1; i<=4; i++){
//     k=i
//     for(let j=1 ;j<=4;j++)
//     {

//  document.write(`${k}`)

//  if (k===4) {
//      k=0
//  }
//  k++
// document.write(`&nbsp&nbsp&nbsp`)

//     }
//     document.write(`<br>`)
// }
// *******************

// for(let i=1; i<=4; i++){
//     for(let j=1; j<=i;j++) {
//         document.write(` *`)
//     }
//     document.write(`<br>`)
// }
// ********************


// 1
// 01
// 101
// 0101
// let k=1
// for(let i=1;i<=4; i++){

//     for(let j=1;j<=i;j++){


//         if ((i+j)%2===0) {
//             k=1
//         }else{k=0}
//         document.write(` ${k}`)


//     }
// document.write(`<br>`)
// }
// *********************
// 1
// 22
// 333
// 4444
// 55555
// for(let i=1; i<=5; i++){
//     for(let j=1;j<=i;j++){
//         document.write(` ${i}`)
//     }
//     document.write(`<br>`)
// }
// ***********************
// fibonacci series

// let fib=0
// let a=0
// let b=1
// while(fib<25){
// fib=a+b
// if (fib>25) {
//     break
// }
// document.write(` ${fib}`)
// a=b
// b=fib
// }
// ***********************
// Print the following pattern using for loops

// *****

// ****

// ***

// **

// *
// for(let i=1;i<=5;i++){
// for(let j=5;j>=i;j--){
//     document.write(`*`)

// }
// document.write(`<br>`)
// }
// Print the following pattern using while loops

// *****

// ****

// ***

// **

// *

// let i=1

// while (i<=5) {
//     let j=5
//     while (j>=i) {
//         document.write(`*`)
//         j--   
//     }
//     i++
//     document.write(`<br>`)
// }
// Print the following pattern using for loop

// *****

// ****

// ***

// **

// *

// *

// **

// ***

// ****

// *****

// for (let i = 1; i <= 5; i++) {

//         for (let j = 5; j >= i; j--) {
//             document.write(`*`)
//         }


//     document.write(`<br>`)
// }
// for(let i=1; i<=5;i++){
//     for (let j = 1; j <= i; j++) {
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }
// ***************
// *    *
// **   **
// ***  ***
// **** ****
// **********
// for(let i=1; i<=5; i++){
//     for(let j=1; j <= i; j++) {
//         document.write(`*`)
//     }for(let j=4; j >= i; j--) {
//         document.write(`&nbsp&nbsp`)
//     }for(let k=1; k <= i; k++) {
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }
// Print the following pattern using while loop



// *****

// ****

// ***

// **

// *

// *

// **

// ***

// ****

// *****

// let i=1;
// while (i<=5) {
//     let j=5
//     while (j>=i) {
//         document.write(`*`)
//         j--;
//     }
// document.write(`<br>`)
//     i++
// }
// let k=1;
// while (k<=5){
//     let l=1
//     while (l<=k) {
//         document.write(`*`)
//         l++
//     }
//     document.write(`<br>`)
//     k++
// }
// for(let i=1;i<=5;i++)

// {

// for(let j=1;j<=5;j++)

// {

//     document.write(` ${j}`)

// }

// }
// var countries=[`india`,`usa`,`china`]
// console.log(countries)
// countries.pop()
// console.log(countries)
// countries.push(`dubai`)
// console.log(countries)
// countries.unshift(`singapore`)
// console.log(countries)
// console.log(Array.from(`asdasfasdasd`))
// console.log(countries.join())
// *************
// Write a program to declare an array of size 10 and store the series 1,3,5,7,...19 in the array.

// let odd=[]
// let i=1
// while (i<=19) {

//     odd.push(i)

//     i+=2

// }
// console.log(odd)
// Declare an array of size 5 store value in it {1,5,6,2,4}



// Write a program to find the maximum element in the array.


// let arr=[1,5,6,2,4]

// console.log(Math.max(...arr))
// ***************
// Declare an array of size 5 store value in it {1,5,6,2,4}

// Write a program to find the minimum element in the array.
// let arr=[1,5,6,2,4]
// console.log(Math.min(...arr))
// **************
// Watch the following video to understand about prime numbers and how to store them :- Video_Link



// After watching the video solve the following Question :-



// Write a program to store first 20 prime numbers in an array .
// arr = []
// let count = 1
// let n = 2
// while (count <= 20) {

//     let i = 2
//     flag = true
//     while (i < n) {

//         if (n % i === 0) {
//             flag = false
//         }
//         i++
//     }
//     if (flag) {
//         // console.log(n)
//         arr.push(n)
//         // console.log(`prime`)
//         count++

//     } else {
//         // console.log(`not a prime`)
//     }
//     n++
// }
// console.log(arr)
// *******************
// (Important) Watch the following video to understand about subarrays - https://www.youtube.com/watch?v=RXccMVsvjbU



// After watching the video write the code to

// Initialize an array with values {1,3,4,5 ,6} and print all the subarrays of it.

// let arr = [1, 3, 4, 5, 6]


// for (let i = 0; i < arr.length; i++) {

//     for (let j = i; j < arr.length; j++) {

//         for (let k = i; k <= j; k++) {

//             document.write(arr[k])
//         }
//         document.write(`<br>`)
//     }
// }
// **********************
// Initialize an array with 5 elements and Write a program to find the maximum sum subarray 
// let arr = [1, 3, 4, 5, 6]
// let sum=0
// let lastsum=0

// for (let i = 0; i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         for(let k=i;k<=j;k++){
//             document.write(arr[k])
//             sum=sum+arr[k]
//             if (sum>lastsum) {
//                 lastsum=sum
//             }
//         }document.write(`<br>`)
//         sum=0

//     }
// }
// console.log(lastsum)
// ************************
// Solve the following problem on leetcode and copy paste your code here
// 1480. Running Sum of 1d Array
// let nums=[1,2,3,4]

// let sumArr=[]
// let sum=0


//     for(let i=0;i<nums.length;i++){

//         for(let j=0;j<=i;j++){

//          document.write(`${nums[j]}`)
//          sum=sum+nums[j]

//         }
//         document.write(`<br>`)
//         sumArr.push(sum)
//         console.log(sum)
//         sum=0
//     }
// console.log(sumArr)
// ********************
// 1672. Richest Customer Wealth

// let accounts=[[1,5],[7,3],[3,5]]
// let sum=0
// let maxSum=0
// for(let i=0;i<accounts.length;i++){
//     console.log(accounts[i])
//     sum=0
//     for(let j=0;j<accounts[i].length;j++){
//     console.log(accounts[i][j])
//     sum=sum+accounts[i][j]
//     }
//     console.log(sum)
//     if (sum>maxSum) {
//         maxSum=sum
//     }
// }
// console.log(maxSum)
// // ****************
// 1588. Sum of All Odd Length Subarrays
// let arr=[10,11,12]
// let count=0
// let sum=0
// for(let i=0;i<arr.length;i++){
//     count=0
//     for(let j=i;j<arr.length;j++){
//         count++

//         document.write(`<br>`)

//         if ((count%2===1)) {
//             for (let k=i;k<=j;k++){
//                 document.write(`${arr[k]}`)
//                 sum =sum+arr[k]

//             }
//         }
//         else{for (let k=i;k<=j;k++){
//             document.write(`${arr[k]}`)

//         }}
//     }
// }
// console.log(sum)
// **************************
// 189. Rotate Array

// let nums=[1,2,3,4,5,6,7]
// let k=3
// let temp=0
// k=k%nums.length
// a=[]
// console.log(nums)
// for(let i=0;i<nums.length;i++){
// a[(i+k)%nums.length]=nums[i]
// }
// for(let i=0;i<nums.length;i++){
//     nums[i]=a[i]
// }
// console.log(nums)
// // *****************************
// SELECTION SORT
// let arr=[3,2,4,1,5,8]
// let min=0
// for(let i=0;i<(arr.length)-1;i++){
//     min=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j
//         }
//     }[arr[i],arr[min]]=[arr[min],arr[i]]
// }
// // ********************
// BUBBLE SORT
// let arr = [3, 2, 4, 1, 5, 8]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1-i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         }
//     }
// }
// console.log(arr)
// ************************
// INSERTION SORT

// let arr = [3, 2, 4, 1, 5, 8]
// let value=0
// let hole=0
// for(let i=1;i<arr.length;i++){
//     value=arr[i]
//     hole=i
//     while (hole>0 && value<arr[hole-1]) {
//         arr[hole]=arr[hole-1]
//         hole=hole-1
//     }
//     arr[hole]=value
// }
// ***********************
// Find the element that appears once in an array where every other element appears twice
 
// let ar= [7, 3, 5, 4, 5, 3, 4]
// let xor=0
// for(let i=0;i< ar.length;i++){
//     xor=xor^ar[i]
// }
// ************************
// 191. Number of 1 Bits
// let n=5
// let count=0
// for(let i=1;i<=32;i++){

//     if (((n>>i)&1)==1) {
//         count++;
//     }
// }
// ******************
// Get bit
// checking whether the pos have 1 or 0
// let n=4//binary is 101
// let i=2

//     console.log((n&(1<<i))!=0)
// **********************
// Set bit
// to set a bit as 1
// unset means setting abit as 0
// let n=5
// let i=1;
// console.log(n|(1<<i))//op is 7=111 101 010
// console.log(n&(~(1<<1)))
// **************************************************************
// Clear bit
// to clear a bit
// which means to unsetting 1 to 0
// let n=5;
// i=2;
// console.log(n&(~(1<<i)))
// *****************************************************************
// Update Bits
// updateBit=>Clear Bits->Set Bit
// let n=7;//111
// let i=1;
// n=n&(~(1<<i))
// console.log(n)//n=5/101
// console.log(n|(1<<i))
// ********************************************
// Leetcode 190 - Reverse Bits of An Integer | Bits Manipulation
// let n=4294967293
// let res=0
// for(let i=1;i<=32;i++){
//     res=res <<1
//     res=res|(n&1)
//     n=n>>1
    
// }
// console.log(res>>>0)//only for js and java

// let op=parseInt(prompt(`enter the first`))
// let bottom=parseInt(prompt(`enter the first`))
// let sign=(op>=0)==(bottom>=0)? true: false
//  op=Math.abs(op)
//  bottom=Math.abs(bottom)
// let res=0
// let count=0
// if (op>0 && bottom>0) {
//     while (op>=bottom) {
//         op=op-bottom
//         count++
//       }
// }
// console.log(sign? count:-count)
// let dividend=10
// let divisor=3
// dividend=Math.abs(dividend)
// divisor=Math.abs(divisor)
// let res=0
// while (dividend-divisor>=0) {
//     let count=0
//     console.log(divisor<<1<<count)
//     while (dividend-(divisor<<1<<count)>=0) {
//         count++//1
//     }
//     res+=1<<count//res=res+1<<count 2
//     dividend-=divisor<<count//dividend=dividend-divisor<<count 4
// }
// console.log(res)
// **************************************
// 29. Divide Two Integers
// let dividend=2147483647


// let divisor=1


// let sign=((dividend>=0)^(divisor>=0))? true: false
//  let a=Math.abs(dividend)
// let b=Math.abs(divisor)
// let res=0
// console.log(sign)
// while (a>=b) {
//     let count=0
//     while (a>=b<<1<<count) {
//         count++;
//     }
//     res+=1<<count
//     a=a-(b<<count)
// }

// console.log(sign? -res:res)
// ************************************
// +++
// --+
// -+-
// +--
// 693. Binary Number with Alternating Bits
// let n=10

// xor=n^(n>>1)
// if (((xor+1)&xor)==0) {
//     console.log(true)
    
// }else{
//     console.log(false)
// }
// // ****************************
// 405. Convert a Number to Hexadecimal
// let n=-2
// let hex=``
// let digits=`0123456789abcdef`
// if (n<0) {
//     n=n+2**32
// }
// console.log(n)

// while (n) {
//     rem=n%16
    
//         hex+=digits[rem]
//     n=Math.floor(n/16) 
// }
// console.log(hex.split(``).reverse().join(``))
// ********************************************