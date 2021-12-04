// stack topic
// class Stack{
//     constructor(){
//         this.item=[]
//         this.count=0
//     }
//     push(element){
//         this.item[this.count]=element
//         this.count++;
//         console.log(`${element} is added to position ${this.count-1}` ) 
//     }
//     pop() {
//        let deleted=this.item[this.count-1]
//        console.log(`${deleted}removed`)
//        this.count--; 
//     }
//     peak(){
//         console.log(`top element is ${this.item[this.count-1]}`)
//     }
//     isEmpty(){
//          console.log(this.count==0 ? `empty`:`not empty`)

//     }
//     size(){
//         console.log(`size is ${this.count}`)
//     }
//     print(){
//         let str=``
//         for(let i=0; i<=this.count-1;i++ ){
//             str+=`${this.item[i]} `
//         }
//        console.log(str) 
//     }
//     clear(){
//         this.item=[];
//         this.count=0
//         console.log(`cleared`)
//     }
// }
// let stack=new Stack()
// stack.push(100)
// stack.push(101)
// stack.peak()
// stack.push(102)
// stack.isEmpty()
// stack.size()
// stack.print()
// stack.pop()
// stack.print()
// stack.clear()
// stack.print()
// stack.size()
// stack.isEmpty()
// *********************************************
// 155. Min Stack
// class MinStack{
//     constructor(){
//         this.item=[]
//         this.min=[]

//     }
//     push(element){
//         this.item.push(element)
//         if (this.min.length===0||this.min[this.min.length-1]>=element) {
//             this.min.push(element)
//         }



//     }
//     pop() {
//        let x=this.item.pop()
//        if (x===this.min[this.min.length-1]) {
//         this.min.pop()
//        }



//     }
//     top(){

//         return (this.item[this.item.length-1])
//     }

//     getMin(){
//         return (this.min[this.min.length-1])
//     }

// }
// a=[1,5,-6,32,-15,3]
// let minStack=new MinStack()
// minStack.push(1)
// minStack.push(5)
// minStack.push(-6)
// minStack.push(32)
// minStack.push(-15)
// minStack.push(3)
// minStack.pop()
// minStack.pop()
// minStack.pop()
// minStack.pop()
// minStack.pop()
// ***********************************************
// 20. Valid Parentheses
// let s=`(){}`
// var isValid = function(s) {
//     let brackets = {
//         "(": ")",
//         "{": "}",
//         "[": "]"
//     }
//     let stack=[]
//     for (const char of s) {
//        if (brackets[char]) {
//            stack.push(brackets[char])
//        }else if(stack.pop()!==char){
//         return false
//        }
//     }
//     return (!stack.length)
// };
// let brackets = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
// }
// *********************************
// 946. Validate Stack Sequences
// let pushed = [1,2,3,4,5], popped = [4,5,3,1,2]
// let j=0
// let stack = [];
// function validSequence(pushed, popped) {

//    for(let i = 0; i < pushed.length; i++){
//     stack.push(pushed[i])
//     while (j<popped.length&&popped[j]===stack[stack.length-1]) {
//         stack.pop()
//         j++;
//     }
// }
// return (!stack.length)
// }
// ****************************************************************
// 1047. Remove All Adjacent Duplicates In String
// let s=`abbaca`
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
// and this is the only possible move.  The result of this move is that the string is "aaca",
//  of which only "aa" is possible, so the final string is "ca".
// // function removeDuplicates(s) {
//     let stack =[]
//     for (const char of s) {
//         if (stack[stack.length-1]===char) {
//             stack.pop()
//         }else{
//             stack.push(char)
//         }
//     }
//     return stack.join(``)
// }
// ********************************************
// 394. Decode String
// let s = "3[a2[c]]"
// let stackMul = []//3
// let stackReap = []//``
// let solution =``
// let tempMul =``
// function decodeString(s) {
//     for (let char of s) {
//         if (!isNaN(char)) {
//             tempMul=`${tempMul}${char}`
//         }else if(char ===`[`){
//             stackMul.push(tempMul)
//             tempMul=``
//             stackReap.push(solution)
//             solution=``
//         }else if(char ===`]`){
//             solution=stackReap.pop()+solution.repeat(stackMul.pop())//acc
//         }else{
//             solution+=char//acc
//         }
//     }
//     return solution
// }
// ********************************************
// 496. Next Greater Element I
// let nums1 = [1,3,5,2,4],
//     nums2 = [6,5,4,3,2,1,7]


