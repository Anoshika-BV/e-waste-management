function showProducts(){

let category=document.getElementById("category").value;

let product=document.getElementById("product");

product.innerHTML="";

let items=[];

if(category=="Electronics"){

items=["Laptop","Mobile","Television","Computer","Printer"];

}

else if(category=="Batteries"){

items=["Laptop Battery","Car Battery","UPS Battery","Dry Cell"];

}

else if(category=="Lighting"){

items=["LED Bulb","Tube Light","CFL","Street Light"];

}

else if(category=="Medical Equipment"){

items=["ECG Machine","Thermometer","Blood Pressure Monitor"];

}

else if(category=="Solar Equipment"){

items=["Solar Panel","Inverter","Charge Controller"];

}

else{

items=["Remote Car","Robot","Smart Watch","Game Console"];

}

items.forEach(function(item){

let option=document.createElement("option");

option.text=item;

option.value=item;

product.add(option);

});

}

function nextPage(){

let category=document.getElementById("category").value;

let product=document.getElementById("product").value;

let quantity=document.getElementById("quantity").value;

if(category=="" || product==""){

alert("Please Select Category and Product");

return;

}

if(quantity=="" || quantity<=0){

alert("Enter Quantity");

return;

}

if(quantity>10){

alert("Maximum 10 Items Allowed Per Pickup");

return;

}

localStorage.setItem("category",category);

localStorage.setItem("product",product);

localStorage.setItem("quantity",quantity);

window.location.href="pickup.html";

}