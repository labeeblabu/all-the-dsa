// 1356. Sort Integers by The Number of 1 Bits
// let a=[1111,7644,1107,6978,8742,1,7403,7694,9193,4401,377,8641,5311,624,3554,6631]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length-1-i;j++){

//         if (a[j]>=a[j+1]) {
//             [a[j], a[j + 1]] = [a[j + 1], a[j]]



//         }
//     }
// }
// console.log(a)
// let b=[]
// for(let i = 0; i<a.length; i++) {
//     let n=a[i];

//     let count=0
//     let res=0
//     let temp=n
//     while (temp>=01) {
//         if ((temp&1)===1) {
//             count++

//         }
//        temp=temp>>1
//     }
//     b[i]=count
//     document.writeln(count)
//     document.write(`<br>`)

//     // console.log(res)
// }
// console.log(b)

// for(let i=0;i<b.length;i++){
//     for(let j=0;j<b.length-1-i;j++){

//         if (b[j]>=b[j+1]) {
//             [a[j], a[j + 1]] = [a[j + 1], a[j]];
//             [b[j], b[j + 1]] = [b[j + 1], b[j]];



//         }
//     }
// }


// console.log(b)
// console.log(a)
// ********************************
// 898. Bitwise ORs of Subarrays
// let arr = [1,2,4]
// let temp=0
// let a=[]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         temp=0
//         for (let k = i; k <= j; k++) {
//             document.write(`${arr[k]}`)
//             temp=temp|arr[k]//temp=temp|arr[k]
//         }document.write(`<br>`)
//         a.push(temp)
//     }
// }
// console.log([...new Set(a)].length)
// **************************************
// 201. Bitwise AND of Numbers Range
// let l=0
// let r=0
// let count=0
// let res=0
// if (l===r) {
// res=l    
// }

// while (l!==r) {
//    l= l>>1
//    r= r>>1
//    count++
//    if (l===r) {
//        res=l
//    }
// }


//     res=res<<count

// *************************************
// console.log(res)
// let a=[6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6]
// let j=a.length-1

// for(let i=0;i<a.length;i++){

//         if (a[i]===6) {
//             if(a[j]===6 &&j>i){j--}
//             [a[j],a[i]]=[a[i],a[j]]

//         }


// }
// console.log(a)
// let a=01
// let n=10
// for(let i=n/2;i<=n;i++){
//     for(let j=2;j<=n;j=j*2){
//         a=a+i+j
//         document.write(`*`)
//     } 

//     document.write(`<br>`)
// }
// **************************************
// let a=[1,3,5]
// let sum=0
// for(let i=0;i<a.length;i++){

//     for(let j=0;j<a.length;j++){
//         document.write(`i${a[i]}`)
//         document.write(`${a[j]}`)
//         if (a[i]!==a[j]) {
//             sum+=(a[i]&a[j])
//         }
//         document.write(` `)

//         document.write(`{sum}`)
//         document.write(` `)
//     }

//     document.write(`<br>`)
// }
// document.write(`${sum}`)
// while (a[i]>0&&a[j]>0) {

// }
// if (a[i]&1!==a[j]&1) {
//     count++
// }
// a[i]=a[i]>>1
// a[j]=a[j]>>1
// let count =0
// a=3
// b=5
// while (a>0||b>0) {
//     if ((a&1)!==(b&1)) {
//         count++
//     }
// a=a>>1
// b=b>>1
// }
// console.log(count)
// module.exports = { 
// 	//param A : array of integers
// 	//return an integer
// 	cntBits : function(A){
//         var res = 0;
//         for (var i = 0; i < 31; i++) {
//             var cnt1 = 0;
//             var cnt0 = 0;
//             for (var j = 0; j < A.length; j++) {
//                 if (A[j] & (1 << i)) {
//                     cnt1++;
//                 } else {
//                     cnt0++;
//                 }
//             }
//             res += 2 * cnt1 * cnt0;
//             res = res % 1000000007;
//         }
//         return res;
// 	}
// };
// *******************************************************
// Different Bits Sum Pair Wise
// let a=[1,3,5]
// let ans=0

