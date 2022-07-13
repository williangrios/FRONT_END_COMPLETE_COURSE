// //1
// class BankAccount{

//     constructor(){
//         this.balance = 0;
//     }

//     Deposit(value){
//         this.balance += value;
//     }

//     Withdraw(value){
//         this.balance -= value;
//     }

//     ReturnBalance(){
//         return this.balance;
//     }

// }

// let accountWil = new BankAccount();
// accountWil.Deposit(300);
// console.log(accountWil.ReturnBalance());

// accountWil.Withdraw(100);
// console.log(accountWil.ReturnBalance());


//2

class ShoppingCart {
    constructor(){
        this.numItens = 0;
        this.products = [];
        this.qtdProducts = [];
        this.total = 0;
    }

    addItem(product, numProducts, valueUnit){
        this.products.push(product);
        this.qtdProducts.push(numProducts);
        this.numItens += numProducts;
        this.total += numProducts * valueUnit;
    }

}

let newCart = new ShoppingCart();
newCart.addItem('ipad', 2, 1000);
newCart.addItem('iphone', 4, 30);
newCart.addItem('notebook', 10, 1.5);

console.log(newCart);


//3

//4


//5

//6

//7

//8

//9