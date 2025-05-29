// 1
const isDay = true;

if (isDay) {
  document.write(`
        <body style="background-color: #f0f0f0; color: #222; font-size: 24px; padding: 20px;">
          Світла тема
        </body>
      `);
} else {
  document.write(`
        <body style="background-color: #222; color: #f0f0f0; font-size: 24px; padding: 20px;">
          Темна тема
        </body>
      `);
}

// 2

const isOnline = true;

if (!isOnline) {
  console.log(
    "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
  );
}

// 3
const toPay = Number(prompt('Введіть суму покупки'));
let sumToPay = 0;

if (toPay <= 500) {
  console.log('Знижка не застосовується');
} else if (toPay > 500 && toPay < 800) {
  sumToPay = toPay * 0.97;
  console.log('Знижка 3%. До заплати: ', sumToPay);
} else {
  sumToPay = toPay * 0.95;
  console.log('Знижка 5%. До заплати: ', sumToPay);
}
