import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');

const financeReport = document.querySelector('.finance__report');
const report = document.querySelector('.report');


let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const typeOperation = e.submitter.dataset.typeOperation;

    const changeAmount = convertStringNumber(financeForm.amount.value);

    if (typeOperation === 'expenses') {
        amount -= changeAmount;
    }

    if (typeOperation === 'income') {
        amount += changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()} ₽`;
})

financeReport.addEventListener('click', () => {
    report.classList.add('report__open');
})