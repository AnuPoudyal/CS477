// Fix the slow function to be asynchronous/non-blocking
/*function slow(callback){
    for(let i=0; i<= 5e8; i++){}
    if (Math.random() > 0.5) {
    return callback("Error",null)
    }
    callback(null, {id:12345})
    }
    function exec(fn){
    // Complete the code here to implement chaining with callback
    } */

    function exec(fn) {
         let obj = {};
        fn(function (err, data) {
    
            obj.done = function (func) {
                func(data)
                return obj;
            }
            obj.fail = function (func) {
                func(err)
                return obj;
            }
    
        })
        return obj
    }
    
    
    exec(slow)
        .done(function (data) {
            console.log(data);
        })
        .fail(function (err) {
            console.log("Error: " + err);
        })