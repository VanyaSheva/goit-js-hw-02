const logItems = function(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `Number of the element is ${i + 1} and the element is ${array[i]}`
    );
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
