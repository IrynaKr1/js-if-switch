// 1
const isDay = true;

document.write(`
  <body 
    style="background-color: ${isDay ? '#f0f0f0' : '#222'}; 
    color:  ${isDay ? '#222' : '#f0f0f0'}; 
    font-size: 24px; padding: 20px;"
  >
    ${isDay ? 'Світла' : 'Темна'} тема
  </body>
`)

// 2

// const isOnline = true;

// if (!isOnline) {
//   console.log(
//     "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
//   );
// }

// 3
// const toPay = Number(prompt('Введіть суму покупки'));
// let sumToPay = 0;

// if (toPay <= 500) {
//   console.log('Знижка не застосовується');
// } else if (toPay > 500 && toPay < 800) {
//   sumToPay = toPay * 0.97;
//   console.log('Знижка 3%. До заплати: ', sumToPay);
// } else {
//   sumToPay = toPay * 0.95;
//   console.log('Знижка 5%. До заплати: ', sumToPay);
// }

// //Switch 1
// const dayNumber = Number(prompt('Введіть номер дня тижня '));

// switch (dayNumber) {
//   case 1:
//     console.log('Понеділок');
//     break;
//   case 2:
//     console.log('вівторок');
//     break;
//   case 3:
//     console.log('середа');
//     break;
//   case 4:
//     console.log('четвер');
//     break;
//   case 5:
//     console.log("п'ятниця");
//     break;
//   case 6:
//     console.log('субота');
//     break;
//   case 7:
//     console.log('неділя');
//     break;
//   default:
//     console.log('дня з таким номером не існує');
//     break;
// }

// //Switch 2

// const day = 1;

// switch (true) {
//   case day >= 1 && day <= 10:
//     console.log('Перша декада');
//     break;
//   case day >= 11 && day <= 20:
//     console.log('Друга декада');
//     break;
//   case day >= 21 && day <= 31:
//     console.log('Третя декада');
//     break;
//   default:
//     console.log('Введено не правильний номер');
// }
