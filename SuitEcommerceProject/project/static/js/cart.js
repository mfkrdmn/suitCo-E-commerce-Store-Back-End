let updateBtns = document.getElementsByClassName("update-cart")

for(var i=0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener("click", function(){
        let productId = this.dataset.product //html den alınan veriler
        let action = this.dataset.action //html den alınan veriler
        console.log("productId", productId, "action", action)

        console.log("USER:", user) //html e eklediğimiz script tagi ile ekrana userı bastık

        if(user === "AnonymousUser"){
            console.log("not logged in")
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log("logged in,sending data")

    var url = "/update_item/"

    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "X-CSRFToken" : csrftoken,
        },
        body:JSON.stringify({"productId": productId, "action":action})
    })

    .then((response)=>{
        return response.json()
    })

    .then((data)=>{
        console.log("data:", data)
        location.reload()
    })
}