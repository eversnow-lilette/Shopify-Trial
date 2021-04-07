// Put your application javascript here

//Cart Item Counter
function addCartIndex(){
    let addCartForm = document.querySelector('form[action="/cart/add"]');
    let formData = new FormData(addCartForm);

    //editting the cart index line property 
    formData.append("cart_index", document.getElementById('item_index').value);

    fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

//counts the items in the cart
function addIndex(){
    var count = parseInt(document.getElementById('item_index').value) + 0;
    count ++;
    document.getElementById('item_index').setAttribute('value', count);
}

//counts the quantities of the items in the cart
function addItems(item, quantity, amount){
   var items = "Item: " + item + " Quantity: " + quantity + " Amount: " + amount +"\n";
   var value = document.getElementById('item_list').value

   value += items;

   document.getElementById('item_list').setAttribute('value', value)
}

//sets the modal message
function openModal(stock){ 

  var message = "";

  message += "Stock: " + stock + "\n";
  message += document.getElementById('item_list').value;

    alert(message);
}

//prints the text in the console
function printConsole(text){
    console.log(text);
}
