function dragStart(ev) {
  ev.dataTransfer.effectAllowed = "move";
  ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
  ev.dataTransfer.setDragImage(ev.target, 0, 0);
  updateValues();
  return true;
}
function dragEnter(ev) {
  ev.preventDefault();
  return true;
}
function dragOver(ev) {
  return false;
}
function dragDrop(ev) {
  var src = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(src));
  ev.stopPropagation();
  updateValues();
  return false;
}

function updateValues() {
  var total_items_comp = document.getElementById("total-itens");
  var total_comp = document.getElementById("valor-total");

  // Counts and set the items in cart
  var prods_in_cart = $("#carrinho .prod").length;
  total_items_comp.innerHTML = ""+prods_in_cart;

  var total = 0;
  for (i = 0; i < prods_in_cart; i++) {
    var individual_price = $("input[type='text'][name='valor']");
    var quantity = $("input[type='number'][name='qtde'");
    var price = (individual_price.val() * quantity.val());
    total += price;

    console.log("Preço individual: "+individual_price.val())
    console.log("Qtde: "+quantity.val())
    console.log(total)
  }

  total_comp.innerHTML = total;
}
