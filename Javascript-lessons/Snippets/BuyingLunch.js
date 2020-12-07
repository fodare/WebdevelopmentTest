// A function that takes a random name from a list and then
// use it as the person responsible for paying for lunch.

function whos_paying(names){
    var num_people = names.length();
    var randomPersonPosition = Math.floor(Math.random() * num_people);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today";
}