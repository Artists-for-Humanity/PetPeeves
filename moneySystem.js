let playerMoney = 0;
let moneyText; 

function loadMoney() {
    const storedMoney = localStorage.getItem('playerMoney');
    if (storedMoney) {
        playerMoney = parseInt(storedMoney, 10);
    }
}


function addMoney(amount) {
    playerMoney += amount;
    updateMoney();
    saveMoney();
}

function subtractMoney(amount) {
    if (playerMoney >= amount) {
        playerMoney -= amount;
        updateMoney();
        saveMoney();
    } else {
        console.log("no money :(");
    }
}

function updateMoney() {
    if (moneyText) {
        moneyText.setText('money: $' + playerMoney, { fontSize: '32px', fill: '#00000' });
    }
}


function saveMoney () 
    {
    localStorage.setItem('playerMoney', playerMoney);
    }