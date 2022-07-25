
let car = {
    color: '',

    setColor: function(color){
        this.color = color;
    },

    getColor: function () {
        return this.color;
    }
}

car.setColor('green');
console.log(car.getColor());