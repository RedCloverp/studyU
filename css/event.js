const btn = document.querySelector('button');


let i = 0;

const deleteElement = (e) => {
    console.log('hi');
    // e.target.remove();
    i++;
    if (i == 2) {
        btn.removeEventListener('click', deleteElement);
    }


}

btn.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //отменяет стандартное поведение
    console.log(event.target)
})