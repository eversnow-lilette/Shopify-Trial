// Put your application javascript here
//Cart Item Counter
function addCartIndex(){
    let addCartForm = document.querySelector('form[action="/cart/add"]');
    let formData = new FormData(addCartForm);

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

function addIndex(){
    var count = parseInt(document.getElementById('item_index').value) + 0;
    count ++;
    document.getElementById('item_index').setAttribute('value', count);
}

function addItems(item, quantity, amount){
   var items = "Item: " + item + " Quantity: " + quantity + " Amount: " + amount +"\n";
   var value = document.getElementById('item_list').value

   value += items;

   document.getElementById('item_list').setAttribute('value', value)
}

function openModal(stock){ 

  var message = "";

  message += "Stock: " + stock + "\n";
  message += document.getElementById('item_list').value;

    alert(message);
}

function printConsole(text){
    console.log(text);
}
