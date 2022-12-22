let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.querySelector('#filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


//Add item Function
function addItem(e) {
  e.preventDefault();

  //Get input value
  let newItem = document.getElementById('item');

  //Create new li element
  let li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  //Add text node with input value
  li.append(document.createTextNode(newItem.value));

  //Create delet button element
  let deleteBtn = document.createElement('button');

  //Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Append text node
  deleteBtn.append(document.createTextNode('X'));

  //Append button to li
  li.append(deleteBtn);

  //Append li to list
  itemList.append(li)

  // Reset Input field
  newItem.value = "";
}

//Remove Item Function
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items Function
function filterItems(e) {
  // convert all text to lower case
  let text = e.target.value.toLowerCase();
  // Get list
  let items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}