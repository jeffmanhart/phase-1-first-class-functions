function receivesAFunction(callback){
    callback(console.log( "calling myself back"));
  };

function returnsANamedFunction(){
   return function returnFunction() {
    console.log("this is a function");
    }
  };

function  returnsAnAnonymousFunction() {
    return function () {
        console.log("I am anonymous");
      };
}