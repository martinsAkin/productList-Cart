
document.addEventListener('DOMContentLoaded', function() {
 const cartItems = [];
 

 function updateCart() {
     const cartItemsList = document.getElementById('cart-items');
     const itemCount = document.getElementById('item-count');
     const orderTotal = document.getElementById('order-total');
    //  const removeBtn = document.getElementById('remove');
     cartItemsList.innerHTML = '';
     let total = 0;
     let count = 0;
     
     cartItems.forEach(item => {
         const itemTotal = item.quantity * item.price;
         total += itemTotal;
         count += item.quantity;

         const listItem = document.createElement('li');
         listItem.innerHTML = `${item.name} x ${item.quantity}: $${itemTotal.toFixed(2)} `;
         cartItemsList.appendChild(listItem);
     });
    //  $${item.price.toFixed(2)}

     itemCount.innerText = count;
     orderTotal.innerText = total.toFixed(2);
     
 }
 function addToCart(name, price) {
     const existingItem = cartItems.find(item => item.name === name);
     if (existingItem) {
         existingItem.quantity++;
     } else {
         cartItems.push({ name, quantity: 1, price });
     }
     updateCart();
 }

 document.querySelectorAll('.cart-Button').forEach(button => {
     button.addEventListener('click', function() {
         const name = this.getAttribute('data-name');
         const price = parseFloat(this.getAttribute('data-price'));
         addToCart(name, price);
     });
 });


 
});



// login page: this section is the functionality for the login/create account page

// let password = document.getElementById('password').value;
// let CreatePassKey = document.getElementById('CreatePassKey').value;


// // var hiddenBTN = document.getElementsByClassName('product');
// // let count = 0;

// // function cart() {
// //     count++;
// //     document.getElementById("item-count").innerHTML = count;
// //     alert("product added successfully "+ count);   
    
// //     let cartNumber = {
// //         value: count
// //     };
    
   
// // }

// let information = document.getElementById("info");
// function info() {
//     alert("This Passkey will be used to validate your future transactions, You'll be asked frequently to ensure you remember it");
    
// }

// function Reveal() {
//     var passInput = document.getElementById('input');
//     var label = document.getElementById('label');
//             if (passInput.type ==="password") {
//                 passInput.type = "text";
//                 // label.textContent = "Hide Password";
//             } else {
//                 passInput.type = "password";
//                 // label.textContent = "Reveal password";
//             }

// }

// function hide() {
//     var signUp = document.getElementById('div2');
//     // var close = document.getElementById('close');
//     var signIn = document.getElementById('div');
//     var display = document.getElementById('display');
//     var switchin = 'WE REQUEST OF YOU TO PROVIDE THE NECCESSARY DETAILS FOR THE ACCOUNT CREATION';
//     var message = document.getElementById('message');

//     if(signUp.style.display === "none"){
//         signUp.style.transition = "600ms ease-in-out";  
//         signUp.style.display = "block";
//         message.innerText = switchin;
//         signUp.style.backgroundColor = "red";
//         display.style.backgroundColor = "burlywood";
//         display.style.transition = "600ms ease-in-out";
//         signIn.style.opacity = "0";
//     }else{
//         signUp.style.display = "none";
//         message.innerText = "YOU'LL NEED TO SUPPLY YOUR EMAIL AND YOUR ACCOUNT PASSWORD TO PROCEED TO LOG-IN";
//         display.style.backgroundColor = "red";
//         display.style.transition = "900ms ease-in-out";
//         signIn.style.opacity = "100";
//         signIn.style.transition = "900ms ease-in-out";
//     }

//     // info.style.display="none";
    
// }

// function navigate(){
//     if((document.getElementById("input").value === "") && (document.getElementById('input1'))){
//         document.getElementById("input").style.border = '1px solid red';
//         document.getElementById('input1').style.border = '1px solid red';
//     }else{
//         window.location.href = 'index.html';
//     }
// }


// function Verify_Id (){
//     document.getElementById("prompt").style.display = 'block';
// }

// const TotalSum = updateCart();
// proceedtoPay(TotalSum);

// function proceedtoPay(TotalSum){
//     // const TotalSum = updateCart();
//     const user_key = document.getElementById('passKeyValidation').value
//     if (user_key === "") {
//         alert(TotalSum);
//     }
//     else{
//         alert('ID confirmed, Hold on for few seconds ');
//         document.getElementById("prompt").style.display = 'none';
//         window.location.href = 'payementOption.html';
//     }
// }
