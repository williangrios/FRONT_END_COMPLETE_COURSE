let first = [1, 2, 3]

let all = [...first, 4, 5, 6]

console.log(all)

let outOfOrder = [4, 5, 6, ...first]

console.log(outOfOrder)

let second = [4, 5]

let firstAndSecond = [...first, ...second]

console.log(firstAndSecond)

