function getMaxSubSum(array) {
  let sum = 0;
  let particalSum = 0;

  for (key of array) {
    if (particalSum < 0) particalSum = 0;
    particalSum += key;
    sum = Math.max(sum, particalSum);
  }

  return console.log(sum);
}

getMaxSubSum([-1, 2, 3, -9]); //== 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]); //== 6
getMaxSubSum([-1, 2, 3, -9, 11]); //== 11
getMaxSubSum([-2, -1, 1, 2]); //== 3
getMaxSubSum([100, -9, 2, -3, 5]); //== 100
getMaxSubSum([1, 2, 3]); //== 6 (берём все)
