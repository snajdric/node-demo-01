function first(numberOne, secondNumber) {
  console.log("number one", numberOne);
  console.log("number two", secondNumber);
}

export function second(someText, someNumber) {
  const result = `${someText} -- ${someNumber}`;
  return result;
}


export default first;
