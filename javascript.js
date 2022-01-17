function checkspam(str) {
  let newstr = str.toLowerCase();

  return newstr.includes('viagra') || newstr.includes('xxx');
}
alert( checkspam('buy ViAgRA now') );

//输入数字求和
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

//最大子数组
function getmaxsubsum(arr) {
  let maxsum = 0;
  let partialsum = 0;

  for (let item of arr){
    partialsum += item;
    maxsum = Math.max(maxsum, partialsum);
    if (partialsum < 0) partialsum = 0;
  }

  return maxsum;
}

alert( getmaxsubsum([1,3,5,1,-3,-2,3]) )

// ax + by = c
// dx + ey = f

// var a = 4
// var b = 5
// var c = 6
// var d = 7
// var e = 8
// var f = 9

// d * (c - b * y) + e * y = f

//合并排列
function mergeSort(ary) {
  if (ary.length < 2) return ary
  let mid = ary.length >> 1
  let left = ary.slice(0, mid)
  let right = ary.slice(mid)
  mergeSort(left)
  mergeSort(right)
  let i = 0
  let j = 0
  let k = 0
  while(i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      ary[k++] = right[j++]
    } else {
      ary[k++] = left[j++]
    }
  }
  while (i < left.length) {
    ary[k++] = left[i++]
  }
  while (i < right.length) {
    ary[k++] = right[i++]
  }
  return ary
}


//数组转链表
function ListNode(val, next) {
  this.val === undefined ? 0 : val
  this.next === undefined ? null : next
}

function arrToList(array) {
  if (array == []) return null
  let node = new ListNode()
  let temp = node
  for (let i = 0; i < array.length; i++) {
    let p = new ListNode(array[i])
    temp.next = p
    temp = p
  }
  return node.next
}


function bind(f, ...fixedArgs) {
  return function(...args) {
    return f(...fixedArgs, ...args)
  }
}

function swap(ary, i, j) {
  let temp = ary[i]
  ary[i] = ary[j]
  ary[j] = ary[i]
}

//快排
function quickSprt(ary, start=0, end=ary.length-1) {
  if (start >= end) {
    return ary
  }

  let pivotIdx = Math.floor(Math.random() * (end - start +1) + start)
  let pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)
  
  let i = start
  for (let j = start; j < end; j++) {
    if (ary[i] < pivot) {
      swap(ary, i++, j)
    }
  }
  swap(ary, i, end)

  quickSprt(ary, start, i-1)
  quickSprt(ary, i+1, end)

  return ary
}

function quickSprtBy(ary, predicate = it => it, start=0, end=ary.length-1) {
  if (start >= end) {
    return ary
  }

  let pivotIdx = Math.floor(Math.random() * (end - start +1) + start)
  let pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)
  
  let i = start
  for (let j = start; j < end; j++) {
    if (predicate(ary[i]) < predicate(pivot)) {
      swap(ary, i++, j)
    }
  }
  swap(ary, i, end)

  quickSprtBy(ary, predicate, start, i-1)
  quickSprtBy(ary, predicate, i+1, end)

  return ary
}

function quickSprtWith(ary, compare = (a, b) => a-b, start=0, end=ary.length-1) {
  if (start >= end) {
    return ary
  }

  let pivotIdx = Math.floor(Math.random() * (end - start +1) + start)
  let pivot = ary[pivotIdx]

  swap(ary, pivotIdx, end)
  
  let i = start
  for (let j = start; j < end; j++) {
    if (compare(ary[j], pivot) < 0) {
      swap(ary, i++, j)
    }
  }
  swap(ary, i, end)

  quickSprtWith(ary, predicate, start, i-1)
  quickSprtWith(ary, predicate, i+1, end)

  return ary
}

function mapValues(obj, mapper) {
  let result = {}
  for (let key in obj) {
    let val = obj[key]
    result[key] = mapper(val, key)
  }
  return result
}

function every(ary, predicare) {
  for (let i = 0; i < ary.length; i++) {
    if (!predicare(ary[i])) {
      return false
    }
  }
  return true
}

function some(ary, predicare) {
  for (let i = 0; i < ary.length; i++) {
    if (predicare(ary[i])) {
      return true
    }
  }
  return false
}

//反函数
function invert(f) {
  return function(...args) {
    return !f(...args)
  }
}


function createTreeNode(val) {
  return {
    val: val,
    left: null,
    right: null,
  }
}

function aryToTree(array, rootPos = 0) {
  if (ary[rootPos] == null) {
    return null
  }

  let rootNode = createTreeNode(rootPos)
  let leftPos = rootPos * 2 + 1
  let rightPos = rootPos * 2 + 2
  let leftTree = aryToTree(ary, leftPos)
  let rightTree = aryToTree(ary, rightPos)

  rootNode.left = leftTree 
  rootNode.right = rightTree
}


function treeToAry(tree, index = 0, array = []) {
  if (tree) {
    array[index] = tree.val
    treeToAry(tree.left, index * 2 + 2)
    treeToAry(tree.right, index * 2 + 2)
  }
  return array
}

function condensedAryToTree(ary) {
  let nodes = []
  if (ary.length == 0) {
    return null
  }

  nodes.push(createTreeNode(ary[0]))

  for (let i = 1; i < ary.length; i++) {
    let current = nodes.shift()
    let node

    if(ary[i] == null) {
      node = null
    } else {
      let node = createTreeNode(ary[i])
      nodes.push(node)
    }
    current.left = node

    i++

    if (ary[i] == null) {
      node = null
    } else {
      let node = createTreeNode(ary[i])
      nodes.push(node)
    }
    current.right = node
  }
}

function treeToCondensedAry(root) {
  if (root == null) {
    return []
  }
  let nodes = [root]
  let result = []

  while (nodes.length) {
    let current = nodes.shift()
    if (current) {
      result.push(current.val)
      nodes.push(current.left, current.right)
    } else {
      result.push(null)
    }
  }

  return result
}

//action函数
function preOrderTraverse(root, action) {
  if (root) {
    action(root.val)
    preOrderTraverse(root.left, action)
    preOrderTraverse(root.right, action)
  }
}

function inOrderTraverse(root, action) {
  if (root) {
    preOrderTraverse(root.left, action)
    action(root.val)
    preOrderTraverse(root.right, action)
  }
}

function postOrderTraverse(root, action) {
  if (root) {
    preOrderTraverse(root.left, action)
    preOrderTraverse(root.right, action)
    action(root.val)
  }
}

function insertIntoBST(root, val) {
  if (!root) {
    let node = createTreeNode(val)
    return node
  } else {
    if (val < root.val) {
      root.left = insertIntoBST(root.left, val)
    } else {
      root.right = insertIntoBST(root.right, val)
    }
  }
  return root
}

function bstSort(ary) {
  let bst = null
  for (let i = 0; i < ary.length; i++) {
    bst = insertIntoBST(bst, ary[i])
  }
  
  i = 0
  inOrderTraverse(bst, val => {
    ary[i++] = val
  })
  return ary
}
