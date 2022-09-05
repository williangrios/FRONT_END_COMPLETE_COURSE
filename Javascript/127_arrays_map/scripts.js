
const list = [1, 2, 3, 4, 5];

const newList = list.map(function(item, index){
    return item + index;
})

console.log(newList);