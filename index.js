//Takes a function called callback
let callback = (a,b) => a+b;

let receivesAFunction = (callback) => {
    return callback();
};

//Console.log to test (also returns the function)
console.log(callback);

//Returns the function callbackFunc
let returnsANamedFunction  = () => {
    let callbackFunc = function () {
        console.log("I'm the callback function");
    }
    return callbackFunc;
}

//Returns an anoymous function
returnsAnAnonymousFunction = () => {
    return function () {};
}