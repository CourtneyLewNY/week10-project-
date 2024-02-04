//used this to give each today a task using an id
let id = 0;

//create a new row and add it to the new table
document.getElementById('add').addEventListener('click', () => {
    // sets date created for the id
    let createdDate = new Date();
    // set reference for the table
    let table = document.getElementById('list');
    // create row where you insert positions of the row
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    // this allows use to set the first value in the row
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    // create the button that is our actions button using let actions
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});

// this button gives us control of which id to delete using the function
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}