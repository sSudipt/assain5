const allBtn = document.getElementsByClassName("btn seat");



for (const btn of allBtn) {
    
  btn.addEventListener("click", function (event) {
    
    const name = event.target.innerText;
    // const seat = document.getElementById('Business-class').innerText
    const Price = getValue('per-price');
    event.target.setAttribute("disabled", false);

     event.target.style.backgroundColor = "#48bb78";
    // setBackgroundColorById(event.target)
    const selectedContainer = document.getElementById(
        "Here"
      );


      
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "py-4", "text-gray-400");
    

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.textContent = "Business-class";
    p3.innerText = Price;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);

    updateCartCount();
    updateLeftPlayer(); 

    updateTotalPrice(Price);
    updateGrandPrice();
  })
}

function updateTotalPrice(price){
    const totalPrice = getValue("total-price");
   const convertedPrice = parseInt(price);
   const sum =  totalPrice + convertedPrice;
   document.getElementById('total-price').innerText = sum;
   }

function getValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

function updateGrandPrice(status){
    const totalPrice = getValue(`total-price`);
    if (status === undefined){
     
      document.getElementById("grand-total").innerText = totalPrice;
  
    }else{
      const couponCode = document.getElementById(`coupon`).value;
      if(couponCode === `NEW15`){
        
         const discounted = (totalPrice * 20 )/100;
         
        document.getElementById("grand-total").innerText = totalPrice-discounted ;
      }else{
        alert(`please enter valid coupon code.`)  
      }
    }
  }
  

  function updateCartCount() {
    const defaultCartCount = document.getElementById("cart").innerText;
  
    const convertDefaultCartCount = parseInt(defaultCartCount);
    document.getElementById("cart").innerText = convertDefaultCartCount + 1;
  }

  function updateLeftPlayer() {
    const defaultLeft = document.getElementById("left").innerText;
    const convertDefaultLeft = parseInt(defaultLeft);
    document.getElementById("left").innerText = convertDefaultLeft - 1;
  }

  function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-green-400");
  }