// 1920. Build Array from Permutation

// let nums = [0,2,1,5,3,4]
// let ans =[]
// for(let i=0;i<nums.length;i++) {
//     ans[i] = nums[nums[i]]
// }
// console.log(ans)
// ********************************
// 1. Two Sum
// let nums = [11,2,15,7], target = 9
// for(let i=0;i<nums.length-1;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if (nums[i]+nums[j]===target) {
//             console.log(i,j)
//             break;
//         }
//     }
// }
// ****************************************
// class students{
//    school=`telusko`
// car=1
// constructor(m1,m2,m3){
// this.m1=m1
// this.m2=m2
// this.m3=m3
// }

// }
// class students2 extends students{
//     constructor(){
//         super(this.m1,this.m2)
//     }
// }
// students.school=`abc`
// students.car=2
// s1=new students(34,47,32)


// s2=new students(32,46,31)
// **********************************
// let count=0
// let n=5
// for(let i=0;i<32;i++){

//     if (((n>>i)&1)==1) {
//         count++;
//     }
// }console.log(count);
// let mask=1
// for(let i=0;i<32;i++){

//     if ((n&mask)!==0) {
//         count++;//1
//         mask =mask<<1
//     }
// }console.log(count);
// class MinStack{
//     constructor(){
//         this.stack=[]
//         this.min=[]
//     }
//     push(element){
//         this.stack.push(element)
//         if (this.min.length===0||this.min[this.min.length-1]>element) {
//             this.min.push(element)
//         }
//     }
//     pop(){
//         if (this.stack[this.stack.length-1]===this.min[this.min.length-1]) {
//     this.min.pop()
//         }
//         return this.stack.pop()
//     }
//     top(){
//         return this.stack[this.stack.length-1]
//     }
//     getMin(){
//         return this.min[this.min.length-1]
//     }
// }
// let minStack=new MinStack()
// minStack.push(-2)
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // return -3
// minStack.pop();
// minStack.top();
// console.log(minStack.getMin())    // return 0
// let s = `{[]})`
// let stack=[]//)])
// let bool=Boolean
// let myMap = new Map([
//     [`(`, `)`],
//     [`{`, `}`],
//     [`[`, `]`]
// ])

// for (const char of s) {
//     if (myMap.has(char)) {
//         stack.push(myMap.get(char))
//     }else if(stack.pop()!==char){
//         bool=false;
//         break
//     }

// bool=Boolean(!stack.length)
// }
// let pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// let stack=[]//12
// let j=0


// for(let i=0;i<pushed.length;i++){
//    stack.push(pushed[i])
//    while(popped[j]===stack[stack.length-1]) {
//     stack.pop()
//     j++
//    }
// }
// let s="azxxzy"
// let stack=[]
// for (const char of s) {
//     console.log(char)

//     if (stack[stack.length-1]===char) {
//         stack.pop()
//     }else{
//         stack.push(char)
//     }

// }
// let a=stack.join("")
//is it an number then push to mulStack
//else if it is a`[`
//else `]`
//else s+=`char`
// let s = "abc3[cd]xyz"
// let temp=``
// let solution=``
// let mulStack=[]
// let repStack=[]
// for (const char of s) {
//     if(!isNaN(char)){
//         temp=`${temp}${char}`
//     }else if(char===`[`){
//         mulStack.push(temp)
//         temp=``
//         repStack.push(solution)
//         solution=``
//     }else if(char===`]`){
//         solution=repStack.pop()+solution.repeat(mulStack.pop())
//     }else{
//         solution+=char
//     }

// }
// let nums = [5,4,3,2,1]

// let stack = []//1i
// let mymap = new Map()//
// let solution =[]//0i;2
// let j=0
// for (let i = 0; i < nums.length; i++) {

//     while (stack.length>0&&nums[i] > nums[stack[stack.length - 1]]) {
//         solution[stack.pop()]=nums[i]

