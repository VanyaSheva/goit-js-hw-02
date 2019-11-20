const checkForSpam = function(str) {
  const SpamWords = ["spam", "sale"];
  let lowString = str.toLowerCase();
  for (let i = 0; i < SpamWords.length; i++) {
    if (lowString.includes(SpamWords[i])) {
      return true;
    }
  }
  return false;
};
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("SPAM How to earn fast money?")); // true
