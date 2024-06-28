//creating an array with letters and randomly assigning letters to the grids
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];

const shuffle = (array) => { //do not write array: string[] because its only for typescript
    return array.sort(() => Math.random() - 0.5)
}

const shuffledArray = shuffle(alphabets);
let arrayLength = shuffledArray.length;
console.log(shuffledArray);

//creating the divs dynamically, got solution from stack overflow
var cardContainer = document.createElement('div');
cardContainer.id = 'block';
cardContainer.className =  'card-container';
document.getElementsByTagName('body')[0].appendChild(cardContainer);

let i = 1;
while (i <= 16) {
    var innerDiv = document.createElement('div');
    innerDiv.className = 'cards';
    innerDiv.id = 'letterContainer'

    for(v = 0; v <= shuffledArray.length; v++) {
        innerDiv.innerText = shuffledArray[v];
    }

    document.getElementById('block').appendChild(innerDiv);
    i++;
}
console.log(innerDiv);

let b = 1;
while (b <= 16) {
    var spanLetters = document.createElement('span');
    spanLetters.className = 'letters';
    spanLetters.style.backgroundColor = 'white';

    /*for (x in innerDiv) {
        document.getElementById('letterContainer').appendChild(spanLetters); 
    }*/
    b++;
}
console.log(spanLetters);

const mySpan = document.getElementsByClassName('letters');
console.log(mySpan);


/*const allCards = document.getElementById('cards');

function assignLetters(x){
    for(i = 0; i < allCards.length; i++){
        while (y <= shuffledArray.length){
            document.getElementById('letters').innerHTML = shuffledArray[y];
           //allCards[i].innerHTML = shuffledArray[y];
            y++;
        }
    }
}*/

//creating the divs dynamically but hiding the text
/*function assignLetters(x){
    let items = '';
    for (let i = 0; i < 17; i++){
        items += `<div>${x[i]}</div>`;
    }
    return items;
}

document.querySelector('card-container').innerHTML = `<span>${assignLetters(shuffledArray)}</span>`;
console.log(assignLetters);*/