//     }
//         stack.push(i)

// }
// for (let i = 0; i < nums.length; i++) {
//     while (stack.length>0 &&nums[i] > nums[stack[stack.length - 1]]) {


//         solution[stack.pop()]= nums[i]
//     }

// }
// while (stack.length>0) {
//   solution[stack.pop()]= -1
// class Node
// class Node
// {
// 	constructor(d)
// 	{
// 		this.data=d;
// 		this.next = null;
// 	}
// }

// class LinkedList
// {

// constructor()
// {
// 	this.head=null;
// }


// addToTheLast(node)
// {
// 	if (this.head == null)
// 	{
// 		this.head = node;
// 	}
// 	else
// 	{
// 		let temp = this.head;
// 		while (temp.next != null)
// 			temp = temp.next;
// 		temp.next = node;
// 	}
// }

// printList()
// {
// 	let temp = this.head;
// 	while (temp != null)
// 	{
// 		document.write(temp.data + " ");
// 		temp = temp.next;
// 	}
// 	document.write("<br>");
// }
// }

// function sortedMerge(headA,headB)
// {
// 	/* a dummy first node to
// 	hang the result on */
// 	let dummyNode = new Node(0);

// 	/* tail points to the
// 	last result node */
// 	let tail = dummyNode;
// 	while(true)
// 	{

// 		/* if either list runs out,
// 		use the other list */
// 		if(headA == null)
// 		{
// 			tail.next = headB;
// 			break;
// 		}
// 		if(headB == null)
// 		{
// 			tail.next = headA;
// 			break;
// 		}

// 		/* Compare the data of the two
// 		lists whichever lists' data is
// 		smaller, append it into tail and
// 		advance the head to the next Node
// 		*/
// 		if(headA.data <= headB.data)
// 		{
// 			tail.next = headA;
// 			headA = headA.next;
// 		}
// 		else
// 		{
// 			tail.next = headB;
// 			headB = headB.next;
// 		}

// 		/* Advance the tail */
// 		tail = tail.next;
// 	}
// 	return dummyNode.next;
// }


// /* Let us create two sorted linked
// 	lists to test the methods
// 	Created lists:
// 		llist1: 5->10->15,
// 		llist2: 2->3->20
// 	*/
// let llist1 = new LinkedList();
// let llist2 = new LinkedList();

// // Node head1 = new Node(5);
// llist1.addToTheLast(new Node(5));
// llist1.addToTheLast(new Node(10));
// llist1.addToTheLast(new Node(15));

// // Node head2 = new Node(2);
// llist2.addToTheLast(new Node(2));
// llist2.addToTheLast(new Node(3));
// llist2.addToTheLast(new Node(20));



// document.write("Merged Linked List is:<br>")
// llist1.printList();
// let i=0
// function recursive(i) {

// 	if(i>=4){
// 		return
// 	}
// 	console.log(i)
// 	recursive(i+1)
// 	console.log(i)

// }
// let j=0
// let sum=0
// function sumRecursive(j) {
// 	if (j>5) {
// 		return 0
// 	}
// sum=j+sumRecursive(j+1)
// return sum
// }
// j=1
// let factorial=0
// function factorialRecursive(n) {
// 	if (n>5) {
// 		return 1
// 	}
// 	factorial=n*factorialRecursive(n+1)
// 	return factorial
// }
// let k=04
// function rec(n) {
// 	if (n<=1) {

// 		return

// 	}

// 	rec(n-1)

// 	console.log(n)

// 	rec(n-1)
// 	console.log(`.`)
// }
// ********************************
// Even Numbers By Using While Loop
// Write a program using only while loops to print all the even numbers from 1 to n

// Input

// 10

// Output

// 2

// 4

// 6

// 8

// 10
// let i=0
// let n=10
// while (i<n) {

