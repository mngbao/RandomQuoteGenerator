const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const quotes = [
  '"The purpose of our lives is to be happy." </br>— Dalai Lama',
  '"Life is what happens when you’re busy making other plans."</br> — John Lennon',
  '"Get busy living or get busy dying."</br> — Stephen King',
  '"You only live once, but if you do it right, once is enough."</br> — Mae West',
  '"If you want to live a happy life, tie it to a goal, not to people or things."</br>– Albert Einstein',
  '"Never let the fear of striking out keep you from playing the game."</br>– Babe Ruth',
  '“Money and success don’t change people; they merely amplify what is already there.”</br>— Will Smith',
  '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” </br>– Steve Jobs',
  '“Not how long, but how well you have lived is the main thing.” </br>— Seneca',
  '“In order to write about life first you must live it.”</br>– Ernest Hemingway',
  '“The big lesson in life, baby, is never be scared of anyone or anything.”</br>– Frank Sinatra',
  '“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”</br>– Leo Burnett',
];

btn.addEventListener("click", () => {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  
  output.innerHTML = randomQuote
  
})

