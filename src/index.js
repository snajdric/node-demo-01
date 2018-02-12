import express from 'express';
import {app} from './consts';
import first, { second } from './demo1.js';

//here routes defined
import './routes';

app.listen(3000, () => {
  first();
  console.log('ES6 application listening on port 3000!');
  // const result = Second('asdfa', 67);
  // console.log(result);
});
