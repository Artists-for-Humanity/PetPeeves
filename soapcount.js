let soapCount = 0;
let soapText; 

function storedSoap() {
    const storedSoap = localStorage.getItem('soapCount');
    if (storedSoap) {
        soapCount = parseInt(storedSoap, 10);
    }
}


function addSoap(amount) {
    soapCount += amount;
    updateSoap();
    saveSoap();
}

function subtractSoap(amount) {
    if (soapCount >= amount) {
        soapCount -= amount;
        updateSoap();
        saveSoap();
    } else {
        console.log("no money :(");
    }
}

function updateSoap() {
    if (soapText) {
        soapText.setText('Soap: ' + soapCount, { fontFamily: 'Arial Black', fontSize: '20px', fill: '#00000' });
    }
}


function saveSoap () 
    {
    localStorage.setItem('soapCount', soapCount);
    }