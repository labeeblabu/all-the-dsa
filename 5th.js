// creating linked list and basic operations
class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    //Insert first node
    insertFirst(data){
        this.head=new Node(data,this.head)
        this.size++;
    }
    //insert Last Node
    insertLast(data){
        let node=new Node(data)
        if (!this.head) {
            this.head=node
        }else{
           let current=this.head
            while (current.next) {
                current=current.next
            }
            current.next=node
        }
        this.size++;
    }
    //Insert at Index
    insertAt(index,data){
        let node=new Node(data)
        let count=0
        let current=this.head
        let previous;
        if (index>0&&index>this.size) {
            return
        }
        if (index===0) {
            this.insertFirst(data)
            return
        }
        while (count<index) {
            previous=current
            count++;
            current=current.next
        }
        previous.next=node
        node.next=current
        this.size++
    }

    //get at index
    getAt(index) {
        let current = this.head
        let count=0
        while (current) {
            if (index===count) {
                console.log(current.data)
            }
            count++
            current=current.next
        }
    }
    //remove at index
    removeAt(index) {
        let current = this.head
        let count=0,previous;
        if (index>this.size) {
            return
        }
        if (index===0) {
            this.head=current.next
        }else{
            while (count<index) {
                previous=current
                count++
                current=current.next
            }
            previous.next=current.next
        }
        this.size--

    }
    //print list data
    printListData(){
        let current=this.head
        while (current) {
            console.log(current.data)
            current=current.next
        }
    }
    //clear list
    clearList(){
        this.head=null
        this.size=0
    }
}
let li=new LinkedList();
let li2=new LinkedList();
li.insertFirst(10)
li.insertFirst(20)
li.insertFirst(30)
li.insertLast(40)
li.insertLast(50)
li.insertAt(1,2)
li.insertAt(1,3)
li.insertAt(0,`first`)
li.insertAt(1,`fsirst`)
// li.printListData()
// li.getAt(0)
li.removeAt(0)
li.removeAt(0)

li.printListData()

li2.insertFirst(80)
// *****************************
// class Node{
//     constructor(data,next){
//         this.data = data;
//         this.next =next||null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//     }
//     addToLast(data){

//         let node=new Node(data)
//         if (!this.head) {
//             this.head=node;
//         }else{
//             let temp=this.head;
//             while (temp.next) {
//                 temp=temp.next
//             }
//             temp.next=node
//         }

//     }

// }
// //reverse a linked list
// function reverse(head){

//     let p=head
//     let q=p.next
//     if (q==null)
//     return p
//    q= reverse(q)
//    p.next.next=p
//    p.next=null
//    return q

// }
// //sorted mergege of two linked lists
// function sortedMerge(l1,l2){
//     let dummy=new Node(0)
//     let tail=dummy
//     while(true){
//         if (l1==null) {
//             tail.next=l2
//             break;
//         }
//         if (l2==null) {
//             tail.next=l1
//             break;
//         }
//         if (l1.data<=l2.data) {
//             tail.next=l1
//             l1=l1.next
//         }else{
//             tail.next=l2
//             l2=l2.next
//         }

//         tail=tail.next
//     }
//     return dummy.next

// }
// let list1=new LinkedList();
// let list2=new LinkedList();
// list1.addToLast(5)
// list1.addToLast(10)
// list1.addToLast(15)
// list2.addToLast(2)
// list2.addToLast(3)
// list2.addToLast(20)
// **********************************************
// 203. Remove Linked List Elements
// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//     }
//     addToLast(data){
//         if (!this.head) {
//         this.head=new Node(data,this.head)
//     }else{
//         let temp=this.head
//         while (temp.next) {
//             temp=temp.next
//         }
//         temp.next=new Node(data)
//     }

//     }
// }
// var removeElements = function(head, val) {
//     let p=head
//     while(head&&(head.data==val)){

//         head=head.next
//     }

// while (p&&p.next) {

// if (p.next.data==val) {

// p.next=p.next.next
// }else{p=p.next}

// }
// return head

// };

