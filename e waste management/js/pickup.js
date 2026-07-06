document.getElementById("pickupForm").addEventListener("submit",function(e){

e.preventDefault();

let pickup={

name:document.getElementById("name").value,

phone:document.getElementById("phone").value,

address:document.getElementById("address").value,

date:document.getElementById("date").value,

time:document.getElementById("time").value,

category:localStorage.getItem("category"),

product:localStorage.getItem("product"),

quantity:localStorage.getItem("quantity"),

pickupId:"EW"+Math.floor(Math.random()*10000),

status:"Pending"

};

localStorage.setItem("pickup",JSON.stringify(pickup));

window.location.href="success.html";

});