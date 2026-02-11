function addRow() {
    let table = document.getElementById("billBody");

    let row = table.insertRow();

    row.innerHTML = `
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="number" value="1" oninput="calculate(this)"></td>
        <td><input type="number" value="0" oninput="calculate(this)"></td>
        <td class="amount">0</td>
        <td><button onclick="deleteRow(this)">❌</button></td>
    `;
}

function calculate(element) {
    let row = element.parentElement.parentElement;

    let qty = row.cells[2].querySelector("input").value;
    let rate = row.cells[3].querySelector("input").value;

    let amount = qty * rate;
    row.cells[4].innerText = amount;

    calculateTotal();
}

function calculateTotal() {
    let amounts = document.getElementsByClassName("amount");
    let total = 0;

    for (let i = 0; i < amounts.length; i++) {
        total += Number(amounts[i].innerText);
    }

    document.getElementById("total").innerText = total;
}

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
    calculateTotal();
}
