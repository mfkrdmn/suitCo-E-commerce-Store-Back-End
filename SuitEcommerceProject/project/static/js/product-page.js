//1. Product

let pricednone = document.getElementById("pricednone");
let product1 = document.getElementById("product1");
let buttonproduct = document.getElementById("buttonproduct");

product1.addEventListener("mouseover",function(){

    pricednone.style.display="none"
    buttonproduct.style.display="block"

})

product1.addEventListener("mouseout",function(){

    pricednone.style.display="block"
    buttonproduct.style.display="none"

})


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

    let div = document.createElement("div");
    div.classList.toggle("div");
    document.getElementById("cartcontainer").appendChild(div);

    let photodiv1 = document.createElement("div");
    div.appendChild(photodiv1);
    photodiv1.classList.toggle("photodiv1");

    let nametext1 = document.createElement("div");
    div.appendChild(nametext1);
    let productName = document.getElementsByClassName("productName")[0]
    nametext1.innerHTML=productName.innerHTML
    nametext1.classList.toggle("nametext1");

    let input = document.createElement("input");
    div.appendChild(input);
    input.type="number"
    input.value="1"
    input.min="1"
    input.max="5"
    input.classList.toggle("inputorder");

    let suitprice = document.getElementById("suitprice")

    let pricetext1 = document.createElement("div");
    div.appendChild(pricetext1);
    pricetext1.innerHTML= '$' + suitprice.innerHTML
    pricetext1.classList.toggle("pricetext1");

    input.onchange = function() {myFunction()};

    function myFunction() {

        pricetext1.innerHTML= '$' + suitprice.innerHTML * parseInt(input.value)

        // totalAmount.innerHTML= parseInt(totalAmount.innerHTML)+"$"+parseInt(input.value)*"640"
    }


    let deletebutton1 = document.createElement("div");
    div.appendChild(deletebutton1);
    deletebutton1.innerHTML = '<i class="fa fa-xmark"></i>';
    deletebutton1.classList.toggle("deletebutton1");
    deletebutton1.id=deletebutton1;

        deletebutton1.addEventListener("click",function(){
            div.remove();
            totalAmount.remove();
        })

        shoppingCart.style.color="#00FFFF"
        //shoppingCart.classList.add('animate__animated', 'animate__bounce',"animate__slow", "animate__infinite");

})


//Sort By


let optionBestSelling = document.getElementById("optionBestSelling").value
let productphoto1 = document.getElementById("productphoto1");


//Product Line Sort

const barIcon = document.getElementById("baricon");
let products = document.getElementById("products")







