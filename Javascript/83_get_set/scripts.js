
class Person {
    constructor (name){
        this.name = name;
    }

    get getName(){
        return this.name;
    }

    set setName(newName){
        this.name = newName;
    }

}


let child = new Person('will');

console.log(child.getName);

child.setName = 'will rios';

console.log(child.getName);