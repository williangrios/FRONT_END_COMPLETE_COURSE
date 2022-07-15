//1
class BankAccount{

    constructor(){
        this.balance = 0;
    }

    Deposit(value){
        this.balance += value;
    }

    Withdraw(value){
        this.balance -= value;
    }

    ReturnBalance(){
        return this.balance;
    }

}

let accountWil = new BankAccount();
accountWil.Deposit(300);
console.log(accountWil.ReturnBalance());

accountWil.Withdraw(100);
console.log(accountWil.ReturnBalance());


//2
class ShoppingCart {
    constructor(){
        this.numItens = 0;
        this.products = [];
        this.qtdProducts = [];
        this.valueUnitProduct = [];
        this.total = 0;
    }

    addItem(product, qtdProducts, valueUnit){
        //existing item?
        let existItem = false;
        for ( let i =0 ; i < this.products.length; i++){
            if (product == this.products[i]){
                //yes, item already exists in cart
                this.numItens += qtdProducts;
                this.qtdProducts[i] += qtdProducts;
                this.valueUnitProduct[i] = valueUnit;
                this.total += qtdProducts * valueUnit;
                existItem = true;
            }
        }

        if (existItem == false){
            this.numItens += qtdProducts;
            this.products.push(product);
            this.qtdProducts.push(qtdProducts);
            this.valueUnitProduct.push(valueUnit);
            this.total += qtdProducts * valueUnit;
        }
        
    }

    removeItem(product){
            let indexProduct ;

            indexProduct = this.products.indexOf(product);

            if (indexProduct != -1){
                this.products.splice(indexProduct, 1);
                this.numItens -= this.qtdProducts[indexProduct];
                this.total -= this.qtdProducts[indexProduct] * this.valueUnitProduct[indexProduct];
                this.qtdProducts.splice(indexProduct, 1);
                this.valueUnitProduct.splice(indexProduct, 1);
            }
        }
    }

 let newCart = new ShoppingCart();

 newCart.addItem('iphone', 2, 500);
 newCart.addItem('ipad', 2, 1000);
 newCart.addItem('ipad', 3, 1000);
 newCart.addItem('ipad', 1, 1000);
 newCart.addItem('iphone', 1, 500);
 newCart.addItem('notebook', 2, 10000);
// newCart.addItem('iphone', 4, 30);
// newCart.addItem('notebook', 10, 1.5);

 newCart.removeItem('ipad');
 newCart.removeItem('iphone');
 newCart.addItem('notebook', 2, 10000);
 newCart.addItem('ipad', 1, 1000);
 

 console.log(`Num itens in the cart ${newCart.numItens}`);
 console.log(`Value total $${newCart.total}`);
 console.log(`Products list`);
 for (let i =0; i< newCart.products.length; i++){
    console.log('----' + newCart.products[i] + ': $' + newCart.valueUnitProduct[i] + 'X' + newCart.qtdProducts[i] + '=$' + newCart.valueUnitProduct[i] * newCart.qtdProducts[i]);
 }
 console.log ('------------END-------------')


//3
class Customer{
    constructor(street, disctrict, city, state){
        this.street = street;
        this.disctrict = disctrict;
        this.city = city;
    }

    setStreet(newStreet){
        this.street = newStreet;
    }

    getStreet(){
        return this.street;
    }
    
    setDistrict(newDistrict){
        this.district = newDistrict;
    }

    getDistrict(){
        return this.disctrict;
    }

    setCity(newCity){
        this.city = newCity;
    }

    getCity(){
        return this.city;
    }

}

let customer1 = new Customer('av 1 maio', 'sol nascente', 'Arcos');
console.log(customer1.getCity());
customer1.setCity('Belo Horizonte');
console.log(customer1.getCity());

//4
class Car{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
        this.fuel = 100;
    }

    ride(){
        this.fuel -= 10;
        console.log('Fuel: '+ this.fuel);
    }

    reFuel(fuel){
        if ((this.fuel + fuel)>100){
            console.log('No much fuel');
            this.fuel = 100;
        }
        else{
            this.fuel += fuel;
        }
        console.log('ReFuel: '+ this.fuel);
    }
}

let newCar = new Car('BMW', 'red');
newCar.ride();
newCar.ride();
newCar.ride();
newCar.ride();
newCar.ride();
newCar.reFuel(15);
newCar.ride();
newCar.ride();
newCar.ride();
newCar.reFuel(120);
newCar.ride();
newCar.ride();

//5
class BankAccount{
    constructor(balanceCC, balanceCP, earnings){
        this.balanceCC = balanceCC;
        this.balanceCP = balanceCP;
        this.earnings = earnings;
    }

    withdrawCC(value){
        this.balanceCC -= value;
    }

    withdrawCP(value){
        this.balanceCP -= value;
    }

    depositCC(value){
        this.balanceCC += value;
    }

    depositCP(value){
        this.balanceCP += value;
    }

    transferMoney(from, value){
        if (from === 'CP'){
            this.balanceCC += value;
            this.balanceCP -= value;
        }
        else if(from === 'CC'){
            this.balanceCP += value;
            this.balanceCC -= value;
        }
    }

    earnings(){
        let earnings = (this.balanceCP * this.earnings /100);
        this.balanceCP += earnings;

    }

}

class SpecialBankAccount extends BankAccount{
    constructor(balanceCC, balanceCP, earnings){
        super(balanceCC, balanceCP, earnings * 2 )
        
    }
}