// function nextGreaterElement(nums1, nums2) {
//     let stack = [] //4,2
//     let myMap = new Map(); //1:3 4:-1 2:-1
//     let result = []
//     for (let i = 0; i < nums2.length; i++) {
//         while((stack.length!==0)&&(nums2[i] > stack[stack.length - 1])) {
//             myMap.set(stack.pop(), nums2[i])


//         } stack.push(nums2[i])



//     }
//     while (stack.length-1 > 0) {
//         myMap.set(stack.pop(), -1)
//     }
//     for (let j = 0; j < nums1.length; j++) {
//         result.push(myMap.get(nums1[j]))
//     }
//     console.log(myMap)
//     return result
// }
// **********************************************
// 503. Next Greater Element II
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
// }
// ************************************
// // 42. Trapping Rain Water
// let height = [4, 2, 0, 3, 2, 5]
// let left = []
// let right = []
// left[0] = height[0]
// let trap = 0
// for (let i = 1; i < height.length; i++) {

//     left[i] = Math.max(left[i - 1], height[i])
// }

// right[height.length - 1] = height[height.length - 1]

// for (let i = height.length - 2; i >= 0; i--) {
    
//     right[i] = Math.max(right[i + 1], height[i])
// }
// for (let i = 0; i < height.length; i++) {
//     trap += Math.min(left[i], right[i]) - height[i]
// }
// ************************************************************
// 901. Online Stock Span
// let count =0
// class StockSpanner{
//     constructor(){
//         this.stack = [];
//     }
//     next(val){
//         count=0
//         this.stack.push(val)
//         let i=this.stack.length-1
//         while (this.stack.length>0&&val>=this.stack[i]) {
//             count++
//             i--
//         }
//         return count


         
//     }
// }
// let obj=new StockSpanner()

// console.log(obj.next(100))
// console.log(obj.next(80))
// console.log(obj.next(60))
// console.log(obj.next(70))
// console.log(obj.next(60))
// console.log(obj.next(75))
// console.log(obj.next(85))
// **************************************************
// 84. Largest Rectangle in Histogram
// let h=[2,2,1,3,4,1,2]//2
// let hStack=[]
// let pStack=[]
// let area=0
// let lastPos=0
// let maxArea=0
// for(let i=0; i<h.length; i++) {
//     lastPos=h.length
//     while(hStack.length>0&&h[i]<hStack[hStack.length-1]) {
//         lastPos=pStack[pStack.length-1]
//         area=(i-pStack.pop())*hStack.pop()
//         maxArea=Math.max(area,maxArea)
//     } if(hStack.length===0||h[i]>hStack[hStack.length-1]){
//         hStack.push(h[i])
//       pStack.push(Math.min(i,lastPos))  
        
//     }
// }
// while (hStack.length) {
//     area=(h.length-pStack.pop())*hStack.pop()
//     maxArea=Math.max(area,maxArea)
// }
// **********************************************
// Create a class Queue and implement the following operations to create a Queue from scratch 



// 1.Enqueue
// 2.Dequeue
// 3.is_empty
// 4.get_first_element - element present in the front of the Queue from scratch.

