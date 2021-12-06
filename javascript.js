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