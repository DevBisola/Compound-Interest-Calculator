function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);
    const compoundings = parseInt(document.getElementById('compoundings').value);

    let results = '';
    let tableBody = '';
    let currentCapital = principal;

    for (let year = 1; year <= time; year++) {
        const interest = currentCapital * Math.pow((1 + rate / compoundings), compoundings * year) - currentCapital;
        currentCapital += interest;

        results += `<p>Year ${year}: Total Amount = $${currentCapital.toFixed(2)}</p>`;
        tableBody += `<tr>
                        <td>${year}</td>
                        <td>${currentCapital.toFixed(2)}</td>
                        <td>${interest.toFixed(2)}</td>
                      </tr>`;
    }

    document.getElementById('results').innerHTML = results;
    document.getElementById('tableBody').innerHTML = tableBody;
}

function resetFields() {
    document.getElementById('principal').value = '';
    document.getElementById
}