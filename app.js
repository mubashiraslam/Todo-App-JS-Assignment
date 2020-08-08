var list = document.getElementById("items-list")
var count;

function addItem(){
    count++;
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
    count--;
}

function deleteAll(dl){
    // var dl =  list.getElementsByTagName("li")
    // dl.style.display = "none";
    // var dl = list.childNodes
    // dl.remove();
    var temp = dl.parentNode
    console.log(temp)
}