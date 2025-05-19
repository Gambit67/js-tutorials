/*This asks for amonut of money a user has, calculates how much
bottles he can get and give the balance*/

var amount=prompt("How much do you have");
getMilk(amount);

function getMilk(bottles){
    var cost=Math.floor(bottles/5);
    var balance=(bottles%5);
    alert(" You can buy "+cost+" bottles, $" +balance+ " is your balance." );
}
