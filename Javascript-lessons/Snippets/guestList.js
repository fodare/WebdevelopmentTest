var guests = ["Damilare", "Rita", "Candyrose", "Atinuke", "Samuel", "Janet", "Korede", "Timi", "Olumide", "Seyi", "Tumininu"];
function addGuest(userName){
    userName = prompt("Please enter your name: ");
    if (userName == guests){
        guests.push(userName);
    }
    else{
        alert(`You are already present in the list!`);
    }
    return guests;
}

addGuest();