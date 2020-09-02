function removeWithoutCopy(arr) {
  let res = []
  let leng = arr.length
  for (let i = 0; i < leng; i++) {
    if (arr[i] === arr[i + 1]) {
      res.push(arr[i])
      i++
    }
  }
  return res
}

let arr = [1, 2, 4, , 7, 4, 3, 3, 1, 5, 3]
let item = 2
let index = 1
let result = removeWithoutCopy(arr)
console.log(result);