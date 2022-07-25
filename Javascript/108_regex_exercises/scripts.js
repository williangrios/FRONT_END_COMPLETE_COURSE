
// //1

// let upperCase = new RegExp(/[A-Z]/);

// console.log(upperCase.test('hello'));
// console.log(upperCase.test('Hello'));
// console.log(upperCase.test('HELLO'));
// console.log(upperCase.test('H'));
// console.log(upperCase.test('H23'));

// //2
// let productID = new RegExp(/\d+ID\b/);
// console.log(productID.test('0001ID')); //true
// console.log(productID.test('0001id')); //false
// console.log(productID.test('03sID')); //false


// //3
// let brands = new RegExp(/MARCA: (NIKE|ADIDAS|PUMA|ASICS)/);
// console.log(brands.test('MARCA: PUMA'));//true
// console.log(brands.test('MARCA:PUMA'));//false
// console.log(brands.test('MARCA: adidas'));//false
// console.log(brands.test('MARCA: '));//false
// console.log(brands.test('MARCA: ADIDAS'));//true
// console.log(brands.test('MARCA: adidas'));//false

// //4
// let ip = new RegExp(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
// console.log(ip.test('192.168.0.1'));//true
// console.log(ip.test('2192.168.0.1'));//true
// console.log(ip.test('2192.0.1'));//false
// console.log(ip.test('sdf.d.sd.fd'));//false
