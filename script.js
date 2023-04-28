console.log('funguju!');

// fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
// })

const formularElm = document.querySelector('.form');
const buttonElm = document.querySelector('.form__button');
const inputElm = document.querySelector('.form__input');

// const ukaz = (event) => {
//     event.preventDefault();
//     console.log('klik');
//     fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         document.querySelector('.heslo').innerHTML = data.password;
//     })
// }

// buttonElm.addEventListener('click', ukaz);

const zobraz = (event) => {
    event.preventDefault();
    console.log('klik');
    console.log(inputElm.value);
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${inputElm.value}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.querySelector('.heslo').innerHTML = data.password;
    })
}

formularElm.addEventListener('submit', zobraz);