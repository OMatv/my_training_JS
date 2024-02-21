/*
const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;

console.log(totalPrice);
**/

/*
У цьому прикладі спочатку перевіряється умова grade >= 90.
Оскільки перша умова (grade >= 90) помилкова, то тіло if не виконується і перевіряється наступна умова (grade >= 80). Ця умова є істинною, тому виконується тіло else if, тобто console.log("Good"). Подальші умови вже перевірятись не будуть.
*/

/*
const grade = 60;
if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

**/

/**
Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Використовуючи розгалуження, доповни код функції таким чином, щоб:
Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
**/
/**
function checkStorage(available, ordered) {
  let available = 5;
  let ordered = 5;

  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}

**/
/*/
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type);
**/
/**
const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type);
**/

/**
Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.
Використовуючи тернарний оператор, доповни функцію таким чином, щоб:
Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
В іншому випадку, функція повертала рядок "Access denied, wrong password!"
Оголошена функція checkPassword(password)
Використано тернарний оператор
Виклик checkPassword("jqueryismyjam") повертає "Access granted"
Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
**/
/**
function checkPassword(password) {
  const correctPassword = "jqueryismyjam";

  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));

**/

/**
 * У цьому прикладі виразом є значення змінної fruit, яке порівнюється з різними значеннями блоків case. Якщо значення fruit відповідає одному з них, буде виведено відповідне повідомлення. Якщо жоден блок case не підійде, буде виконано код у блоці default.
Із прикладу видно, що застосування switch обмежене завданнями з одним загальним питанням (що порівнювати) та безліччю варіантів відповідей (з чим порівнювати).
Вираз у блоці switch — вираз будь-якого типу (змінна чи складні обчислення), результат якого послідовно зверху вниз, суворо порівнюється (===) з усіма значеннями в блоках case. Тобто не можна порівняти на більше чи менше, лише на сувору рівність.
Оператор break додається наприкінці кожного блоку case. Функція оператора break — перервати подальші перевірки й відразу перейти до коду, що йде після switch, щойно виконався якийсь із блоків case.
Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням. Для цього в кінці після всіх блоків case додається блок default.
Оператор break після блоку default не потрібен, тому що це і так останнє, що буде виконано у switch і управління буде передано коду за ним.

 */
/**
const fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("apple selected");
    break;
  case "banana":
    console.log("banana selected");
    break;
  case "orange":
    console.log("orange selected");
    break;
  default:
    console.log("The fruit is unknown");
}
**/

/**
 *У цьому прикладі кілька блоків (case 1, case 2, case 3, case 4, case 5) провалюються і у випадку їх рівності виразу виконається один і той самий код, тому що між ними немає операторів break.
 *
 */
/**
function getSubskriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
    case "professional":
      return 20;
    case "organisation":
      return 50;
    default:
      return "Invalid subscription type!";
  }
}
**/
/**
 * if (null) {
  console.log("block if");
} else {
  console.log("block else");
}
**/
/*
if (0) {
  console.log("block if");
} else {
  console.log("block else");
}


*/

/*
if (5) {
  console.log("block if");
} else {
  console.log("block else");
}
*/
/*
if ("") {
  console.log("block if");
} else {
  console.log("block else");
}
*/
/*
if ("banana") {
  console.log("block if");
} else {
  console.log("block else");
}
*/

/*
const a = 20;
console.log(a > 10 && a < 30);

const b = 50;
console.log(b > 10 && b < 30);
console.log(b > 80 && b < 120);
*/

/*Оператор && може бути не тільки самостійною умовою, а й частиною більш складних умов, наприклад, в умові інструкції if
Оператор && може бути не тільки самостійною умовою, а й частиною більш складних умов, наприклад, в умові інструкції if
*/
/*
const screenWidth = 1300;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
  console.log("Mobile screen");
} else if (screenWidth > sm && screenWidth <= md) {
  console.log("Tablet screen");
} else if (screenWidth > md && screenWidth <= lg) {
  console.log("Desktop screen");
} else {
  console.log("Godzilla screen");
}
*/

/*
Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
number - число, входження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку
Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.
*/

/*
function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));
*/

/*
const a = 5;
console.log(a < 10 || a > 10);

const b = 50;
console.log(a < 10 || b > 30);

const c = 20;
console.log(c - 20 || c * 2);
*/

/*
Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.
*/
/*
function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
}

console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));

*/
/*
const isBlocked = false;
const canChat = !isBlocked; //!false -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!");
}
*/

/*
Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
*/
/*
const isVisible = true;
function toggleModalVisibility(isVisible) {
  return !isVisible;
}

console.log(toggleModalVisibility());
*/

/*
Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
string - оригінальний рядок
length - довжина нового підрядка
Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.
*/
/*
function getSubstring(string, length) {
  return string.slice(0, length);
}

console.log(getSubstring("hello world", 8)); //hello wo
console.log(getSubstring("hello world", 11)); //hello world
console.log(getSubstring("hello world", 0)); //''
*/

/*
Функція normalizeInput(input, to) оголошує два параметри:
input - рядок, який потрібно привести до певного регістру
to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
Доповни код функції таким чином, щоб:
Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
В іншому разі, функція повертала копію рядка inputу нижньому регістрі
*/
/*
function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(normalizeInput("This ISN`t Spam"));

*/

/*
Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.
-----------------fullName - рядок, що містить повне ім'я
--------firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
*/

function checkForName(fullName, firstName) {
  const lowerCaseFullName = fullName.toLowerCase();
  const lowerCaseFirstName = firstName.toLowerCase();
  return;
  lowerCaseFullName.includes(lowerCaseFirstName);
}

console.log(checkForName("Jason Neis"));
