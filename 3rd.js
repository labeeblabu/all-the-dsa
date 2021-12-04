var MinStack = function() {
    this.item=[]
        this.count=0
        this.min=0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let element=val
    this.item[this.count]=element
        this.count++;
        console.log(`${element} is added to position ${this.count-1}` ) 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let deleted=this.item[this.count-1]
       console.log(`${deleted}removed`)
       this.count--; 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    console.log(`top element is ${this.item[this.count-1]}`)
        return (this.item[this.count-1])
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    for(let i=0; i<=this.count-1;i++){
            if (this.item[i]<=this.min) {
                this.min=this.item[i]
            }
        }console.log(this.min)
        return(this.min)
};
let a=[]