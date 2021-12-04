//Implementation of tree structure
class Node{
    constructor(val){
        this.val=val
        this.right=null
        this.left=null
    }
}
class Tree{
    constructor(){
        this.root=null;
    }
     insert(val) {
         //check root is empty if it is empty then insert it
         if (!this.root) {
            this.root=new Node(val);
            return this
         }else {
            //now check whether elements in the children left or right
            //if it is empty then a new node is inserted with the val
            let current=this.root
            while (true) {
                //if val is same as current then do nothing
                if (val==current.val) {
                    return
                }
                //if val is less than current then
                if (val<current.val) {
                    //check whether any children are there in left
                    if (current.left==null) {
                        current.left=new Node(val)
                        return this
                    }else{
                        //if already an child is there then move the current position
                        current=current.left
                    }
                }else{

                        if (val>current.val) {
                            if (current.right==null) {
                                current.right=new Node(val)
                                return this
                            }else {
                                current=current.right
                            }
                        }

                }
            }

         }
    }
    depthFirstSearchIt() {
        let stack = [];
        let result = [];
        let currentNode = this.root;
        stack.push(this.root);

        while(stack.length > 0) {
            currentNode = stack.pop();

            // preorder traversal
            result.push(currentNode.val);
            if(currentNode.right) stack.push(currentNode.right);
            if(currentNode.left) stack.push(currentNode.left);
        }

        return result;
    }



}

let tree=new Tree()
console.log(tree)
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(2));
console.log(tree.insert(7));
console.log(tree.insert(7));
console.log(preOrder(tree.root))
console.log(tree.depthFirstSearchIt());
// *********************************************
// 144. Binary Tree Preorder Traversal
function preOrder(root) {
    let stack=[]
    stack.push(root)
    let result=[]
    while (stack.length){
        var node = stack.pop()
        result.push(node.val)
        console.log()
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }

    }
    return result

}
// *******************************************************
// 145. Binary Tree Postorder Traversal
var postorderTraversal = function(root) {
    if(!root)return []
    let result=[]
    let stack=[root]
    while(stack.length){
        const node=stack.pop()
        result.push(node.val)
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)

    }
    return result.reverse()
};
// *************************************
// 94. Binary Tree Inorder Traversal

var inorderTraversal = function(root) {
    let res=[]
    let stack=[]
    while(root||stack.length){
        if(root){
            stack.push(root)
            root=root.left
        }else{
            root=stack.pop()
            res.push(root.val)
            root=root.right
        }
    }
    return res
};
// *************************************
// 102. Binary Tree Level Order Traversal
// var levelOrder = function(root) {
//     if(!root) return []
//     let res=[]
//     let queue=[root]


//     while(queue.length){
//         let queueLength=queue.length,value=[]

//         for(let i=0;i<queueLength;i++){
//           let node=queue.shift()
//         value.push(node.val)
//         if(node.left) queue.push(node.left)
//         if(node.right) queue.push(node.right)
//         }
//         res.push(value)

//     }
//     console.log(res)
//     return res
// };
// *************************************
// 104. Maximum Depth of Binary Tree
// var maxDepth = function(root) {
//     if(root==null)return 0
//     return Math.max(maxDepth(root.left),maxDepth(root.right))+1
// };
// *************************************
// 617. Merge Two Binary Trees
// var mergeTrees = function(root1, root2) {
//     if(root1===null)return root2
//     if(root2===null)return root1
//     root1.val+=root2.val
//     root1.left=mergeTrees(root1.left,root2.left)
//     root1.right=mergeTrees(root1.right,root2.right)
//     return root1
// };
// **************************************
// 700. Search in a Binary Search Tree
// var searchBST = function(root, val) {
//     let res=null
//     function helper(node){
//         if(node===null)return
//         if(val==node.val){
//             res=node
//             return
//         }
//         if(val<node.val)helper(node.left)
//         if(val>node.val)helper(node.right)
//     }
//     helper(root)
//     return res
// };
// ********************************************
// 102. Binary Tree Level Order Traversal
// var levelOrder = function(root) {
//     if(!root) return []
//     let res=[]
//     let queue=[root]
    
    
//     while(queue.length){
//         let queueLength=queue.length,value=[]
        
//         for(let i=0;i<queueLength;i++){
//           let node=queue.shift()
//         value.push(node.val)
//         if(node.left) queue.push(node.left)
//         if(node.right) queue.push(node.right)
//         }
//         res.push(value)
        