// class Queue{
//     constructor(){
//         this.storage=[]
//     }
//     enqueue(val){
//         this.storage.push(val)
//     }
//     dequeue(){
//         this.storage.shift()
//     }
//     is_empty(){
//         return !this.storage.length
//     }
//     get_first_element(){
//         return this.storage[0]
//     }
// }
// let obj=new Queue()
// obj.enqueue(10)
// obj.enqueue(20)
// obj.enqueue(30)
// obj.dequeue()
// console.log(obj.is_empty())
// console.log(obj.get_first_element())
// obj.dequeue()
// obj.dequeue()
// console.log(obj.is_empty())
// *******************************
// 622. Design Circular Queue or below method
// class MyCircularQueue{
//     constructor(k){
//         this.storage=[]
//         this.size=k
//     }
//     enqueue(val){
//         if (this.storage.length<this.size) {
//             this.storage.push(val)
//         return true
//         }
//         return false   
//     }
//     dequeue(){
//         if (this.storage.length) {
//             this.storage.shift()
//             return true
//         }
//         return false
//     }
//     front(){
//         if (this.storage.length) {
//             return this.storage[0]
//         }return -1
        
//     }
//     rear(){
//         if (this.storage.length) {
//             return this.storage[this.storage.length-1]
//         }
//         return -1
//     }
//     isFull(){
//         if (this.storage.length===this.size) {
//             return true
//         }
//         return false
//     }
//     is_empty(){
//         return !this.storage.length
//     }
// }
// let q=new MyCircularQueue(3)
// console.log(q.enqueue(10))
// console.log(q.enqueue(20))
// console.log(q.enqueue(30))
// console.log(q.enqueue(40))
// console.log(q.rear())
// console.log(q.isFull())
// console.log(q.dequeue())
// console.log(q.enqueue(40))
// console.log(q.rear())
// *********************************************
// class MyCircularQueue{
//     constructor(k){
//         this.capacity=k
//         this.arr=new Array(k).fill(null)
//         this.head=0
//         this.tail=0
//     }
//     enqueue(val){
//         if (this.isFull()) {
//             return false
//         }
//         this.arr[this.tail]=val
//         this.tail=(this.tail+1)%this.capacity
//         return true
//     }
//     dequeue(){
//         if (this.isEmpty()) {
//             return false
//         }
//         this.arr[this.head]=null
//         this.head=(this.head+1)%this.capacity
//         return true
//     }
//     front(){
//         if (this.isEmpty()) {
//             return -1
//         }
//         return this.arr[this.head]
//     }
//     rear(){
//         if (this.isEmpty()) {
//             return -1
//         }
//         return this.arr[(this.tail+this.capacity-1)%this.capacity]
//     }
//     isFull(){
//         return this.head==this.tail&&this.arr[this.head]!==null
//     }
//     isEmpty(){ return this.head==this.tail&&this.arr[this.head]===null}
// }
// let q=new MyCircularQueue(3)
// q.enqueue(10)
// q.enqueue(20)
// console.log(q.rear())
// ************************************************************************************************
// 232. Implement Queue using Stacks

// class  Queue{
//     constructor(){
//         this.pushStack=[]
//         this.popStack=[]
//     }
//     push(x){
//         this.pushStack.push(x)
//     }
//     pop(){
//         if (!this.popStack.length) {
//             while (this.pushStack.length) {
//                 this.popStack.push(this.pushStack.pop())
//             }
//         }
//         return this.popStack.pop()
//     }
//     peek(){
//         if (!this.popStack.length) {
//             while (this.pushStack.length) {
//                 this.popStack.push(this.pushStack.pop())
//             }
//         }
//         return this.popStack[this.popStack.length-1]
//     }
//     empty(){
//         return !(this.popStack.length||this.pushStack.length) 
//     }
// }
// let obj=new Queue()
// obj.push(1)
// obj.push(2)
// obj.push(3)
// console.log(obj.peek())
// console.log(obj.empty())
// console.log(obj.pop())
// console.log(obj.peek())
// obj.push(4)
// obj.push(5)
// console.log(obj.pop())
// console.log(obj.peek())
// console.log(obj.pop())
// console.log(obj.pop())
// console.log(obj.pop())
// console.log(obj.pop())
// *******************************************
// 225. Implement Stack using Queues
// class Stack{
//     constructor(){
//         this.storage=[]
//         this.temp=[]
//     }
//     push(val){
//         this.storage.push(val)
//     }
//     pop() {
//         while (this.storage.length>1) {
//             this.temp.push(this.storage.shift())
//         }
//         let val=this.storage.pop()
//         this.storage=this.temp
//         this.temp=[]
//         return val
//     }
//     top(){
//         return this.storage[this.storage.length-1]
//     }
//     empty(){
//         return !this.storage.length
//     }
    