// let count0=0
// let count1=0
// for(let i=0;i<31;i++){
//     count0=0
//     count1=0
//     for(let j=0;j<a.length;j++){
//         if ((a[j]&(1<<i))===0) {
//             count0++
//         }else{
//             count1++
//         }
//     }ans+=2*count1*count0
//     ans%=1000000007
// }
// console.log(ans)
// **********************************
// const circle = {
//     radius: 1,
//     location: {
//         x: 0,
//         y: 0
//     },
//     draw: function () {
//         console.log(`draw`)
//     }
// }
// circle.draw()
// ****************************
// factories function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log(`draw`)
//         }
//     }
// }
// let circle = createCircle()
// circle.draw()
// ********************************
// constructors
//  function Circle(radius) {
//      this.radius = radius
//      this.draw=function () {
//          console.log(`draw`)
//      }
//  }
//  let object=new Circle(2)
// object.draw()
// obj=Circle.call(2)
// *************************************
// 
// *****************************
// adding /removing properties
// let car = {
//     wheel: 4,
//     engine: 1,
//     ecu: 1
// }
// car.tyre =4
// delete car.wheel
// delete car.ecu
// console.log(car)
// **************************************
// enumeraitions or iterations
// let car = {
//     wheel: 1,
//     tyre: 4,
//     engine: 1,
//     ecu: 2,
//     draw:function(){}
// }
// for (const key in car) {
//     if (typeof car[key] == `function`) {
//         console.log(key,car[key])
//     }

// }
// if (`tyre` in car) {
//     console.log(`yes`)
// }
// ********************************
// Abstraction
// function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation ={x: 0, y: 0}
//     this.computeOptimumLocation = function(){
//         //.........
//     }
//     this.draw = function () {
//         this.computeOptimumLocation()
//         console.log(`draw`)
//     }

// }
// let circle = new Circle(1)
// circle.
// ********************************
// private properties and methods:
// function Circle(radius) {
//     let color = `red`
//    let defaultLocation ={x: 0, y: 0}//private variables
//    this.radius = radius;
//    this.round=0
//    let computeOptimumLocation = function(){//PRIVATE methods
//         //.........
//     }

//     this.draw = function () {
//        computeOptimumLocation()
//         console.log(`draw`)

//     }
//     Object.defineProperty(this,`defaultLocation`,{
//         get: function(){return defaultLocation},
//         set: function(value) {

//             defaultLocation =value
//         }
//     })

// }
// let circle = new Circle(1)

// **********************************
// Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'.
//  Use Constructors to Assign the value of roll_no as '2' and that of name as "John" by creating 
//  an object of the class Student.

//  class Student {
//     constructor(name,roll_no){
//         this.name = name;
//         this.roll_no=roll_no;
//     }
//  }
//  let obj=new Student(`john`,2);
// ***************************************************
// Write a program to print the area and perimeter of a
//  triangle object having sides of 3, 4 and 5 units by creating a class 
//  named 'Triangle' and having two functions calculate_area and 
//  calculate_perimeter and two constructors(default- all sides as 0 and parameterized constructor where you assign (3,4,5)) .
// class Triangle{

//     constructor(side1=0,side2=0,side3=0){
//         this.side1=side1
//         this.side2=side2
//         this.side3=side3
//     }
//    calculate_perimeter(){
//        return (this.side1+this.side2+this.side3)
//    }
//    calculate_area(){
//        let s=(this.side1+this.side2+this.side3)/2
//        let a=this.side1
//        let b=this.side2
//        let c=this.side3
//        return (Math.sqrt(s*(s-a)*(s-b)*(s-c)))
//    }
// }
// let triangle=new Triangle()
// let triangle1=new Triangle(3,4,5)
// ****************************************************
// Write a program that would print the information (name, year of joining, salary, address) of three employees by creating a class named 'Employee' and inside the class there is a function print_details printing all the details of the employee .The output should be as follows:

// Name        Year of joining        Address

// Robert            1994                64C- WallsStreat

// Sam                2000                68D- WallsStreat

// John                1999                26B- WallsStreat
// class Employee {
//     constructor(name, year, salary, address){
//         this.name=name
//         this.year=year
//         this.salary=salary
//         this.address=address
//     }
//     print_details(){

