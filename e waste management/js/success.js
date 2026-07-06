let pickup = JSON.parse(localStorage.getItem("pickup"));

document.getElementById("pickupId").innerHTML = pickup.pickupId;

document.getElementById("name").innerHTML = pickup.name;

document.getElementById("phone").innerHTML = pickup.phone;

document.getElementById("category").innerHTML = pickup.category;

document.getElementById("product").innerHTML = pickup.product;

document.getElementById("quantity").innerHTML = pickup.quantity;

document.getElementById("address").innerHTML = pickup.address;

document.getElementById("date").innerHTML = pickup.date;

document.getElementById("time").innerHTML = pickup.time;

document.getElementById("status").innerHTML = pickup.status;

function logout(){

    localStorage.removeItem("currentUser");

    alert("Thank you for using E-Waste Management System!");

    window.location.href = "index.html";

}