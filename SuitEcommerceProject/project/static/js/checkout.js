var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
    else if (e.target.innerHTML === 'Paypal') {
       activeDropdown.classList.remove('visible');
   activeDropdown = null;
   e.target.innerHTML = document.getElementById('current-card').innerHTML;
   document.getElementById('current-card').innerHTML = 'Paypal';
 }
 else if (e.target.innerHTML === 'Stripe') {
   activeDropdown.classList.remove('visible');
activeDropdown = null;
e.target.innerHTML = document.getElementById('current-card').innerHTML;
document.getElementById('current-card').innerHTML = 'Stripe';
}
else if (e.target.innerHTML === 'Bitcoin') {

   activeDropdown.classList.remove('visible');
activeDropdown = null;
e.target.innerHTML = document.getElementById('current-card').innerHTML;
document.getElementById('current-card').innerHTML = 'Bitcoin';
}
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}


var form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('Form Submitted...')
    submitFormData()
})

let shipping = "{{Order.shipping}}"

function submitFormData(){
  console.log("Payment button clicked")

  var shippingInfo = {

    "adress" : null,
    "city" : null,
    "Zipcode" : null,
 
  }

  shippingInfo.adress = document.getElementById("adress").value
  shippingInfo.city = document.getElementById("city").value
  shippingInfo.Zipcode = document.getElementById("ZipCode").value

  var url = '/processorder/'
  
  fetch(url, {
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        "X-CSRFToken" : csrftoken,
    },
    body:JSON.stringify({'shipping' : shippingInfo}),
  })
  .then((response)=>{
    return response.json()
  })
  .then((data) => {
    console.log("success:", data);
    alert("Transaction completed");
    //window.location.href = "{% url 'store' %}"
  })
}