// 	i=i+2
// 	console.log(i)
// }
// ***********************************
// let i=1
// let series =0
// while (series<49) {
// 	series = i*i
// 	console.log(series)
// 	i++
// }
// *************************

// let i=0
// let n=7
// while (i<n) {
// 	i++
// 	if(i%5==0){
// 		continue
// 	}
// 	console.log(i)

// }
// *********************************

// let n=153
// let temp=0
// while (n>0) {
//     temp=n%10
//     n=parseInt(n/10)
//     console.log(temp)
// }
// var cache = [];
// for(let i = 0; i <= 5; i++) {
//   cache.push([]);
// }
// let board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]
// var solveSudoku = function (board) {
//   solve(board)
// }
// *************************************************************
// function solve(board) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] == `.`) {
//         for (let c = 1; c <= 9; c++) {
//           if (valid(board, i, j, c)) {
//             board[i][j] = c.toString()
//             if (solve(board) == true) {
//               return true
//             } else {
//               board[i][j] = `.`
//             }
//           }

//         }
//         return false
//       }
//     }
//   }
//   return true
// }

// function valid(board, row, col, c) {
//   for (let i = 0; i <= 8; i++) {
//     if (board[row][i] == c) {
//       return false
//     }
//     if (board[i][col] == c) {
//       return false
//     }
//     if (board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + i % 3] == c) {
//       return false
//     }
//   }
//   return true
// }
// **************************************************
// let  s = "aab"
// var partition = function(s) {
//   let path=[]
//   let res=[]
//     func(s,res,path,0)
//     return res
// };
// function func(s,res,path,index) {
//   if (index==s.length) {
//     res.push([...path])
//     return
//   }
//   for(let i=index;i<s.length;i++){
//     if (isPalindrome(s,i,index)) {
//       path.push(s.substring(index,i+1))
//       func(s,res,path,i+1)
//       path.pop()
//     }
//   }
// }
// function isPalindrome(s,i,index) {
//   while (index<=i) {
//     if (s[index++]!=s[i--]) {
//       return false
//     }
//   }
//   return true
// }
// let res=[]
// let plds=[]
// ******************************************

//.................................
// let a=[1,2,[3,4,[5,6]]]

// let arr1=[]
// function recurs(arr,i){
// if(i===arr.length){
//   return
// }

// if(typeof arr[i]!=="number"){
//   recurs(arr[i],0)
// }else{

//   arr1.push(arr[i])
// }

// recurs(arr,i+1)
// }


// recurs(a,0)
// console.log(arr1);

//.............................................................

// function a(...b){
// console.log(b.length);
// }
// a(1,2,3,4,5)


// let sum=1
// function fact(n,i){

//     if(i>n){
//         return 1
//     }
//         sum=i*fact(n,i+1)


//         return sum



// }

// console.log(fact(5,1));
// let str=`geeks`
// function reverseWord(str){
//     Your code here
//     let ans=``
//     for(let i=str.length-1;i>=0;i--){
//         ans+=str[i]
//     }
//     return ans
// }
// console.log(reverseWord(str));
// let arr=[1000, 11, 445, 1, 330, 3000]
// function minMax(arr) {
//     let min=Infinity
//     let max=-Infinity
//     for(let i=0;i<arr.length;i++){
//         min=Math.min(min,arr[i])
//         max=Math.max(max,arr[i])
//     }
//     console.log(min,max);
// }
// minMax(arr)
// let arr=[0,1,1,0,1,2,1,2,0,0,0,1]
// let l=0
// let m=0
// let h=arr.length-1
// while (m<=h) {
//     if (arr[m]==0) {
//         [arr[m],arr[l]]=[arr[l],arr[m]]
//         m++;
//         l++

//     }else if(arr[m]==1) {
//         m++
//     }
//     else{
//         [arr[m],arr[h]]=[arr[h],arr[m]]
//         h--
//     }
// }
// let arr=[-12,11,-13,-5,6,-7,5,-3,-6]
// let j=0
// let i=0