// let li=new LinkedList()
// li.addToLast(1)
// li.addToLast(2)
// li.addToLast(6)
// li.addToLast(3)
// li.addToLast(4)
// li.addToLast(5)
// li.addToLast(6)
// console.log(removeElements(li.head,6))
// **************************************
// 237. Delete Node in a Linked List
// var deleteNode = function(node) {
//     node.val=node.next.val
//     node.next=node.next.next
// };
// ***************************************
// 160. Intersection of Two Linked Lists
// var getIntersectionNode = function(headA, headB) {
//     let p=headA
//     let q=headB
//     let l1=0
//     let l2=0
//     while (p.next) {
//         l1++
//         p=p.next
//     }
//     while (q.next) {
//         l2++
//         q=q.next
//     }
//     while(l1>l2){
//         headA=headA.next
//         l2++
//     }
//     while(l1<l2){
//         headB=headB.next
//         l1++
//     }
//     while(headA!==headB){
//         headA=headA.next
//         headB=headB.next
//     }
//             return headA
// }
// ************************************
// 206. Reverse Linked List
// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head=null;
//     }
//     addToLast(data){
//         if (!this.head) {
//             this.head=new Node(data);
//         }else{
//             let p=this.head;
//             while (p.next) {
//                 p=p.next;
//             }
//             p.next=new Node(data)
//         }
//     }
// }
// let list=new LinkedList()
// list.addToLast(1)
// list.addToLast(2)
// list.addToLast(3)
// list.addToLast(4)
// function reverse(head) {
//     let p=head
//     let prev=null
//     let next;
//     while (p) {
//         next=p.next
//         p.next=prev
//         prev=p
//         p=next
//     }
//     return prev
// ******************************************
// 234. Palindrome Linked List
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addToLast(data) {
//         if (!this.head) {
//             this.head = new Node(data)
//         } else {
//             let temp = this.head
//             while (temp.next) {
//                 temp = temp.next
//             }
//             temp.next = new Node(data)
//         }
//     }
// }

// function isPalindrome(head) {
//     let p=head
//     let q=head

//     while (p!==null&&p.next!==null) {
//         p=p.next.next
//         q=q.next

//     }
//     if(p!==null){
//         q=q.next
//     }

//      q= reverse(q)
//     p=head
//     while (q!==null) {
//         if (p.val!==q.val) {
//             return false;
//          }
//         p=p.next
//         q=q.next
//     }
//     return true

// }
//  function reverse(head) {
//     let p=head
//     let prev=null
//     let next;
//     while (p) {
//         next=p.next
//         p.next=prev
//         prev=p
//         p=next
//     }
//     return prev
// }

// let li=new LinkedList();
// li.addToLast(1)
// li.addToLast(2)
// ******************************
// 61. Rotate List
// function rotateRight(head,k) {
//     if(!head||!head.next){return head}
//     let q=head
//     let len=1
//     while (q.next) {
//         q=q.next
//         len++
//     }
//     q.next=head
//     k=k%len
//     k=len-k
//     while (k>0) {
//         q=q.next
//         k--
//     }
//     head=q.next
//     q.next=null
//     return head
// }
// ******************************
// 21. Merge Two Sorted Lists
// var mergeTwoLists = function(l1, l2) {
//     if(!l1){return l2}
//     if(!l2){return l1}
//     let dummy=new ListNode()
//     let head=dummy
//     while(l1&&l2){
//         if(l1.val>l2.val){
//             dummy.next=l2
//             l2=l2.next
//         }else{
//             dummy.next=l1
//             l1=l1.next
//         }
//         dummy=dummy.next
//     }
//     if(!l1){
//         dummy.next=l2
//     }else{
//         dummy.next=l1
//     }
//     return head.next
// };
// ********************************
// 2. Add Two Numbers
// var addTwoNumbers = function(l1, l2) {
//     let dummy=new ListNode()
//     let temp=dummy

//     let carry=0
//     while (l1||l2 ||carry) {
//         let sum=0
//         if (l1) {
//             sum+=l1.val
//             l1=l1.next
//         }if (l2) {
//             sum+=l2.val
//             l2=l2.next
//         }
//         sum+=carry
//         carry=Math.floor(sum/10)
//         temp.next=new ListNode(sum%10)
//         temp=temp.next

//     }
//     return dummy.next
// };
// ************************************
// 142. Linked List Cycle II
// var detectCycle = function (head) {
//   let p = head;
//   let q = head;
//   while (p && q && q.next) {
//     p = p.next;
//     q = q.next.next;
//     if (p == q) {
//       while (p != head) {
//         p = p.next;
//         head = head.next;
//       }
//       return head;
//     }
//   }
//   return null;
// };
// ******************************
// 19. Remove Nth Node From End of List
// var removeNthFromEnd = function (head, n) {
//     let p = head;
//     let q = head;
//     let prev=null
//     let cnt = 1;
//     while (cnt <= n - 1) {
//         q = q.next;
//         cnt++;
//     }
//     while (q.next) {
//         prev=p
//         p = p.next;
//         q = q.next;
//     }
//     prev.next=q
//     p.next=null;
//     return head
    
// };
// ****************************************************************
// Write a program to convert the following program into its recursive format.
// Iterative Code :-
// int sum =0;

// int n=5;

// for(int i=0;int <10;i=i+2)

// {

// if(i==5)

// {

// break;

// }

// sum =sum+i;

// }
// System.out.println(sum);
// Convert it into recursive format and copy paste your answer here
// let n=5;
// let sum=0
// for(let i=0;i<10;i=i+2)

// {

// if(i==5)

// {

// break;

// }

// sum =sum+i;
// console.log(sum)

// }
// console.log(`iterative`,sum);
// // *************************************************
// let i=0;
// let sumr=0;
// function rec(i) {
//    if (i==5) {
//        return;
//    }
//     if (i>=10) {
//         return 0
//     }
//     sumr=i+rec(i+2)
    
//     return sumr
    
// }
// console.log(`recursive`,rec(i))
// ************************************************
// Write down the stack sequence(Given in comment) and what will be output .. Note- don't run it in your compiler :)
// public class MyClass {

//   public static void main(String args[]) {
//    System.out.println(count(1));
//   }
//   public static int count(int i)
//   {
//     if(i>5)
//     {
//  //Print the stack sequence
//       return 0;
//     }
//     else 
//     {
//       return i+2+count(i+1);
//     }
//   }
// }
// ************************************************************
// What will be the output (If the answer is INFINITY WRITE DOWN WHY):-
// public class MyClass {
//   public static void main(String args[]) {
//        System.out.println(count(1));
//   }
//   public static int count(int i)
//   {
//     if(i>5)
//     {
//       return 0;
//     }
//     else 
//     {
//       return i*count(i+1);
//     }
//   }

// }
// let i=1
// function count(i) {
//     if (i>5) {
//         return 0
//     }
//     else
//     {
//         return i*count(i+1)
//     }
// }
// ********************************************************
// output of recursion 1
// public class MyClass {

//     public static void main(String args[]) {
//              System.out.println(count(1));
    
//     }
//       public static int count(int i)
//       {
//         if(i==5)
//         {
//           return 0;
//         }
//         else 
//         {
//           return i+count(i+3);
//         }
//       }
//     }
// let i=1; 
// function count(i) {
//     if(i==5){
//         return 0;
//     }
//     else
//     {
//         return i+count(i+3)
//     }
// }
// *************************************
// output of recursion 3
// Write down the output of the following Question:-
// public class MyClass {
//   public static void main(String args[]) {
//    count(1);
//   }
//   public static void count(int i)
//   {
//     if(i==6)
//     {
//       return;
//     }
//     else 
//     {
//       System.out.print(i);
//       count(i+1);
//     }
//   }
// }
// let i=1
// function rec(i) {
//     if (i==6) {
//         return
//     }
//     else
//     {
//         console.log(i);
//         rec(i+1)
//     }
// }
// *******************************************
// output of recursion 4
// Write down the output of the following code :-
// public class MyClass {
//     public static void main(String args[]) {
//              count(1);  
//        }
//       public static void count(int i)
//       {
//         if(i==6)
//         {
//           return;
//        }
//         else 
//         {
//         count(i+1);
//   System.out.print(i);
//         }  
//     }
//     }
// let i=1
// function count(i) {
//     if (i==6) {
//         return
//     }else
//     {
        
//         count(i+1);
//         console.log(i)
//     }
   
   
// }
// ************************************
// output of recursion 5
// Write down the output of the following Code :-
// public class MyClass {
//   public static void main(String args[]) {
//    count(1);
//   }
//   public static void count(int i)
//   {
//     if(i==6)
//     {
//       System.out.println();
//       return;
//     }
//     else 
//     {
//       System.out.print(i);
//       count(i+1);
//       System.out.print(i);
//     }
//   }
// }
// let i=1
// function count(i) {
//     if(i==6){
//         return
//     }else{
//         console.log(i);
//     count(i+1)
//     console.log(i)
//     }    
// }
// ***********************************
// Multiples Of 5(Recursive)
// Write a question to to take an input n and print all the multiples of 5 less than n in a recursive way.
// example input n=30
// output 1 5 10 15 20 25
// let i=1;

// function count(i,n=50) {
//     if (i*5>=n) {
//         return;
//     }else{
//         if (i==1) {
//             console.log(i)
//         }
//           console.log(i*5)
//    count(i+1)
       
//     }
    
// }
// **************************************
// Sum Of N Natural Numbers (Recursive)
// Write a function which will take the input n from the user and return back an integer which will contain the sum of n natural number .
// Example input n=5
// return 1+2+3+4+5 = 15 will be returned back from the function
// let i=0;

// function rec(i,n) {
//     if (i>n) {
//         return 0
//     }
//     return i +rec(i+1,n)
// }
// *************************************
// Factorial In Recursion
// Write a program to write a function factorial which takes an input n and prints the factorial of the number in a recursive way
// Example :- n=5;
// Output = 1*2*3*4*5 = 120
// let i=1
// function rec(i,n) {
//     if (i>n) {
//         return 1
//     }
//     return i*rec(i+1,n)
// }
// **********************************************
// 509. Fibonacci Number
// var fib = function(n) {
//     if (n==0) { 
//         return 0
        
//     }
//     if (n==1) {
//         return 1
        
//     }
//     return fib(n-1) +fib(n-2)

// };
// *********************************************
// Permutation (Important)
// Write a recursive program to find all the permutations of a string and store it in a list or arraylist or vectors.
// Example:-
// Permutation for abc
// abc,acb, bac, bca, cab ,cba
// let str=`abc`
// let n=str.length-1
// var result=[]
// function permute(str,l,r) {
    
//     if (l==r) {
//         Array().push(str)
//     }else{
//         for (let i=l;i<=r;i++) {
//            str= swap(str,l,i)
//             permute(str,l+1,r)
//            str= swap(str,l,i)
//         }
//     }
//     return 
// }
// function swap(str,l,i) {
//     let array=str.split(``)
//     let temp=array[l]
//     array[l]=array[i]
//     array[i]=temp
    
//     return array.join('')
// }
// ***************************************
// Write a program to print all the subsequence of an array.
// All subsequence of an array [1,2,3]
// [1]
// [1,2]
// [1,2,3]
// [1,3]
// [2]
// [2,3]
// [3]
// (Solve the questions in your own compiler and then copy paste your code on your student dashboard and then click submit )
// function printSubseq(arr,index,sub) {
//     if (index==arr.length) {
//         if (sub.length!=0) {
//             console.log(sub)
//         }
//     }else
//     {
//         printSubseq(arr,index+1,sub)
//         printSubseq(arr,index+1,sub+arr[index])
//     }
//     return
    
// }
// arr=[1,2,3]
// printSubseq(arr,0,[])
// ************************************************
// Merge Sort (Important)
// 912. Sort an Array
// let arr = [ 12, 11, 13, 5, 6, 7 ];
// function sortArray(arr) {
//     function merge(arr,l,mid,r) {
//         let n1=mid-l+1
//         let n2=r-mid
//         let L=new Array(n1)
//         let R=new Array(n2)
//         for(let i=0;i<n1;i++){
//             L[i]=arr[l+i]
//         }
//         for(let j=0;j<n2;j++){
//             R[j]=arr[mid+1+j]
//         }
//         i=0
//         j=0
//        let k=l
//         while (i<n1&&j<n2) {
//             if (L[i]<R[j]) {
//                 arr[k]=L[i]
//                 i++
//             }else{
//                 arr[k]=R[j]
//                 j++
//             }
//             k++
//         }
//         while (i<n1) {
//             arr[k]=L[i]
//             i++
//             k++
//         }
//         while (j<n2) {
//             arr[k]=R[j]
//             j++
//             k++
//         }
//     }
//     function mergeSort(arr,l,r) {
//         if (l>=r) {
//             return
//         }
//         let mid=l+parseInt((r-l)/2)
//         mergeSort(arr,l,mid)
//         mergeSort(arr,mid+1,r)
//         merge(arr,l,mid,r)
//     }
    
//     // console.log(`before sort ${arr}`)
//     mergeSort(arr,0,arr.length-1)
//     // console.log(`after sort ${arr}`)
//     return arr
// }