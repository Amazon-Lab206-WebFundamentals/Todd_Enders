function slotMachine(quarters){
    while (quarters > 0){
        var winner = Math.floor(Math.random()*100); // gives us either 0 or 1. 1 should only happen 1 in 100
        if (winner === 1){
            var winnings = Math.floor((Math.random()*50) + 50);
            console.log("You have", quarters, "quarters left"); // added this for checking behavior
            return quarters + winnings;
        }
        quarters--; // lose a quarter every time you're not a winner
    }
    return 0; // if we exit the while loop, we've ran out of quarters, so we're left with 0 winnings
}

console.log(slotMachine(100));