// while (j<arr.length) {
//     if (arr[j]>0) {
//         j++
//     }else if(arr[j]<0&&arr[i]>0) {
//         [arr[j],arr[i]]=[arr[i],arr[j]]
//         j++
//         i++
//     }else if(arr[i]<0&&arr[j]<0){
//         i++
//         j++
//     }
// }
// let a=[85,25,1,32,54,6]
// let b=[85,2]
// let set=new Set()

// for(let i=0; i<a.length;i++){
//     set.add(a[i])
// }
// for(let j=0;j<b.length;j++){
//     set.add(b[j])
// }
// console.log(set.size);

// let arr=[1,2,3,4,5]
// console.log(arr);
// for(let i=arr.length-1;i>0;i--){
//     [arr[i],arr[i-1]]=[arr[i-1],arr[i]]
// }
// console.log(arr);

//max sum in subArray
// let a=[-2,1,-3,4,-1,2,1,-5,4]

// let max=Number.NEGATIVE_INFINITY
// for(let i=0;i<a.length;i++){
//     let sum=0
//     for(let j=i;j<a.length;j++){
//         sum+=a[j]
//         max=Math.max(sum,max)
//     }
// }
// console.log(max);
// let sum=0;
// let max=Number.NEGATIVE_INFINITY
// for(let i=0;i<a.length;i++){
//     sum=Math.max(sum+a[i],a[i])
//     max=Math.max(max,sum)
// }
// console.log(max);


// let a=[1,4,2,5,3]
// let mainSum=0
// for(let i=0;i<a.length;i++){
//     let sum=0
//     for(let j=i;j<a.length;j++){
//         sum+=a[j]
//         if (j%2==0) {
//             mainSum+=sum
//         }
//     }
// }
// console.log(mainSum);

// let a= [7, 1, 5, 2, 3, 6]
// let b=[3, 8, 6, 20, 7]
// let intersect=[]
// let union=[]
// let set=new Set()
//adding first array to set to find intersection
// for(let i=0;i<a.length;i++){
//     set.add(a[i])
// }

// for(let j=0;j<b.length;j++){
//     if (set.has(b[j])) {
//         intersect.push(b[j])
//     }
// }
// console.log(intersect);

// for(let k=0;k<b.length;k++){
//     set.add(b[k])
// }
// for (const item of set) {
//     union.push(item)
// }
// console.log(union);

// let str=`aabccba`
// let result=``
// for(let i=0;i<str.length-1;i++){
//     if(str[i]!==str[i+1]){
//         result+=str[i]
//     }
// }
// result+=str[str.length-1]
// console.log(result);
// let s=`abba`
// function isPalindrome(s) {
//     console.log(reverse(s));
//     if (s===reverse(s)) {
//         return 1
//     }else{
//         return 0
//     }
//     function reverse(s) {
//         let r=``
//         for(let i=s.length-1;i>=0;i--){
//             r+=s[i]
//         }

//         return r
//     }

// }


// console.log(isPalindrome(s));
// function abc() {

//     console.log(a);

//     }



//     abc();

//     var a = 7;


// let c=10
// console.log(c);

// const b;
// console.log(`a`);
// console.log(`b`);
// setTimeout(() => {
//     console.log(`C`);
// }, 1000);
// setTimeout(() => {
//     console.log(`c`);
// }, 0);
// console.log(`d`);
// let a=[1,2,3,4,5]
// let result=a.map((e)=>(e*2))
// console.log(result,`this is result 1`);
// let result2=[]
// for(let i=0;i<a.length;i++) {
//     result2.push(a[i]*2)
// }
// console.log(result2 ,`this is result2`);
// Number.NEGATIVE_INFINITY

// function x(){

//     let a = 10;

//     function y(){

//     console.log(a);

//     }

//     a= 50;

//     return y;

//     }



//     const z = x()

//     console.log(z());
// let a=[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]

