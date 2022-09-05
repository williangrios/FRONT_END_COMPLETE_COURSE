
const list = [1, 2, 3, 4, 5];

const sum = list.reduce(function(total, next){
    return total + next;
})

console.log(sum);