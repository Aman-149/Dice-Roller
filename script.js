function rollDice(){

    const numofDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values =[]
    const images = [];
    
    for (let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_image/${value}.png" alt="Dice ${value}" class="dice-image"/>`);
    }
    diceResult.textContent=` Dice:  ${values.join(",")}`;
    diceImages.innerHTML = images.join("");

}
