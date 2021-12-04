// 22. Generate Parentheses
// var generateParentheses = function(n){
//     let outputArray = [];
//     backtrack(outputArray,n,``,0,0)
//     return outputArray
// }
// function backtrack(outputArray,max,str,open,close) {
//     if (str.length==max*2) {
//         outputArray.push(str)
//         return
//     }
//     if (open<max) {
//         backtrack(outputArray,max,str+`(`,open+1,close)
//     }
//     if (open>close) {
//         backtrack(outputArray,max,str+`)`,open,close+1)
//     }
// }
// **************************************
// 37. Sudoku Solver
// let board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
//   ]
//   var solveSudoku = function (board) {
//     solve(board)
//   }

//   function solve(board) {
//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[0].length; j++) {
//         if (board[i][j] == `.`) {
//           for (let c = 1; c <= 9; c++) {
//             if (valid(board, i, j, c)) {
//               board[i][j] = c.toString()
//               if (solve(board) == true) {
//                 return true
//               } else {
//                 board[i][j] = `.`
//               }
//             }

//           }
//           return false
//         }
//       }
//     }
//     return true
//   }

//   function valid(board, row, col, c) {
//     for (let i = 0; i <= 8; i++) {
//       if (board[row][i] == c) {
//         return false
//       }
//       if (board[i][col] == c) {
//         return false
//       }
//       if (board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + i % 3] == c) {
//         return false
//       }
//     }
//     return true
//   }
// *******************************************
// 131. Palindrome Partitioning
// var partition = function(s) {
//     let path=[]
//     let res=[]
//       func(s,res,path,0)
//       return res
//   };
//   function func(s,res,path,index) {
//     if (index==s.length) {
//       res.push([...path])
//       return
//     }
//     for(let i=index;i<s.length;i++){
//       if (isPalindrome(s,i,index)) {
//         path.push(s.substring(index,i+1))
//         func(s,res,path,i+1)
//         path.pop()
//       }
//     }
//   }
//   function isPalindrome(s,i,index) {
//     while (index<=i) {
//       if (s[index++]!=s[i--]) {
//         return false
//       }
//     }
//     return true
//   }
// *********************************
// 1688. Count of Matches in Tournament

// var numberOfMatches = function(n) {
//     let ans=0

//     Matches(n)

//     return ans

//     function Matches(n){
//          if(n==1){
//         return
//     }

//     if(n%2==0){
//         ans+=n/2
//         Matches(n/2)
//     }else{
//         ans+=(n-1)/2
//         Matches((n-1)/2+1)
//     }
//     }
// };
// ********************************************
// 1641. Count Sorted Vowel Strings
// backtrack with 5^n Tcomplexity
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// var countVowelStrings = function(n) {

//   return helper(n,0)  
// };
// function helper(n,vowels) {

//     if (n==0) {
//         return 1
//     }
//     let res=0
//     for(let i=vowels;i<5;i++){
//         res+=helper(n-1,i)
//     }
//     return res
// }
// console.log(countVowelStrings(10))
// dp solution
// ^^^^^^^^^^^^^^
// var countVowelStrings=function(n){

// let dp=[];
// //creating 2d array
// for(let i=0;i<n;i++){
//     dp[i]=Array(5).fill(0)
// }
// //filling the first row as 1[1,1,1,1,1]
// for (let i=0;i<5;i++){
//     dp[0][i]=1
// }
// for (let i=1;i<n;i++){
//     for(let j=0;j<5;j++){
//         if (j==0) {
//             dp[i][j]=1
//         }
//         else{
//             dp[i][j]=dp[i][j-1]+dp[i-1][j]
//         }

//     }
// }
// let sum=0
// for (let i=0;i<5;i++){
//     sum+=dp[n-1][i]
// }
// return sum
// }

