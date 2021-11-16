function rotateRightmostDigits(digit, count) {
  let numberString = String(digit);
  let leftSide = numberString.slice(0, numberString.length - count);
  let rightSide = numberString.slice(numberString.length - count);
  console.log(Number(leftSide + rotateDigit(rightSide)));
}

function rotateDigit(digit) {
  return digit.slice(1) + digit[0];
}
rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
