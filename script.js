const mainContainer = document.getElementById('age-calculator-container');
const inputParams = mainContainer.querySelector('.input-params');
const inputDivElements = inputParams.getElementsByClassName('el');
const outputContainer = mainContainer.querySelector('.output');

mainContainer.querySelector('.submit-btn').addEventListener('click', () => {
    outputContainer.querySelectorAll('.number').forEach(el => el.innerHTML = '--');
    const day = Number(inputParams.querySelector('#inp-d').value);
    const month = Number(inputParams.querySelector('#inp-m').value) - 1;
    const year = Number(inputParams.querySelector('#inp-y').value);
    const today = new Date();
    const daysInMonths = [31, (year % 4 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month >= 0 && month < 12 && day >= 1 && day <= daysInMonths[month] && year > 1900 && year < new Date(today).getFullYear())
    {
        mainContainer.querySelector('#invalid-date').style.visibility = 'hidden';
        for (let i = 0; i < inputDivElements.length; i++) {
            inputDivElements[i].querySelector('.text').style.color = 'gray';
            inputDivElements[i].querySelector('input').style.borderColor = 'gray';
        }

        let years = today.getFullYear() - year;
        let months = today.getMonth() - month;
        let days = today.getDate() - day;
        if (months < 0) {
            months += 12;
            years--;
        }
        if (days < 0) {
            days += 31;
            months--;
        }

        outputContainer.querySelector('.years').querySelector('.number').innerHTML = years;
        outputContainer.querySelector('.months').querySelector('.number').innerHTML = months;
        outputContainer.querySelector('.days').querySelector('.number').innerHTML = days;
    }
    else
    {
        mainContainer.querySelector('#invalid-date').style.visibility = 'visible';
        for (let i = 0; i < inputDivElements.length; i++) {
            inputDivElements[i].querySelector('.text').style.color = 'red';
            inputDivElements[i].querySelector('input').style.borderColor = 'red';
        }
    }
});