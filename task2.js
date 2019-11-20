const calculateEngravingPrice = function(message, pricePerWord) {
  let words = message.split(" ");
  let totalPrice = pricePerWord * words.length;
  return totalPrice;
};
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));
console.log(calculateEngravingPrice("Lorem ipsum dolor sit amet qwe qwe", 20));