// let ladder=a[0]
// let stairs=a[0]
// let jump=1
// for(let level=1;level<a.length-1;level++){
//     if (level==a.length-1) {
//         break
//     }
//     if (level+a[level]>ladder) {
//         ladder=level+a[level]
//     }
//     stairs--
//     if (stairs==0) {
//         jump++

//         stairs=ladder-level
//         console.log(ladder,level,stairs);
//     }
//     if (stairs==0) {
//         jump=-1
//     }
// }
// console.log(jump);
// Math.floor
// let nums = [1,1]
// let set =new Set();
// for(let i=0;i<nums.length;i++){
//     if (set.has(nums[i])) {
//         console.log(nums[i]);
//     }
//     set.add(nums[i])
// }

// let b=[1, 3, 5, 7]
// let a=[0, 2, 6, 8, 9]
// let res=[]
// let i=0
// let j=0
// while (i<a.length&&j<b.length) {
//     if (a[i]>b[j]) {
//         res.push(b[j])
//         j++
//     }else{
//         res.push(a[i])
//         i++
//     }
// }
// console.log(i,a.length);
// if (i==a.length) {
//     while (j<b.length) {
//         res.push(b[j])
//         j++
//     }
// }else{
//     while (i<a.length) {
//         res.push(a[i])
//         i++
//     }
// }
// console.log(res);
// b.push(...a)
// b.sort((a,b)=>a-b)
// 'use strict'
// this.table=`window table`

// const cleanTable=function () {
//     console.log(this.table);
// }
// cleanTable()
// What will be the output of the following


// This is one of the most important topics for interview purpose.



// Deliverable



// 1) Watch uptill the 19th min and explain about how Execution context goes about executing callback function. Explain each step

// 2) When is the global execution context removed from the stack?

// 3)Continue watching uptill 25th min and explain how does the DOM APIs and how callback is encounter and stored in event loop and finally when is it executed

// 4)Continue watching uptill 27min 30 sec and explain why do we need the callback queue

// 5)Continue watching uptill 36th min. Explain how does fetch work when clubbed with cb.

// 6) Complete the video What is microtask queue and how is it different

// 7)What is starvation ?
// let map={}
// let s=`codeleet`
// let indices=[4,5,6,7,0,2,1,3]
// let res=``
// for(let i=0; i<indices.length; i++){
//     map[indices[i]]=s[i]
// }
// for(let j=0; j<indices.length;j++){
//     res+=map[j]
// }
// console.log(res);

// let encoded=[1,2,3]
// let arr=[]
// let first=1
// arr[0]=first

// for(let i=0;i<encoded.length;i++){
//     arr[i+1]=arr[i]^encoded[i]

// }
// console.log(arr);

// let nums = [0,1,2,3,4], index = [0,1,2,2,1]
// let target=[]
// for(let i=0;i<nums.length;i++){
//     target.splice(index[i],0,nums[i])
// }
// console.log(target);

// const obj1={
//     'key1':1,
//     'key2':2,
//     'key3':1000,
// }
// const {
//     key1,key3
// }={...obj1}
// console.log(key1,key3);

// console.log('a');

// console.log('b');
// let promise2=new Promise((resolve,reject) => {
//     setTimeout(() => resolve(`c`), 3000)

// })

// let promise3=new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`d`), 0)
// })


// let promise1=new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('e')
//     }, 5000);
// })

// promise1.then(text=>{
//     console.log(text);
// })
// promise2.then((text=>{console.log(text)
// promise3.then(text=>console.log(text))}
// ))

// let items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// let map={
//     type:0,
//     color:1,
//     name:2
// }

// let count=0
// let a= items.filter((item)=>{
//    return item[map[ruleKey]]===ruleValue
// })
// console.log(items);
// console.log(map[ruleKey]);
// console.log(a.length);

