function first() {

  const arr1 = ['abc',  123, {attr1: 'attr1'}];
  const arr2 = ['aaa',  111, {attr2: 'attr2'}];
  // let i;

  const maAnonFce1 = (element) => { // anaonymni funkce, je ji jedno, jak jsou pojmenovane
    // console.log('ELEMENT 1 => ', element);
  }

  const maAnonFce2 = (element, key, attr3) => { // element, poradi prvku, cele pole
    // console.log('ELEMENT 2 => ', element);
    // console.log('KEY => ', key);
    // console.log('SOME => ', attr3);
  }

  const delArr2 = arr2.filter((element) => {
    if (element === 'aaa') {
      return false;
    }

    return true
  })

  console.log('Delete from arr2 ', delArr2);

  arr1.forEach(maAnonFce2); // predavam referenci, nevolam primo funkci
  // maAnonFce1(); primo vola funkci

  arr2.forEach((element) => console.log('ELEMENT 3 => ', element));

}

export function second(someText, someNumber) {
  const result = `${someText} -- ${someNumber}`;
  return result;
}

export default first;
