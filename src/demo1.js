function first() {

  // forEach
  // map (vzdy zachova pocet prvku)
  // filter


  const arr1 = ['abc',  123, {attr1: 'attr1'}];

  arr1.forEach((element, key) => {
    console.log('muj prvek pole arr1', element),
    console.log('muj klic pole arr1', key);

  })

  arr1.push('eee'); // pridava vzdy na konec pole, funguje i nad konstantami, pozor na mutace !!!
  arr1.splice(2, 0, 'OOO'); // position, number of items to remove, item

  const novePole = arr1.map((prvek, klic) => {
      console.log('map prvek pole arr1', prvek);
      console.log('map klic pole arr1', klic);
      if (prvek === 123) {
        return 999;
      }

    return prvek;
    });

  console.log('******************');
  console.log('Stare Pole: ', arr1);
  console.log('Nove Pole: ', novePole);
  console.log('******************');

  const filterPole = arr1.filter((prvek, klic) => {

    if (prvek !== 123) {
      return true;
    }
    return false;
  });

  console.log('******************');
  console.log('Stare Pole: ', arr1);
  console.log('Nove Pole: ', filterPole);
  console.log('******************');

}

function second() {

  // const pc
  const seznam = [
    { name: 'pc', status: 'online' },
    { name: 'pc2', status: 'offline' },
    { name: 'pc3', status: 'online' },
  ];

  const seznamOnline = seznam.filter((pc) => {
    if (pc.status === 'online') {
      return true;
    }
    return false;
  });

  console.log('seznam PC', seznam);
  console.log('seznam online', seznamOnline);

}


export default first;
export { second };
