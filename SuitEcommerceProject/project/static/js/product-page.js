//1. Product

let pricednone = document.getElementById("pricednone");
let product1 = document.getElementById("product1");
let buttonproduct = document.getElementById("buttonproduct");

/*product1.addEventListener("mouseover",function(){

    pricednone.style.display="none"
    buttonproduct.style.display="block"

})

product1.addEventListener("mouseout",function(){

    pricednone.style.display="block"
    buttonproduct.style.display="none"

})*/


//Color Changes

let boxblue = document.getElementById( "boxblue");
let boxgreen = document.getElementById("boxgreen");
let boxblack = document.getElementById("boxblack");


//In Stock/Out of Stock


// categories


let downarrow1 = document.getElementById("downarrow1");
let uparrow1 = document.getElementById("uparrow1");
let categories = document.getElementById("categories");
let firstUlOccasion = document.getElementById("firstUlOccasion");
let secUlOccasion = document.getElementById("secUlOccasion");
let thdUlOccasion = document.getElementById("thdUlOccasion");


// Price


let searchButton = document.getElementById("searchButton");

const priceFrom = document.getElementById("priceFrom").value;
const priceTo = document.getElementById("priceTo").value;


// Cart


let shoppingCart = document.getElementById("shoppingCart");
let cart = document.getElementById("cart");
let xmarkcart = document.getElementById("xmarkcart");
let totalAmount = document.getElementById("totalAmount");


shoppingCart.addEventListener("click",function(){

    cart.style.visibility="visible";

})

xmarkcart.addEventListener("click",function(){

    cart.style.visibility="hidden";
})


buttonproduct.addEventListener("click",function(){


        shoppingCart.style.color="#00FFFF"
        //shoppingCart.classList.add('animate__animated', 'animate__bounce',"animate__slow", "animate__infinite");

})


//Sort By


let optionBestSelling = document.getElementById("optionBestSelling").value
let productphoto1 = document.getElementById("productphoto1");


//Product Line Sort

const barIcon = document.getElementById("baricon");
let products = document.getElementById("products")







