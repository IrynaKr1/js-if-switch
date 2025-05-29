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
