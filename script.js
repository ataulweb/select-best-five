
const selectedNumberArray = []

function display(addedName){

    const displayOrderField = document.getElementById('display-order-field');
    displayOrderField.innerHTML = ''

    for(let i = 0; i < addedName.length; i++)
    {
        const name = selectedNumberArray[i].name;
        const li = document.createElement('li');

        li.innerHTML = 
        `
        <li class="mt-4"> ${name}</li>
        `
        displayOrderField.appendChild(li);
    }
}

function addName(element){
    const addNameField = element.parentNode.children[0].innerText;
    
    const nameobject = {
        name: addNameField
    }
    
    selectedNumberArray.push(nameobject)
    document.getElementById('selected-player-number').innerText = selectedNumberArray.length;

    if(selectedNumberArray.length > 5){
       return alert("You can take only five Players");
    }
    display(selectedNumberArray);

}