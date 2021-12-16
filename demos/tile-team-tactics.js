// Tile Teamwork Tactics
// https://edabit.com/challenge/NHfYRHg2tDtcZyykB

function possibleBonus(a, b) {
  let difference = b - a;
  if (difference > 0 && difference < 7) return true;
  return false;
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
console.log(possibleBonus(5, 5));