//        return console.log(this.name,this.year,this.salary,this.address)
//     }
// }
// let emp1=new Employee(`Robert`,1994,10000,`64c-wallsStreat`)
// let emp2=new Employee(`sam`,2000,10000,`68D-wallsStreat`)
// let emp3=new Employee(`john`,1999,10000,`26B-wallsStreat`)
// console.log(`Name   year of joining  salary  address`)
// emp1.print_details()
// emp2.print_details()
// emp3.print_details()
// *****************************************
// Write a program by creating an 'Employee' class having the following methods and print the final salary.

// 1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter

// 2 - 'AddSal()' which adds $10 to salary of the employee if it is less than $500.

// 3 - 'AddWork()' which adds $5 to salary of employee if the number of hours of work per day is more than 6 hours.
// class Employee {
//     constructor(salary=0, numberOfHours=0){
//         this.salary=salary;
//         this.numberOfHours=numberOfHours;
//     }
//     getInfo(){
//         return `salry: ${this.salary} numberOfHours: ${this.numberOfHours}`
//     }
//     addSal() {
//         if (this.salary<500) {
//             this.salary+=10
//         }

//      }
//      addWork() {
//          if (this.numberOfHours>6) {
//             this.salary+=5 
//          }
//      }


// }
// let emp1 = new Employee(490,7)
// let emp2 = new Employee(400,2)
// emp1.getInfo()
// emp1.addSal()
// emp1.addWork()
// **************************************
// static
// class college{
//   collegeName=`abc`

//     constructor(cgpa){
//         this.cgpa=cgpa

//     }
//      studentDetails(){
//         console.log(`hi`)
//         console.log(this.collegeName,this.cgpa)

//     }

// }
// let std=new college(7)
// *********************************
// static methods
// class Car{
//     constructor(price){
//         this.price=price
//     }
//     static comparePrice(car1, car2){
//         return(car1.price-car2.price )
//     }
//     getPrice(){
//         return this.price
//     }
// }
// const car1 = new Car(100)
// const car2= new Car(110)
// **********************************
// static with child or extends
// class Car{
//     constructor(price){
//         this.price=price

//     }
//     static carForSale(car){
//         return `car for sale ${car.price}`
//     }

// }
// class Toyota extends Car{
//     constructor(price){
//         super(price)
//     }
//     static carForSale(car){
//         return `toyota ${super.carForSale(car)}`
//     }
// }
// let camry=new Car(100)
// let innova=new Toyota(110)
// ***************************
// class Count_objects{
//     static count=0
//    Count_objects(){
//        count++
//    }


// }
// let obj=new Count_objects(2)
// let obj1=new Count_objects(2)
// let obj3=new Count_objects(2)
// console.log(Count_objects.count)

// ****************************
// Write a program to create a class count_objects and calculate the number of objects that has been created in realtime.



// Use the help of hints if there are any confusion
// let count = 0;
// class Count_objects{

//     constructor(price){
//         this.price=price
//         count++
//     }
//     static count(){

//         return count
//     }

// }
// let obj=new Count_objects()
// let obj1=new Count_objects()
// let obj3=new Count_objects()
// console.log(Count_objects.count())
// ***********************
// Create a class "PARENT" with a method that prints "This is parent class" and its Child class "CHILD" with a method 
// that prints "This is child class". Now, create an object for each of the class and call

// 1 - method of parent class by object of parent class

// 2 - method of child class by object of child class

// 3 - method of parent class by object of child class


// class Parents {
//     constructor(x) {
//         this.x = x

//     }
//     pMethod() {
//         console.log(`this is parent class`)
//     }

// }
// class Child extends Parents {
//     constructor(x) {
//         super(x)

//     }
//     cMethod() {
//         console.log(`this is child class`)
//     }
// }
// let objp = new Parents()
// let objc = new Child()
// objp.pMethod()
// objc.cMethod()
// objc.pMethod()
// *****************************************
// Create a class named 'Member' having the following members:

// Data Attributes

// 1 - Name

// 2 - Age

// 3 - Phone number

// 4 - Address

// 5 - Salary

// It also has a method named 'printSalary' which prints the salary of the members.

// Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' 
// and 'Manager' classes have data members 'specialization' and 'department' respectively. Now,
//  assign name, age, phone number, address and salary to an employee and a manager by making an 
//  object of both of these classes and print the same.
// class Member{
//     constructor(name,age,phNumber,address,salary){
//         this.name= name
//         this.age=age
//         this.phNumber=phNumber
//         this.address=address
//         this.salary=salary
//     }
//     printSalary(){
//         console.log(this.salary)
//     }
// }
// class Employee extends Member{
//     constructor(name,age,phNumber,address,salary,specialization){
//         super(name,age,phNumber,address,salary)
//         this.specialization=specialization
//     }
// }
// class Manager extends Member{
//     constructor(name,age,phNumber,address,salary,department){
//         super(name,age,phNumber,address,salary)
//         this.department=department
//     }
// }
// let emp1= new Employee(`sabin`,25,12345,`kochi`,10000,`sales`)
// let emp2= new Manager(`sajin`,38,12345,`calicut`,30000,`chief admin`)
// ************************************************
// Create a class named 'Shape' with a method to print "This is This is shape".
//  Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape class, 
//  both having a method to print "This is rectangular shape" and "This is circular shape" respectively.
//   Create a subclass 'Square' of 'Rectangle' having a method to print "Square is a rectangle".
// class Shape {

//     shapeMethod() {
//         console.log("this is shape!!!")
//     }
// }
// class Rectangle extends Shape {

//     rectangleMethod() {
//         console.log("this is a rectangle!!!")
//     }
// }
// class Circle extends Shape {

//     CircleMethod() {
//         console.log(`this is circle!!!`)
//     }
// }
// class Square extends Rectangle {

//     squareMethod() {
//         console.log("square is a rectangle!!!")
//     }
// }
// let obj = new Shape()
// let objc= new Circle()
// let objsq = new Square()
// obj.shapeMethod()
// objc.CircleMethod()
// objsq.shapeMethod()
// objsq.rectangleMethod()
// objsq.squareMethod()
// ***********************************************
// 704. Binary Search
// let a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,20]
// function search(a,find) {
//     let l=0 ,h=a.length-1;

//   while (l<=h) {
//       mid= Math.floor((l+h)/2) 
//       if (a[mid]===find) {
//           return(mid)
//       }else if(a[mid]>find) {
//           h=mid-1
//       }else {
//           l=mid+1
//       }

//   }
//   return -1
// }
// ************************************
// 162. Find Peak Element
// 
// 33. Search in Rotated Sorted Array

// let nums = [5,1,3]



// const search = function (nums,target) {
//     let l = 0,
//         h = nums.length-1,
//         mid = 0;

//         while (l <= h) {
//             mid = Math.floor((l + h) / 2)
//             if (nums[mid] === target) {
//                 return mid;
//             } 
//             else if (nums[mid] >= nums[l]) {
//                 if (nums[l] <= target && target <= nums[mid]) {
//                     h = mid - 1
//                 } else {
//                     l = mid + 1
//                 }
//             } 
//             else {
//                 if (nums[mid] <= target && target <= nums[h]) {
//                     l = mid + 1
//                 } else {
//                     h = mid - 1
//                 }

//             }
//         }
//     return -1
// }
// *******************************
// Maps in javascript
// let myMap = new Map([
//     [`a1`, `hello`],
//     [`a2`, 123],
//     [`a3`,28],
//     [`a4`,28],
//     [21],
//     [2,0]
// ])
// myMap.set(`a4`,`hi`)
// for (const values of myMap.values()) {
//     console.log(values)
// }
// for (const keys of myMap.keys()) {
//     console.log(keys)
// }
// for (const [key,values] of myMap) {
//     console.log(key,values)
// }
// *****************************
// set in javascript
// let mySet=new Set([1,1,2])
// mySet.add({
//     name:`dom`
// })
// mySet.add({
//     name:`dom`
// })
// mySet.add(`asd`)
// mySet.add(`Asd`)
// *********************************************
// 1. Two Sum using Map
// let a=[2,11,7,15]
// let target=9
// let myMap=new Map()
// function twoSum(a,target) {
//     for(let i=0; i<a.length;i++){
//         if (myMap.has(target-a[i]) ) {
//             return [myMap.get(target-a[i]) ,i]
//         }
//         else{
//             myMap.set(a[i],i)
//         }
//     }
    
// }
// **************************************
// let mySet=new Set([`a`,{a:1,b:2},1,2,3,4,5])
// for (const iterator of mySet) {
//     console.log(iterator)
// }

// let a=[...mySet]