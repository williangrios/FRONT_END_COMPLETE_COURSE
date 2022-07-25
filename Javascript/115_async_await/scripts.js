
function sumDelay (a, b) {
        return new Promise(resolve => {
                setTimeout(function() {
                        resolve (a + b );
                }, 5000);
        })
}

async function resSum (a, b, c, d) {
        let x = sumDelay(a, b);
        let y = sumDelay(c, d);
        console.log('awaiting 1');
        return await x + await y;

}

resSum(2, 4, 6, 8).then(value => console.log(value));
console.log('awaiting 2');