// let  nums = [1,3], k = 3
// let count = 0
// for(let i=0; i<nums.length-1; i++){
//     for (let j=i+1; j<nums.length;j++){
//         if (Math.abs(nums[i]-nums[j])===k) {
//             count++
//         }
//     }
// }
// console.log(count);
// let seats = [3,1,5], students = [2,7,4]
// let result=0;
// seats.sort((a,b)=>a-b)
// students.sort((a,b)=>a-b)
// for(let i=0;i<seats.length;i++){
//     result+=Math.abs(seats[i]-students[i])
// }
// console.log(result);

// let  word1 = ["ab", "c"], word2 = ["a", "bca"]
// var arrayStringsAreEqual = function(word1, word2) {

//     return word1.join("") == word2.join("")?true:false;
// };
// // console.log(word1.join(''));
// console.log(arrayStringsAreEqual(word1, word2));

// let allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// let set=new Set(allowed);
// let count=0
// let a;
// a=words.reduce((acc, word) =>{
//    return word.split('').every((l)=>set.has(l))?++acc:acc
// },0)
// console.log(set);
// console.log(a);
// let nums = [5,6,2,7,4]

// nums.sort((a,b)=>a-b)
// let result=0

// result=(nums[nums.length-1]*nums[nums.length-2])-(nums[0]*nums[1])
// console.log(nums);
// console.log(result);
// console.log(nums[nums.length-1]);

// let maxA=-Infinity,maxB=-Infinity
// let minA=Infinity,minB=Infinity
// for(let i=0;i<nums.length;i++){
//    if (nums[i]>maxA) {
//       [maxA,maxB]=[nums[i],maxA]
//    }else if(nums[i]>maxB){
//       maxB=nums[i]
//    }
//    if (nums[i]<minA) {
//       [minA,minB]=[nums[i],minA]

//    }else if(nums[i]<minB){
//       minB=nums[i]
//    }
// }
// let result=(maxA*maxB)-(minA*minB)
// console.log(result);

// let a=[1,2,3]
// let result=[]
// for(let i=0;i<a.length;i++){

//    result[i]=a[i]
//    result[a.length+i]=a[i]
// }
// console.log(result);

// let a=[3,6,1,8]
// //1,3,6,8

// let obj={}
// let result=[]
// for(let i=0;i<a.length;i++){
//    obj[a[i]]=i
// }
// console.log(obj);
// for (const iterator in obj) {
//    result.push(parseInt(iterator) )
// }
// console.log(result);
// let a=[1,2,3,4,5,6,7,8]
// let num=10

// let left=0
// let right=a.length-1

// while(left<=right){
//    let mid=Math.floor((left+right)/2)

// console.log(a[mid])
//    if(a[mid]==num){
//       console.log(a[mid]);
//       break;

//    }
//    else if(a[mid]>num){
//       right=mid
//    }else if(a[mid]<=num){
//       left=mid+1
//    }else{
//       console.log(`no`);
//    }
//    console.log(`left`,left);
//    console.log(`right`,right);
// }
// let s = "Hello how are you Contestant", k = 4

// let result =[]
// result=s.split(" ")
// // let ans=[]
// // for(let i=0;i<k;i++){
// //    ans.push(result[i])
// // }
// console.log(result);
// // console.log(ans.join(' '));
// console.log(result.filter((word,index)=>{
//    return index<k
//    }));

// let arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// let result =0
// for(let i = 0; i < arr.length-2; i++){
//    for (let j = i+1; j < arr.length-1; j++){
//       if (Math.abs(arr[i]-arr[j])>a)continue;
//       for(let k=j+1;k< arr.length;k++){

//             if(Math.abs(arr[j]-arr[k])>b) continue;
//             if (Math.abs(arr[k]-arr[i])<=c)result++

//       }
//    }
// }
// console.log(result);

// let ltr={
//    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
//    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..'
// }
// let words = ["gin","zen","gig","msg"]

