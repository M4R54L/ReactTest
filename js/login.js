console.log('inicio js');
let n = 0;

function test() {
    n++;
    // var Item = document.querySelector('.lista li:nth-child(' + n + ')');
    // console.log(Item);

    // if (Item !== null) {
    //     Item.classList.toggle("test");
    //     Item.addEventListener("click", function() {
    //         alert(Item.textContent);
    //     });
    //     console.log(n);
    // } else {
    //     alert('Ya no hay más elementos');
    // }

    var Items = document.querySelectorAll('ul li');
    Items.forEach(item => console.log(item.textContent));
}

function addItem() {
    var list = document.querySelector('ul');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode('Otro'));
    list.appendChild(item);
}

let btnTest = document.querySelector('#btnTest');
btnTest.addEventListener('click', () => {
    alert('h0lassss');
    console.log('esto es una pruebas');
});