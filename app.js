var input1 = document.querySelector("#input1");
var globalArr = [];
var showList = document.querySelector("#showList");

function display() {
    console.log(input1.value); 
    globalArr.push(input1.value); 
    console.log(globalArr);

    var list = "";
    for (var i = 0; i < globalArr.length; i++) {
        list += `<li>${globalArr[i]} <button class="button-delete" onclick="deleteDisplay(${i})">DELETE</button> <button class="button-edit" onclick="editDisplay(${i})">EDIT</button> </li>`;
    }

    showList.innerHTML = '<ol>' + list + '</ol>';
    input1.value = "";
}

function deleteDisplay(index) {
    globalArr.splice(index , 1);

    var list = "";
    for (var i = 0; i < globalArr.length; i++) {
        list += `<li>${globalArr[i]} <button class="button-delete" onclick="deleteDisplay(${i})">DELETE</button> <button class="button-edit" onclick="editDisplay(${i})">EDIT</button> </li>`;
    }

    console.log(globalArr);

    showList.innerHTML = '<ol>' + list + '</ol>';
}

function editDisplay(index) {
    var editWork = prompt("Type the edit item", globalArr[index]);

    if (editWork !== null && editWork.trim() !== "") {
        globalArr[index] = editWork;    
    } else {

    }

    var list = "";
    for (var i = 0; i < globalArr.length; i++) {
        list += `<li>${globalArr[i]} <button class="button-delete" onclick="deleteDisplay(${i})">DELETE</button> <button class="button-edit" onclick="editDisplay(${i})">EDIT</button> </li>`;
    }

    showList.innerHTML = '<ol>' + list + '</ol>';
}
