var list = document.getElementById("items-list")

function addItem(){
    var todoValue = document.getElementById("todo-item");

    //Create List Item
    var li = document.createElement("li");
    var liText = document.createTextNode(todoValue.value)
    li.appendChild(liText);
    list.appendChild(li);
    todoValue.value = ""

    //Create Edit Button
    var editBtn = document.createElement("button");
    var editT = document.createTextNode("Edit");
    editBtn.appendChild(editT);
    editBtn.setAttribute("class","small-btn")
    editBtn.setAttribute("onclick","editItem(this)")
    list.appendChild(editBtn);

    //Create Delete Button
    var deleteBtn = document.createElement("button");
    var deleteT = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteT)
    deleteBtn.setAttribute("class","small-btn")
    deleteBtn.setAttribute("onclick","deleteItem(this)")
    list.appendChild(deleteBtn);

}

function deleteItem(d){
    d.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e){
    var oldItem = e.parentNode.firstChild.nodeValue;
    var newItem = prompt("Enter new item",oldItem)
    e.parentNode.firstChild.nodeValue = newItem;
}