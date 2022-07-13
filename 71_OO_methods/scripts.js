
const car = {
    run: function(){
        console.log('vrummm');
    },
    stop: function(){
        console.log('stopping');
    },
    maintenance: function () {
        console.log('repairing');
    }
}

car.maintenance();
car.run();
car.stop();