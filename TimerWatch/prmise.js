const cart=["shoes","pants","kurta"];
const promise=createOrder(cart);


promise.then(function(orderId){
   // processToPayment(orderId);
   console.log(orderId);
   return orderId;

}).then(function(orderId){
    return proceedToPayment(orderId);
}
).then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){ 
    console.log(err.message);
})

function createOrder(cart) {
    const pr=new Promise(function(resolve , reject) {
      if(!validateCart(cart)){
               const err=new Error("invalid cart"); 
               reject(err);
      }
      //logic for create order
      const orderId="12345";
      if(orderId){
        setTimeout(function(){
            resolve(orderId);
        },5000)
        
      } 
    })
     return pr;
    }

   

    function proceedToPayment(proceedToPayment) {
        return new Promise(function(resolve , reject){  
            resolve("Payment Done")
        
        })
        
    }
    function validateCart(cart) {
        return true;
    }