//     }
//     console.log(res)
//     return res
// };
// **********************************************
// 1022. Sum of Root To Leaf Binary Numbers
// var sumRootToLeaf = function(root) {
//     binaries=[]
//     function traverse(node,str){
//         if(node==null)return
//        let binary=`${str}${node.val}`
//        if(node.left==null&&node.right==null){
//            binaries.push(binary)
//        }
//         traverse(node.left,binary)
//         traverse(node.right,binary)
//     }
//     traverse(root,``)
    
//     return binaries.reduce((sum,binary)=>{
//         sum+=parseInt(binary,2)
//         return sum},0)
// };
// **********************************************
// 404. Sum of Left Leaves
// var sumOfLeftLeaves = function(root) {
//     let sum=0
//     traverse(root,false)
//     return sum
    
//     function traverse(node,isLeft){
//         if(node==null)return
//         if(!node.left&&!node.right&&isLeft){
//             sum+=node.val
//         }
//         traverse(node.left,true)
//         traverse(node.right,false)
//     }
// };
// **********************************************
// 783. Minimum Distance Between BST Nodes
// var minDiffInBST = function(root) {
//     let totalMin=Infinity;
//     let prev=null
//     function inOrder(node){
//         if(node==null)return
//         inOrder(node.left)
//         if(prev){
//             totalMin=Math.min(totalMin,Math.abs(prev.val-node.val))    
//         }
//         prev=node
        
//         inOrder(node.right)
//     }
//     inOrder(root)
//     return totalMin
    
    
// };
// ************************************
// 124. Binary Tree Maximum Path Sum
// var maxPathSum = function(root) {
//     let sum=-Infinity
//     helper(root)
//     return sum
//     function helper(node){
//         if(!node)return 0
//         let left=Math.max(0,helper(node.left)) 
//         let right=Math.max(0,helper(node.right)) 
//         sum=Math.max(sum,node.val+left+right)
//         return node.val+Math.max(left,right)
//     }
// };
// ****************************************
// 199. Binary Tree Right Side View
// var rightSideView = function(root) {
//     let queue=[]
    
//     helper(root,0)
    
//     return queue
//     function helper(node,h){
//         if(!node)return
         
//         queue[h]=node.val
//         console.log(queue)
//         helper(node.left,h+1)
//        helper(node.right,h+1)
        
//     }
// };
// ***********************************
// 513. Find Bottom Left Tree Value
// var findBottomLeftValue = function(root) {
//     let leftMost=0
//     let maxLevel=0
//     helper(root,0)
//     return leftMost
//     function helper(node,level){
//         if(!node)return
//         if(level>=maxLevel){
//             maxLevel=level
//             leftMost=
//         }
//         helper(node.left,level+1)
//         helper(node.right,level+1)
//     }
// };
// *************************************
class Solution
{
    //Function to return a list of nodes visible from the top view 
    //from left to right in Binary Tree.
    topView(root)
    {
        var ans = [];
        // base case
        if(root === null){
            
            return ans;
        }
    
        let temp = null;
        
        //creating empty queue for level order traversal.
        let q = [];
        let start_q = 0;
        
        //creating a map to store nodes at a particular horizontal distance.
        let mp = new Map();
    
        q.push([root, 0]);
        
        while(q.length !== start_q)
        {
    
            temp = q[start_q][0];
            let d = q[start_q][1];
            start_q++;
            
            //storing temp.data in map.
            if(!mp.has(d)){
                mp.set(d, temp.data);
            }
            //if left child of temp exists, pushing it in
            //the queue with the horizontal distance.
            if(temp.left){
                q.push([temp.left, d-1]);
            }
            //if right child of temp exists, pushing it in
            //the queue with the horizontal distance.
            if(temp.right){
                q.push([temp.right, d+1]);
            }
        }
        
        let entri = mp.entries();
        
        let list = [];
        
        for(var ele of entri)
            list.push(ele);
        
        //sorting the map according to horizontal distance.
        list.sort(function (a, b) {
                    if(a[0] == b[0])
                        return a[1] - b[1];
                    return a[0] - b[0];
                });

        //traversing the map and storing the nodes in list 
        //at every horizontal distance.
        for(let i=0; i<list.length; i++){
            ans.push(list[i][1]);
        }
        //returning the output list.
        return ans;
    }
}
//this is for debugging purposes
let map = new Map
map.set(0,1)
map.set(-1,2)
map.set(1,3)
map.set(-2,4)
console.log(map)
let list=[]
let entries = map.entries()
for(var [key,value] of map)
list.push([key,value])
console.log(key,value)
console.log(list)
list.sort(function (a, b) {
    
        
    return a[0] - b[0];
});
console.log(list);