// let result =words.map(word => word.split('').map(l=>ltr[l]).join(''))
// console.log(result);
// let set=new Set(result)
// console.log(set.size);
// let points = [[3,2],[-2,2]]
// let a,b;
// let res=0
// for(let i=0;i<points.length-1;i++){
//    a= Math.abs(points[i+1][0]-points[i][0])
//    b=Math.abs(points[i+1][1]-points[i][1])
//   console.log(`a`,a);
//   console.log(`b`,b);
//    res+=a>b?a:b
// }
// console.log(res);

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

// let images = [[1,1,0],[1,0,1],[0,0,0]]

// let res=images.map(image=>image.reverse().map(el=>el==1?0:1))
// console.log(res);

// let n=11
// let count=0
// while (n) {
//     if (n&1) {
//         count++
//     }
//    n= n>>1
// }
// console.log((0b11111111111111111111111111111101).toString(10));



// var hasAlternatingBits = function(n) {
//   while (n) {
//       if (n&1==0) {
//           return true;
//       }
//       n=n>>1
//   }
//   return true
// };
// console.log(hasAlternatingBits(5));

// let n=10;
// let res=0;
// let  temp=0;
// while (n) {
//     temp=n&1
//     res=res<<1
//     res=temp|res
//     n=n>>>1
// }
// console.log(res);
// const subarrayBitwiseORs = arr => {
//     debugger
// 	const bits = [];
// 	let L = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		const R = bits.length;
// 		bits.push(arr[i]); // handle subarray with only 1 number

//     // create next sub-array and find bitwise OR
// 		while (L < R) {
// 			const prev = bits[bits.length - 1];
// 			const bitwise = bits[L] | prev; // get bitwise OR using prev bit value

// 			if (bitwise !== prev) bits.push(bitwise);

// 			L++;
// 		}
// 	}

// 	return new Set(bits).size; // get all unique bitwise ORs
// };
// console.log(subarrayBitwiseORs([1,2,4]));
// let gain = [-5,1,5,0,-7]

// let highest=0
// let sum=0
// for(let i=0;i<gain.length;i++) {

// 	highest=Math.max(sum+=gain[i],highest)
// }

// console.log(highest);
// console.log(sum);
// console.log(gain.reduce((acc,curr)=>{
// 	acc+curr
// return sum=	Math.max(acc,sum)
// },0));

// let nums = [2,5,6,9,10]
// let max=-Infinity
// let min=Infinity
// let i=0
// let j=nums.length - 1
// let res=0
// while (i<=j) {
// 	max=Math.max(max,nums[i],nums[j])
// 	min=Math.min(min,nums[i],nums[j])
// 	i++
// 	j--
// }

// console.log(max,min);
// for(let k=1;k<=min;k++) {
	
// 	if (min%k==0&&max%k==0) {
// 		res=Math.max(res,k)
// 	}
// }
// console.log(res);

// let m = 2, n = 3, indices = [[0,1],[1,1]]


// let arr=[]

// for(let i=0;i<2;i++){
// arr.push(new Array(3).fill(0))
// }
// console.log(arr);

// for(let i=0;i<indices.length;i++){
	
// 	console.log(indices[i][0]);
// 	console.log(indices[i][1],`a`);
// 	fn(arr,indices[i][0],indices[i][1])
// }

// function fn(arr,ind1,ind2) {
// 	for(let i=0;i<n;i++){
// 		arr[ind1][i]++
// 	}
// 	for(let j=0;j<m;j++){
// 		arr[j][ind2]++
// 	}
// 	console.log(arr);
	
// }

let  s = "pwwkew"
let set=new Set()
let max=-Infinity
for(let i=0;i<s.length;i++){
if (!set.has(s[i])) {
	set.add(s[i])
	max=Math.max(set.size,max)
}else{
	set.clear()
	set.add(s[i])
	max=Math.max(set.size,max)
}
}
console.log(max);