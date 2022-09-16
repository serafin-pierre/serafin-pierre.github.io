function sandwichForPeople() {
  let hungryPeople = 5
  let Sandwiches = 0
  // Variable     //Condition for looping       //Loop does this
  for (Sandwiches = 0; Sandwiches < hungryPeople + 1; Sandwiches++) {
    sanTotal = Sandwiches
  }
  document.getElementById('sandwichCounter').innerHTML =
    'Sandwiches: ' + sanTotal
}

document.getElementById('sandwichButton').onclick = sandwichForPeople
