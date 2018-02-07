import express from 'express';
import {app} from './consts';
import First, { Second } from './demo1.js';

//here routes defined
import './routes';

app.listen(3000, () => {
  // First(1, 88);
  console.log('ES6 application listening on port 3000!');
  // const result = Second('asdfa', 67);
  // console.log(result);
});
