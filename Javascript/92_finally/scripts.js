function sum(a, b){

    try {
        let c = a * g;   
        console.log(c); 
    } catch (error) {
        
        console.log (`ERROR MSG: ${error}`);
    }
    finally {
        console.log('code in finally always executes');
    }
        
}

sum (3, 2);


