const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const myItem = input.value
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');
    
    if (input.value == 0) {
        alert("Please enter a valid input.");
    }

    else {

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listButton);
        listButton.textContent = "X";
        list.appendChild(listItem);
        input.value = '';

        
        listButton.addEventListener('click', () =>
        {
            list.removeChild(listItem);
        })

        input.focus(); 
    }
})