// }
// let obj=new Stack()
// obj.push(10)
// obj.push(20)
// console.log(obj.top())
// console.log(obj.pop())
// console.log(obj.empty())
// console.log(obj.pop())
// console.log(obj.empty())
// let a={a:1}
// *****************************************
// 387. First Unique Character in a String
// let s = "aass"
// function firstUniqChar(s) {
//     let map={}
//     for (const char of s) {
//         if (map[char]===undefined) {
//             map[char]=1
//         }else{
//             map[char]++
//         }
//     }
    
//     for (let i=0;i<s.length;i++){
//         if (map[s.charAt(i)]===1) {
//             return i
//         }
        
//     }
//     return -1
// }
// ******************************************
// First non-repeating character in a stream of characters

// let solve = function(A){
//     let obj = {};
//     let queue = [];
//     let res = ""
//     for(let i = 0; i < A.length; i++) {
//         if(obj[A[i]]) {
//             obj[A[i]]++;
//         } else {
//             obj[A[i]] = 1;
//         };
//         queue.push(A[i]);
//        while(queue.length && obj[queue[0]] > 1) {
//            queue.shift();
//        };
//        let curr = queue.length ? queue[0] : "#";
//        res = res + curr
//     }
   
//    return res
// }
// let a="abcabc"
// let obj={}
// let queue=[]
// let res=``
// for(let i=0;i<a.length;i++){
//     if (obj[a[i]]) {
//         obj[a[i]]++
//     }else{
//         obj[a[i]]=1
//     }
//     queue.push(a[i])
//     while (obj[queue[0]]>1) {
//         queue.shift()
//     }
//     let curr=queue.length? queue[0]:`#`
//  res+=curr
// }
// ********************************
// 239. Sliding Window Maximum
// let nums = [7,2,4],  k = 2
// let deque =[]
// let res=[]
// for(let i=0;i<nums.length;i++){
//     while (deque[deque.length-1]<nums[i]) {
//         deque.pop()
//     }

//    deque.push(nums[i])
//    if (i>=k-1) {
//        res.push(deque[0])
//        if (nums[i-k+1]===deque[0]) {
//            deque.shift()
//        }
//    }
// }
// **********************************************
// 209. Minimum Size Subarray Sum
// let  nums = [2,3,1,2,4,3]
// let windowStart =0
// let minLength=Number.MAX_SAFE_INTEGER
// let curSum=0
// let s= target=7
// for(let windowEnd=0;windowEnd<nums.length;windowEnd++){
//     curSum+=nums[windowEnd]
//     while (curSum>=target) {
//         minLength=Math.min(minLength,windowEnd-windowStart+1)
//         curSum-=nums[windowStart]
//         windowStart++
//     }
    
// }
// minLength===Number.MAX_SAFE_INTEGER?0:minLength
// ********************************
// 862. Shortest Subarray with Sum at Least K
// let nums = [1,2], k = 4
// function shortestSubarray(nums,k) {
//     let a=nums
//     let sum=[];
// sum[0]=0
// let min=Number.MAX_SAFE_INTEGER
// let deque=[]
// for (let i=0;i<a.length;i++){
//     sum[i+1]=sum[i]+a[i]
// }
// for(let i=0;i<sum.length;i++){
//     while (deque.length&&sum[i]<=sum[deque[deque.length-1]]) {
//         deque.pop()
//     }
//     while (deque.length&&sum[i]-sum[deque[0]]>=k) {
//         min=Math.min(min,i-deque.shift())
//     }
//     deque.push(i)
// }
// return min===Number.MAX_SAFE_INTEGER?-1:min
// }