// //TO(5N)
// //space O(5N)
// *************************************
// 1219. Path with Maximum Gold
// let grid = [
//     [0, 6, 0],
//     [5, 8, 7],
//     [0, 9, 0]
// ]
// var getMaxGold = function (grid) {
//     let maxGold = 0
//     let m = grid.length
//     let n = grid[0].length
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j]) {
//                 maxGold = Math.max(maxGold, getGold(grid, i, j, m, n))
//             }
//         }
//     }
//     return maxGold
// }

// function getGold(grid, i, j, m, n) {
//     if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0) return 0
//     let temp = grid[i][j]
//     grid[i][j] = 0
//     let count = temp
//     count += Math.max(
//         getGold(grid, i - 1, j, m, n),//up
//         getGold(grid, i + 1, j, m, n),//down
//         getGold(grid, i, j - 1, m, n),//left
//         getGold(grid, i, j + 1, m, n))//right
//     grid[i][j]=temp
//     return count

// }
// ********************************************
// 1079. Letter Tile Possibilities
// var numTilePossibilities = function(tiles) {
//     debugger
//     if (tiles.length === 0) {

//         return 0;
//     }

//     let count = 0;
//     const set = new Set();

//     // break down tiles and count possible combinations
//     for (let i = 0; i < tiles.length; i++) {
//         // skip if the tile is visited before for duplicated tiles
//         if (set.has(tiles[i])) {
//           continue;
//         }
//         // count all the sub combinations
//         console.log(tiles.slice(0,i)+tiles.slice(i+1))
//         count += numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;

// set.add(tiles[i]);
// console.log(tiles[i],`set`)
//     }

//     return count;
// };
// let tiles=`AAB`
// console.log(numTilePossibilities(tiles))
// ********************************************************


//another Method
//^^^^^^^^^^^^^^^
// let tiles = `AAB`
// var numTilePossibilities = function (tiles) {
//     debugger
//     let bool=Array(tiles.length).fill(0)
//     let set=new Set()
//    function solve(s){
//        for(let i=0;i< tiles.length;i++){
//         if (!bool[i]) {
//             let temp=s+tiles[i]
//             bool[i]=1
//             set.add(temp)
//             solve(temp)
//             bool[i]=0
//         }
//        }

//     }
//     solve(``)
//     return set.size
// }
// console.log(numTilePossibilities(tiles));
// *********************************************
// 17. Letter Combinations of a Phone Number
// let digits=`23`
// var letterCombinations = function (digits) {
//     if (digits===``) {
//         return []
//     }
//     let map = {
//         2: `abc`,
//         3: `def`,
//         4: `ghi`,
//         5: `jkl`,
//         6: `mno`,
//         7: `pqrs`,
//         8: `tuv`,
//         9: `wxyz`
//     }
//     let res=[]
//     solve(res,``,digits,0,map)
//     return res


//     function solve(res,current,digits,index,map) {
//         if (current.length==digits.length) {
//             res.push(current)
//             return
//         }
//         let letters=map[digits[index]]
//         for(let i=0;i<letters.length;i++){
//             solve(res,current+letters[i],digits,index+1,map)
//         }
//     }

// };
// ***************************************
// 51. N-Queens

var SolveNQueens = function (n) {
    let ans = [];
    let board = new Array(n)
        for(let i=0;i<n;i++) {
            board[i] =new Array(n).fill(`.`)
        }
   return solve(board,0,ans,n)   
}
function validPos(board,row,col,n) {
    let dupRow=row
    let dupCol=col
    //check diogonal leftUp
    while (row>=0&&col>=0) {
        if (board[row][col]==`Q`) return false
        row--
        col--
    }
    
    col=dupCol
    row=dupRow
    //check left side
    while (col>=0) {
        if (board[row][col]==`Q`) return false

         col--            
    }
    col=dupCol
    row=dupRow
    //check dioganally leftDown
    while (col>=0&&row<n) {
        if (board[row][col]==`Q`) return false
            
        col--
        row++
    }
    return true
}
function solve(board,col,ans,n) {
    if (col==n) {
        ans.push(board.map(k=>k.join(``)))//important
        
        return
    }
    
    for (let row=0;row<n;row++)
    {
        if (validPos(board,row,col,n)) {
            
        board[row][col]=`Q`
        solve(board,col+1,ans,n)
        board[row][col]=`.`
        }
    }
    return ans
        
}
console.log(SolveNQueens(4));