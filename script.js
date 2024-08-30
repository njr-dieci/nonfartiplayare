document.getElementById('marriageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il refresh della pagina

    // Prendi i valori inseriti
    const ageBride = parseInt(document.getElementById('ageBride').value);
    const partnersBride = parseInt(document.getElementById('partnersBride').value);
    const ageGroom = parseInt(document.getElementById('ageGroom').value);
    const partnersGroom = parseInt(document.getElementById('partnersGroom').value);

    // Formula per calcolare il valore del matrimonio
    const baseValue = 100.000; // Valore di base del matrimonio
    const penaltyPerPartner = 500; // Penalità per ogni partner
    const ageDifferencePenalty = 100; // Penalità per ogni anno di differenza d'età

    const totalPartners = partnersBride + partnersGroom;
    const ageDifference = Math.abs(ageBride - ageGroom);

    const marriageValue = baseValue - (totalPartners * penaltyPerPartner) - (ageDifference * ageDifferencePenalty);

    // Mostra il risultato
    const resultDiv = document.getElementById('result');
    
    if (marriageValue > 0) {
        resultDiv.textContent = `Il valore del matrimonio è: €${marriageValue}`;
    } else {
        resultDiv.textContent = "Il matrimonio non ha più valore!";
    }

    // Funzione per creare e far esplodere i palloncini
    createBalloons();
});

function createBalloons() {
    // Rimuovi i palloncini precedenti se ce ne sono
    let existingContainer = document.querySelector('.balloons-container');
    if (existingContainer) {
        existingContainer.remove();
    }

    // Crea il container dei palloncini
    const container = document.createElement('div');
    container.classList.add('balloons-container');
    document.body.appendChild(container);

    // Crea 5 palloncini
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        container.appendChild(balloon);
    }

    // Rimuovi i palloncini dopo che sono volati via
    setTimeout(() => {
        container.remove();
    }, 6000);
}
