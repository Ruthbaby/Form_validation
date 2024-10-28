const adj1 = document.getElementById('adj1');
const adj2 = document.getElementById('adj2');
const clothing = document.getElementById('clothing');
const verb = document.getElementById('verb');
const noun = document.getElementById('noun');
const food = document.getElementById('food');
const books = document.getElementById('books');
const bodyPart = document.getElementById('bodyPart');

//variable  to display the mad Lib
const madLibDisplay = document.querySelector('.mad-lib');
console.log(madLibDisplay);

//variable for the form
const form = document.querySelector('form');
console.log(form);

//variable for the mad lib story
const story = `This is my desire to <b>${noun}</b> worship you <b>${adj1}</b>, Oh my God! You are my <b>${verb}</b> strength and shield <b>${books}</b> I love you Lord.`;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (adj1.value == "") {
    alert(`${adj1.name} must be filled out!`);
    adj1.focus();
  }else if(noun.value == "") {
    alert(`${noun.name} must be filled out!`);
    noun.focus();
  }else if(clothing.value == "") {
    alert(`${clothing.name} must be filled out!`);
    clothing.focus();
  }else if(books.value == "") {
    alert(`${books.name} must be filled out!`);
    books.focus();
  }else if(adj2.value == "") {
    alert(`${adj2.name} must be filled out!`);
    adj2.focus();
  }else if(verb.value == "") {
    alert(`${verb.name} must be filled out!`);
    verb.focus();
  }else if(bodyPart.value == "") {
    alert(`${bodyPart.name} must be filled out!`);
    bodyPart.focus();
  }else if(food.value == "") {
    alert(`${food.name} must be filled out!`);
    food.focus();
  }else {
    madLibStoryDisplay();
  }
});

function madLibStoryDisplay () {
  madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun}`, noun.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${adj1}`, bodyPart.value)
    .replace(`${verb}`, verb.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${food}`, food.value)
    .replace(`${books}`, books.value);
}
