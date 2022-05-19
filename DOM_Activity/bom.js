const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
console.log("this is a start")

button.addEventListener('click', () => {

    console.log("This is working");

    const myItem = input.value
    input.value = '';
    const img = document.createElement('x')
    img.src = "favicon.ico"

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);

    listButton.img
    list.appendChild(listItem);

    listButton.addEventListener('click', () =>
    {
        list.removeChild(listItem);
    })

    input.focus();

})
