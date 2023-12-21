var items = JSON.parse(localStorage.getItem("todo-list")) || [];
function additems() {
  var inputBox = document.querySelector("#input");
  var item = inputBox.value;
  if (item === "")
    return (document.getElementById("list").innerHTML =alert(
      "Enter an item"));
  items.push({
    value: item,
  });

  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
  inputBox.value = "";
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function listItems() {
  var list_item = "";
  for (var k = 0; k < items.length; k++) {
    list_item += "<li>";
    list_item += items[k].value + " ";
    list_item +=
      "<span onclick='deleteItem(" +
      k +
      ")'><button class='remove'>Remove</button></span></li>";
  }
  document.querySelector("#todo-list").innerHTML = list_item;
}

(function () {
  listItems();
})();
