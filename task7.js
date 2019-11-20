const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  return !(login.length < 4 || login.length > 16);
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (!isLoginUnique(allLogins, login)) {
    console.log("Такой логин уже используется!");
  } else {
    allLogins.push(login);
    console.log("Логин успешно добавлен!");
  }
};
addLogin(logins, "Ajax");
addLogin(logins, "robotGoogles");
addLogin(logins, "Zod");
addLogin(logins, "jqueryisextremelyfast");
addLogin(logins, "jqueryisex");
addLogin(logins, "jqueryisextremelyffffggast");
addLogin(logins, "Ajax");
console.log(logins);
