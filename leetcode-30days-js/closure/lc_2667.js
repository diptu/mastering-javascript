/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return(...args) => "Hello World"
};


 const f = createHelloWorld();
 output = f()// "Hello World"
console.log(output )